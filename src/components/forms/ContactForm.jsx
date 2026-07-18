import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// Simple inquiry form for the Contact page — redirects to WhatsApp
const EMPTY = {
  name: "", company: "", designation: "", email: "", phone: "", country: "India",
  product_requirement: "General Inquiry", estimated_quantity: "", message: "", consent: true, website: "",
};

export function ContactForm() {
  const [form, setForm] = useState(EMPTY);

  const update = (k) => (e) => setForm({ ...form, [k]: e?.target ? e.target.value : e });

  const submit = (e) => {
    e.preventDefault();
    const phoneNumber = "919915417572";
    const text = `Hello Shiv Auto Components, I have an inquiry:
- *Name*: ${form.name}
- *Email*: ${form.email}
- *Phone*: ${form.phone}
- *Subject/Requirement*: ${form.product_requirement}
- *Message*: ${form.message || 'N/A'}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, "_blank");
    toast.success("Redirecting to WhatsApp to send message...");
    setForm(EMPTY);
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
        <Button data-testid="contact-submit" type="submit"
          className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-sm w-full sm:w-auto">
          Send Message
        </Button>
      </div>
    </form>
  );
}
