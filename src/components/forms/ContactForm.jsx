import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { api, formatApiError } from "@/lib/api";
import { Loader2 } from "lucide-react";

// Simple inquiry form for the Contact page — reuses the "quote" endpoint
const EMPTY = {
  name: "", company: "", designation: "", email: "", phone: "", country: "India",
  product_requirement: "General Inquiry", estimated_quantity: "", message: "", consent: true, website: "",
};

export function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [busy, setBusy] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e?.target ? e.target.value : e });

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v ?? ""));
      const { data } = await api.post("/submissions/quote", fd);
      toast.success(data.message || "Message received. We'll get back to you.");
      setForm(EMPTY);
    } catch (err) {
      toast.error(formatApiError(err));
    } finally {
      setBusy(false);
    }
  };

  return (
    <form data-testid="contact-form" onSubmit={submit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <input type="text" name="website" value={form.website} onChange={update("website")}
        style={{ position: "absolute", left: "-9999px" }} tabIndex={-1} autoComplete="off" />
      <div className="sm:col-span-2">
        <Label>Full Name *</Label>
        <Input data-testid="contact-name" required value={form.name} onChange={update("name")} />
      </div>
      <div>
        <Label>Email *</Label>
        <Input data-testid="contact-email" type="email" required value={form.email} onChange={update("email")} />
      </div>
      <div>
        <Label>Phone *</Label>
        <Input required value={form.phone} onChange={update("phone")} />
      </div>
      <div className="sm:col-span-2">
        <Label>Subject / Requirement *</Label>
        <Input required value={form.product_requirement} onChange={update("product_requirement")} />
      </div>
      <div className="sm:col-span-2">
        <Label>Message</Label>
        <Textarea rows={4} value={form.message} onChange={update("message")} />
      </div>
      <div className="sm:col-span-2">
        <Button data-testid="contact-submit" type="submit" disabled={busy}
          className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-sm w-full sm:w-auto">
          {busy ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending</> : "Send Message"}
        </Button>
      </div>
    </form>
  );
}
