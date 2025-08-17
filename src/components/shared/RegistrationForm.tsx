import { useForm } from "@tanstack/react-form";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { toast } from "sonner";

type FormData = {
  fullName: string;
  email: string;
  password: string;
  age: number;
  birthdate: string;
  gender: string;
  learningPath: string[];
  addNotes: boolean;
  notes?: string;
};

export default function RegistrationForm() {
  const [participants, setParticipants] = useState<FormData[]>([]);
  const [showNotes, setShowNotes] = useState(false);

  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      age: 0,
      birthdate: "",
      gender: "",
      learningPath: [],
      addNotes: false,
      notes: "",
    },
    onSubmit: async ({ value }) => {
      console.log("Form Submitted:", value);
      setParticipants((prev) => [...prev, value]);

      toast.success("Registrasi berhasil!", {
        description: "Peserta berhasil ditambahkan.",
      });

      form.reset();
      setShowNotes(false);
    },
  });

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Bootcamp Registration</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className="space-y-4"
      >
        <form.Field name="fullName">
          {(field) => (
            <div>
              <Label>Full Name</Label>
              <Input required value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} />
            </div>
          )}
        </form.Field>

        <form.Field name="email">
          {(field) => (
            <div>
              <Label>Email</Label>
              <Input type="email" value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} />
            </div>
          )}
        </form.Field>

        <form.Field name="password">
          {(field) => (
            <div>
              <Label>Password</Label>
              <Input type="password" value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} />
            </div>
          )}
        </form.Field>

        <form.Field name="age">
          {(field) => (
            <div>
              <Label>Age</Label>
              <Input type="number" min={0} value={field.state.value} onChange={(e) => field.handleChange(Number(e.target.value))} />
            </div>
          )}
        </form.Field>

        <form.Field name="birthdate">
          {(field) => (
            <div>
              <Label>Birthdate</Label>
              <Input type="date" value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} />
            </div>
          )}
        </form.Field>

        <form.Field name="gender">
          {(field) => (
            <div>
              <Label>Gender</Label>
              <Select value={field.state.value} onValueChange={field.handleChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </form.Field>

        <form.Field name="learningPath">
          {(field) => (
            <div>
              <Label>Learning Path</Label>
              <div className="flex flex-col gap-2">
                {["Frontend", "Backend", "DevOps", "UI/UX"].map((track) => (
                  <label key={track} className="flex items-center gap-2">
                    <Checkbox
                      checked={field.state.value.includes(track)}
                      onCheckedChange={(checked) => {
                        const updated = checked ? [...field.state.value, track] : field.state.value.filter((v) => v !== track);
                        field.handleChange(updated);
                      }}
                    />
                    {track}
                  </label>
                ))}
              </div>
            </div>
          )}
        </form.Field>

        <form.Field name="addNotes">
          {(field) => (
            <label className="flex items-center gap-2">
              <Checkbox
                checked={field.state.value}
                onCheckedChange={(checked) => {
                  const isChecked = checked === true;
                  field.handleChange(isChecked);
                  setShowNotes(isChecked);
                }}
              />
              Add Notes?
            </label>
          )}
        </form.Field>

        {showNotes && (
          <form.Field name="notes">
            {(field) => (
              <div>
                <Label>Notes</Label>
                <Textarea value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} />
              </div>
            )}
          </form.Field>
        )}

        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>

      {participants.length > 0 && (
        <div className="mt-6 text-left">
          <h3 className="font-semibold text-lg mb-2">Submitted Participants</h3>
          <div className="space-y-4">
            {participants.map((p, idx) => (
              <div key={idx} className="p-4 border rounded shadow-sm bg-white">
                <p>
                  <strong>Full Name:</strong> {p.fullName}
                </p>
                <p>
                  <strong>Email:</strong> {p.email}
                </p>
                <p>
                  <strong>Age:</strong> {p.age}
                </p>
                <p>
                  <strong>Birthdate:</strong> {p.birthdate}
                </p>
                <p>
                  <strong>Gender:</strong> {p.gender}
                </p>
                <p>
                  <strong>Learning Path:</strong> {p.learningPath.join(", ") || "-"}
                </p>
                {p.addNotes && p.notes && (
                  <p>
                    <strong>Notes:</strong> {p.notes}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
