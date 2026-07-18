import React, { useState } from "react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { api, formatApiError } from "@/lib/api";
import { UploadCloud, Loader2 } from "lucide-react";

const EMPTY = {
  name: "", company: "", designation: "", email: "", phone: "", country: "India",
  product_requirement: "", estimated_quantity: "", message: "", consent: true, website: "",
};

export function QuoteDialog({ open, onOpenChange }) {
  const [form, setForm] = useState(EMPTY);
  const [file, setFile] = useState(null);
  const [busy, setBusy] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e?.target ? e.target.value : e });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.consent) {
      toast.error("Please accept the consent to proceed.");
      return;
    }
    setBusy(true);
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v ?? ""));
      if (file) fd.append("attachment", file);
      const { data } = await api.post("/submissions/quote", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success(data.message || "Quote request received!");
      setForm(EMPTY);
      setFile(null);
      onOpenChange(false);
    } catch (err) {
      toast.error(formatApiError(err));
    } finally {
      setBusy(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent data-testid="quote-dialog" className="sm:max-w-xl rounded-xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-[#0F2B46]">Request a Quote</DialogTitle>
          <DialogDescription className="text-[#6B7280]">
            Send us your request and our sales team will respond within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" name="website" value={form.website} onChange={update("website")}
            style={{ position: "absolute", left: "-9999px" }} tabIndex={-1} autoComplete="off" />

          <div className="sm:col-span-2">
            <Label>Full Name *</Label>
            <Input data-testid="quote-name" required value={form.name} onChange={update("name")} />
          </div>
          <div>
            <Label>Email *</Label>
            <Input data-testid="quote-email" type="email" required value={form.email} onChange={update("email")} />
          </div>
          <div>
            <Label>Phone *</Label>
            <Input data-testid="quote-phone" required value={form.phone} onChange={update("phone")} />
          </div>
          <div className="sm:col-span-2">
            <Label>Message</Label>
            <Textarea rows={4} value={form.message} onChange={update("message")} placeholder="Enter your requirements or message..." />
          </div>
          <div className="sm:col-span-2 flex items-start gap-2">
            <Checkbox id="consent-q" checked={form.consent} onCheckedChange={(v) => setForm({ ...form, consent: !!v })} />
            <label htmlFor="consent-q" className="text-xs text-[#6B7280] leading-relaxed">
              I agree to be contacted by Shiv Auto Components regarding this inquiry.
            </label>
          </div>
          <div className="sm:col-span-2 flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="rounded-sm">Cancel</Button>
            <Button data-testid="quote-submit" type="submit" disabled={busy}
              className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-sm">
              {busy ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Submitting</> : "Send Request"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
