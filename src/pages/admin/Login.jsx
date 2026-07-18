import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/lib/auth";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Cog, Loader2 } from "lucide-react";
import { formatApiError } from "@/lib/api";

export default function AdminLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      await login(email, password);
      navigate("/admin");
    } catch (err) {
      setError(formatApiError(err));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div data-testid="admin-login" className="min-h-screen flex bg-[#0F2B46]">
      <div className="hidden lg:flex flex-1 relative">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=srgb&fm=jpg&q=85')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2B46] to-[#0F2B46]/60" />
        <div className="relative m-auto text-white p-16">
          <div className="font-eyebrow text-[#60A5FA] mb-4">Shiv Auto Components</div>
          <h1 className="font-display text-4xl font-bold max-w-md leading-tight">
            Admin Console. Manage machinery, gallery &amp; submissions.
          </h1>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-6 bg-white">
        <form onSubmit={submit} className="w-full max-w-md">
          <div className="flex items-center gap-1 group mb-8">
            <img src="/logo.png" alt="SAC Logo" className="h-14 w-auto object-contain -mr-3" />
            <div className="flex flex-col">
              <span className="font-display font-black text-2xl leading-none tracking-tight text-[#0F2B46] select-none">SHIV</span>
              <span className="font-eyebrow text-[5px] tracking-[0.2em] font-semibold text-[#6B7280] select-none">AUTO COMPONENTS</span>
            </div>
          </div>
          <h2 className="font-display text-3xl font-bold text-[#0F2B46]">Sign in</h2>
          <p className="mt-2 text-sm text-[#6B7280]">Only authorized admins can access this console.</p>
          <div className="mt-8 space-y-4">
            <div>
              <Label>Email</Label>
              <Input data-testid="admin-email" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="admin@shivauto.com" />
            </div>
            <div>
              <Label>Password</Label>
              <Input data-testid="admin-password" required type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {error && <div data-testid="admin-error" className="text-sm text-red-600">{error}</div>}
            <Button data-testid="admin-login-btn" disabled={busy} className="w-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-sm">
              {busy ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Signing in</> : "Sign in"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
