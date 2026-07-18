import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { api, formatApiError } from "@/lib/api";
import { UploadCloud, Loader2 } from "lucide-react";

const EMPTY = {
  full_name: "", email: "", phone: "", position: "", experience: "", cover_letter: "", website: "",
};

export function CareerForm({ defaultPosition = "" }) {
  const [form, setForm] = useState({ ...EMPTY, position: defaultPosition });
  const [file, setFile] = useState(null);
  const [busy, setBusy] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e?.target ? e.target.value : e });

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v ?? ""));
      if (file) fd.append("resume", file);
      const { data } = await api.post("/submissions/career", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success(data.message || "Application received!");
      setForm({ ...EMPTY, position: defaultPosition });
      setFile(null);
    } catch (err) {
      toast.error(formatApiError(err));
    } finally {
      setBusy(false);
    }
  };

  return (
    <form data-testid="career-form" onSubmit={submit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <input type="text" name="website" value={form.website} onChange={update("website")}
        style={{ position: "absolute", left: "-9999px" }} tabIndex={-1} autoComplete="off" />
      <div>
        <Label>Full Name *</Label>
        <Input data-testid="career-name" required value={form.full_name} onChange={update("full_name")} />
      </div>
      <div>
        <Label>Email *</Label>
        <Input data-testid="career-email" type="email" required value={form.email} onChange={update("email")} />
      </div>
      <div>
        <Label>Phone *</Label>
        <Input required value={form.phone} onChange={update("phone")} />
      </div>
      <div>
        <Label>Position *</Label>
        <Input data-testid="career-position" required value={form.position} onChange={update("position")} placeholder="e.g. CNC Programmer" />
      </div>
      <div className="sm:col-span-2">
        <Label>Total Experience</Label>
        <Input value={form.experience} onChange={update("experience")} placeholder="e.g. 5 years" />
      </div>
      <div className="sm:col-span-2">
        <Label>Resume (PDF/DOCX · ≤5MB) *</Label>
        <label className="mt-1 flex items-center gap-2 border border-dashed border-gray-300 rounded-md px-3 py-3 text-sm cursor-pointer hover:border-[#2563EB]">
          <UploadCloud className="w-4 h-4 text-[#2563EB]" />
          <span className="text-[#6B7280] truncate">{file ? file.name : "Attach your resume"}</span>
          <input data-testid="career-resume" type="file" className="hidden" accept=".pdf,.docx,.doc" required
            onChange={(e) => setFile(e.target.files?.[0] || null)} />
        </label>
      </div>
      <div className="sm:col-span-2">
        <Label>Cover Letter</Label>
        <Textarea rows={4} value={form.cover_letter} onChange={update("cover_letter")} />
      </div>
      <div className="sm:col-span-2">
        <Button data-testid="career-submit" type="submit" disabled={busy}
          className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-sm w-full sm:w-auto">
          {busy ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Submitting</> : "Submit Application"}
        </Button>
      </div>
    </form>
  );
}
