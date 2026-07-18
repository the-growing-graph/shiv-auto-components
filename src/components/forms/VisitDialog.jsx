import React, { useState } from "react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { api, formatApiError } from "@/lib/api";
import { Loader2 } from "lucide-react";

const EMPTY = {
  name: "", company: "", designation: "", email: "", phone: "",
  preferred_date: "", visitor_count: 1, purpose: "", notes: "", website: "",
};

export function VisitDialog({ open, onOpenChange }) {
  const [form, setForm] = useState(EMPTY);
  const [busy, setBusy] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e?.target ? e.target.value : e });

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v ?? ""));
      const { data } = await api.post("/submissions/visit", fd);
      toast.success(data.message || "Visit request received!");
      setForm(EMPTY);
      onOpenChange(false);
    } catch (err) {
      toast.error(formatApiError(err));
    } finally {
      setBusy(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent data-testid="visit-dialog" className="sm:max-w-2xl rounded-xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="font-eyebrow text-[#2563EB]">Factory Visit</div>
          <DialogTitle className="font-display text-2xl text-[#0F2B46]">Schedule a Factory Visit</DialogTitle>
          <DialogDescription className="text-[#6B7280]">
            Walk our shop floor, meet our engineering team, and see quality in action.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" name="website" value={form.website} onChange={update("website")}
            style={{ position: "absolute", left: "-9999px" }} tabIndex={-1} autoComplete="off" />
          <div className="sm:col-span-2">
            <Label>Full Name *</Label>
            <Input data-testid="visit-name" required value={form.name} onChange={update("name")} />
          </div>
          <div>
            <Label>Designation</Label>
            <Input value={form.designation} onChange={update("designation")} />
          </div>
          <div>
            <Label>Email *</Label>
            <Input data-testid="visit-email" type="email" required value={form.email} onChange={update("email")} />
          </div>
          <div>
            <Label>Phone *</Label>
            <Input required value={form.phone} onChange={update("phone")} />
          </div>
          <div>
            <Label>Preferred Date *</Label>
            <Input data-testid="visit-date" type="date" required value={form.preferred_date} onChange={update("preferred_date")} />
          </div>
          <div>
            <Label>No. of Visitors</Label>
            <Input type="number" min={1} value={form.visitor_count} onChange={update("visitor_count")} />
          </div>
          <div>
            <Label>Purpose</Label>
            <Input placeholder="Audit, sample review, new project..." value={form.purpose} onChange={update("purpose")} />
          </div>
          <div className="sm:col-span-2">
            <Label>Additional Notes</Label>
            <Textarea rows={3} value={form.notes} onChange={update("notes")} />
          </div>
          <div className="sm:col-span-2 flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="rounded-sm">Cancel</Button>
            <Button data-testid="visit-submit" type="submit" disabled={busy}
              className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-sm">
              {busy ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Submitting</> : "Request Visit"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
