import React, { useEffect, useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CharacterCard } from "./CharacterCard";
import { SearchBar } from "./SearchBar";

type Character = { id: number; name: string; image: string };

export default function DragonBallSection() {
  const [data, setData] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch("https://dragonball-api.com/api/characters?limit=28&page=1");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        const items: Character[] = Array.isArray(json) ? json : json.items ?? json;
        const sanitized = (items ?? []).filter((c: any) => c?.name && c?.image);
        if (!cancelled) setData(sanitized);
      } catch (e: any) {
        if (!cancelled) setError(e.message ?? "Failed to fetch");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return data;
    return data.filter((c) => c.name.toLowerCase().includes(q));
  }, [query, data]);

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-muted text-left">
      <CardContent className="pt-6 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Dragon Ball Characters</h2>
        </div>

        <SearchBar value={query} onChange={setQuery} placeholder="Search by name (e.g., Goku, Vegeta)" />

        {error && <div className="text-red-500">Failed to load: {error}</div>}

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="space-y-3 animate-pulse">
                <div className="h-6 w-1/2 bg-slate-300 dark:bg-slate-700 rounded" />
                <div className="h-48 w-full bg-slate-300 dark:bg-slate-700 rounded-xl" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((c) => (
              <CharacterCard key={c.id ?? c.name} name={c.name} image={c.image} />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
