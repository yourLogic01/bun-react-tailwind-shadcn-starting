import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
};

export const SearchBar: React.FC<Props> = ({ value, onChange, placeholder }) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="search">Search character</Label>
      <Input id="search" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder ?? "e.g., Goku"} />
    </div>
  );
};
