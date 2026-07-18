import React, { useEffect, useState } from "react";
import { Link, NavLink, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { LogOut, Cog, Wrench, Image as ImgIcon, Briefcase, Gauge, Inbox, Loader2, Plus, Trash2, Edit, Download, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useAuth } from "@/lib/auth";
import { api, formatApiError, API_BASE } from "@/lib/api";

function SidebarLink({ to, icon: Icon, label, end = false }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2.5 rounded-sm text-sm transition-colors ${
          isActive ? "bg-white/10 text-white" : "text-white/70 hover:text-white hover:bg-white/5"
        }`
      }
      data-testid={`admin-nav-${label.toLowerCase()}`}
    >
      <Icon className="w-4 h-4" />
      {label}
    </NavLink>
  );
}

function AdminShell({ children }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex bg-[#F8F9FA]">
      <aside className="w-64 bg-[#0F2B46] text-white flex flex-col">
        <Link to="/" className="px-6 py-5 border-b border-white/10 flex items-center gap-1 group">
          <img src="/logo.png" alt="SAC Logo" className="h-10 w-auto object-contain bg-white rounded-md p-1 mr-1" />
          <div className="flex flex-col">
            <span className="font-display font-black text-lg leading-none tracking-tight text-white select-none">SHIV</span>
            <span className="font-eyebrow text-[4.5px] tracking-[0.2em] font-semibold text-white/70 select-none">AUTO COMPONENTS</span>
          </div>
        </Link>
        <nav className="p-4 space-y-1 flex-1">
          <SidebarLink to="/admin" end icon={Inbox} label="Submissions" />
          <SidebarLink to="/admin/machinery" icon={Wrench} label="Machinery" />
          <SidebarLink to="/admin/gallery" icon={ImgIcon} label="Gallery" />
          <SidebarLink to="/admin/stats" icon={Gauge} label="Stats" />
        </nav>
        <div className="p-4 border-t border-white/10">
          <div className="text-xs text-white/60 mb-2">Signed in as</div>
          <div className="text-sm truncate">{user?.email}</div>
          <button
            data-testid="admin-logout"
            onClick={() => { logout(); navigate("/admin/login"); }}
            className="mt-3 flex items-center gap-2 text-xs text-white/70 hover:text-white"
          >
            <LogOut className="w-3.5 h-3.5" /> Sign out
          </button>
        </div>
      </aside>
      <main className="flex-1 p-8 overflow-x-auto">{children}</main>
    </div>
  );
}

// ---------- Submissions ----------
function Submissions() {
  const [subs, setSubs] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    try {
      const { data } = await api.get(`/admin/submissions?kind=${filter}`);
      setSubs(data);
    } catch (e) { toast.error(formatApiError(e)); }
    finally { setLoading(false); }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { load(); }, [filter]);

  const setStatus = async (id, status) => {
    try {
      await api.patch(`/admin/submissions/${id}/status`, { status });
      toast.success("Status updated");
      load();
    } catch (e) { toast.error(formatApiError(e)); }
  };

  const downloadFile = async (id) => {
    try {
      const res = await api.get(`/admin/uploads/${id}`, { responseType: "blob" });
      const blob = new Blob([res.data]);
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = "attachment"; a.click();
      URL.revokeObjectURL(url);
    } catch (e) { toast.error(formatApiError(e)); }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display font-bold text-2xl text-[#0F2B46]">Submissions</h1>
          <p className="text-sm text-[#6B7280]">All inquiries, quotes, and contact requests.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-sm overflow-x-auto">
        {loading ? (
          <div className="p-8 flex items-center gap-2 text-[#6B7280]"><Loader2 className="w-4 h-4 animate-spin" /> Loading...</div>
        ) : subs.length === 0 ? (
          <div className="p-8 text-[#6B7280] text-center">No submissions yet.</div>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-[#F8F9FA] text-left text-[#6B7280]">
              <tr>
                <th className="px-4 py-3 font-eyebrow text-xs">Name</th>
                <th className="px-4 py-3 font-eyebrow text-xs">Email / Phone</th>
                <th className="px-4 py-3 font-eyebrow text-xs">Details</th>
                <th className="px-4 py-3 font-eyebrow text-xs">Status</th>
                <th className="px-4 py-3 font-eyebrow text-xs">Received</th>
                <th className="px-4 py-3 font-eyebrow text-xs">Actions</th>
              </tr>
            </thead>
            <tbody>
              {subs.map((s) => (
                <tr key={s.id} data-testid={`sub-row-${s.id}`} className="border-t border-gray-200 align-top">
                  <td className="px-4 py-3 text-[#0F2B46] font-medium">
                    {s.name || s.full_name}
                  </td>
                  <td className="px-4 py-3 text-[#0F2B46]">
                    <div>{s.email}</div>
                    <div className="text-xs text-[#6B7280]">{s.phone}</div>
                  </td>
                  <td className="px-4 py-3 text-[#0F2B46] max-w-md">
                    <div className="text-xs"><b>Subject/Req:</b> {s.product_requirement}</div>
                    {s.estimated_quantity && <div className="text-xs"><b>Qty:</b> {s.estimated_quantity}</div>}
                    {s.message && <div className="text-xs text-[#6B7280] mt-1">{s.message}</div>}
                    {s.preferred_date && <div className="text-xs mt-1"><b>Visit Date:</b> {s.preferred_date} (Visitors: {s.visitor_count})</div>}
                  </td>
                  <td className="px-4 py-3">
                    <select value={s.status} onChange={(e) => setStatus(s.id, e.target.value)}
                      data-testid={`sub-status-${s.id}`}
                      className="text-xs border border-gray-300 rounded-sm px-2 py-1">
                      <option value="new">New</option>
                      <option value="in_progress">In Progress</option>
                      <option value="closed">Closed</option>
                      <option value="spam">Spam</option>
                    </select>
                  </td>
                  <td className="px-4 py-3 text-xs text-[#6B7280]">{new Date(s.created_at).toLocaleString()}</td>
                  <td className="px-4 py-3">
                    {(s.attachment_path || s.resume_path) && (
                      <button data-testid={`sub-download-${s.id}`} onClick={() => downloadFile(s.id)} className="inline-flex items-center gap-1 text-xs text-[#2563EB] hover:underline">
                        <Download className="w-3.5 h-3.5" /> File
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

// ---------- Generic CRUD manager ----------
function CRUDManager({ title, endpoint, columns, blankForm, fieldConfig, testId }) {
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(null); // {id or null, ...form}
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    try {
      const publicEndpoint = endpoint.replace("/admin/", "/");
      const { data } = await api.get(publicEndpoint);
      setItems(data);
    } catch (e) { toast.error(formatApiError(e)); }
    finally { setLoading(false); }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { load(); }, []);

  const save = async () => {
    try {
      const payload = { ...editing };
      delete payload.id;
      if (editing?.id) {
        await api.put(`${endpoint}/${editing.id}`, payload);
      } else {
        await api.post(endpoint, payload);
      }
      toast.success("Saved");
      setEditing(null);
      load();
    } catch (e) { toast.error(formatApiError(e)); }
  };

  const remove = async (id) => {
    if (!window.confirm("Delete this item?")) return;
    try {
      await api.delete(`${endpoint}/${id}`);
      toast.success("Deleted");
      load();
    } catch (e) { toast.error(formatApiError(e)); }
  };

  return (
    <div data-testid={`admin-${testId}`}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display font-bold text-2xl text-[#0F2B46]">{title}</h1>
          <p className="text-sm text-[#6B7280]">Manage {title.toLowerCase()} shown on the public site.</p>
        </div>
        <Button data-testid={`add-${testId}-btn`} onClick={() => setEditing({ ...blankForm })} className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-sm">
          <Plus className="w-4 h-4 mr-2" /> New
        </Button>
      </div>

      {loading ? (
        <div className="text-[#6B7280] flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin" /> Loading...</div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-sm overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-[#F8F9FA] text-left text-[#6B7280]">
              <tr>
                {columns.map((c) => <th key={c.key} className="px-4 py-3 font-eyebrow text-xs">{c.label}</th>)}
                <th className="px-4 py-3 font-eyebrow text-xs text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((it) => (
                <tr key={it.id} className="border-t border-gray-200">
                  {columns.map((c) => (
                    <td key={c.key} className="px-4 py-3 text-[#0F2B46] max-w-xs truncate">{c.render ? c.render(it) : String(it[c.key] ?? "")}</td>
                  ))}
                  <td className="px-4 py-3 text-right">
                    <button data-testid={`edit-${testId}-${it.id}`} onClick={() => setEditing({ ...it })} className="text-[#2563EB] mr-3"><Edit className="w-4 h-4 inline" /></button>
                    <button data-testid={`delete-${testId}-${it.id}`} onClick={() => remove(it.id)} className="text-red-600"><Trash2 className="w-4 h-4 inline" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {editing && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={() => setEditing(null)}>
          <div className="bg-white rounded-sm w-full max-w-2xl p-6 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display font-bold text-xl text-[#0F2B46]">{editing.id ? "Edit" : "Create"}</h2>
              <button onClick={() => setEditing(null)}><X className="w-5 h-5 text-[#6B7280]" /></button>
            </div>
            <div className="space-y-4">
              {fieldConfig.map((f) => (
                <div key={f.key}>
                  <Label>{f.label}</Label>
                  {f.type === "textarea" ? (
                    <Textarea rows={f.rows || 3} value={editing[f.key] ?? ""} onChange={(e) => setEditing({ ...editing, [f.key]: e.target.value })} />
                  ) : f.type === "checkbox" ? (
                    <div className="pt-2">
                      <input type="checkbox" checked={!!editing[f.key]} onChange={(e) => setEditing({ ...editing, [f.key]: e.target.checked })} />
                    </div>
                  ) : (
                    <Input type={f.type || "text"} value={editing[f.key] ?? ""} onChange={(e) => setEditing({ ...editing, [f.key]: f.type === "number" ? Number(e.target.value) : e.target.value })} />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <Button variant="outline" onClick={() => setEditing(null)} className="rounded-sm">Cancel</Button>
              <Button data-testid={`save-${testId}`} onClick={save} className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-sm">
                <Save className="w-4 h-4 mr-2" /> Save
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ---------- Stats ----------
function StatsPage() {
  const [form, setForm] = useState({ years_experience: 25, monthly_capacity_tons: 500, machines: 60, workforce: 220, certifications: 6 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/stats").then((r) => setForm(r.data)).finally(() => setLoading(false));
  }, []);

  const save = async () => {
    try {
      await api.put("/admin/stats", {
        years_experience: Number(form.years_experience),
        monthly_capacity_tons: Number(form.monthly_capacity_tons),
        machines: Number(form.machines),
        workforce: Number(form.workforce),
        certifications: Number(form.certifications),
      });
      toast.success("Stats updated");
    } catch (e) { toast.error(formatApiError(e)); }
  };

  const fields = [
    ["years_experience", "Years Experience"],
    ["monthly_capacity_tons", "Monthly Capacity (Tons)"],
    ["machines", "Machines"],
    ["workforce", "Workforce"],
    ["certifications", "Certifications"],
  ];

  return (
    <div data-testid="admin-stats">
      <div className="mb-6">
        <h1 className="font-display font-bold text-2xl text-[#0F2B46]">Company Stats</h1>
        <p className="text-sm text-[#6B7280]">Numbers shown in the hero and homepage counters.</p>
      </div>
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin text-[#6B7280]" />
      ) : (
        <div className="bg-white border border-gray-200 rounded-sm p-6 max-w-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {fields.map(([k, l]) => (
              <div key={k}>
                <Label>{l}</Label>
                <Input type="number" value={form[k] ?? 0} onChange={(e) => setForm({ ...form, [k]: e.target.value })} />
              </div>
            ))}
          </div>
          <Button data-testid="save-stats-btn" onClick={save} className="mt-6 bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-sm">
            <Save className="w-4 h-4 mr-2" /> Save
          </Button>
        </div>
      )}
    </div>
  );
}

// ---------- Wrapper ----------
export default function AdminDashboard() {
  const { user, loading } = useAuth();
  if (loading) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="w-6 h-6 animate-spin text-[#2563EB]" /></div>;
  if (!user) return <Navigate to="/admin/login" replace />;

  return (
    <AdminShell>
      <Routes>
        <Route index element={<Submissions />} />
        <Route path="machinery" element={
          <CRUDManager
            title="Machinery"
            endpoint="/admin/machinery"
            testId="machinery"
            columns={[
              { key: "name", label: "Name" },
              { key: "manufacturer", label: "Brand" },
              { key: "capacity", label: "Capacity" },
              { key: "quantity", label: "Qty" },
              { key: "application", label: "Application" },
            ]}
            blankForm={{ name: "", manufacturer: "", capacity: "", quantity: 1, application: "", image_url: "", order: 0 }}
            fieldConfig={[
              { key: "name", label: "Name" },
              { key: "manufacturer", label: "Manufacturer" },
              { key: "capacity", label: "Capacity" },
              { key: "quantity", label: "Quantity", type: "number" },
              { key: "application", label: "Application" },
              { key: "image_url", label: "Image URL" },
              { key: "order", label: "Order", type: "number" },
            ]}
          />
        } />
        <Route path="gallery" element={
          <CRUDManager
            title="Gallery"
            endpoint="/admin/gallery"
            testId="gallery"
            columns={[
              { key: "title", label: "Title" },
              { key: "category", label: "Category" },
              { key: "image_url", label: "Image", render: (r) => <img src={r.image_url} alt="" className="w-16 h-10 object-cover" /> },
              { key: "order", label: "Order" },
            ]}
            blankForm={{ title: "", category: "Factory", image_url: "", order: 0 }}
            fieldConfig={[
              { key: "title", label: "Title" },
              { key: "category", label: "Category (Factory, Machinery, Production, Quality, Warehouse, Team, Events, Certificates)" },
              { key: "image_url", label: "Image URL" },
              { key: "order", label: "Order", type: "number" },
            ]}
          />
        } />

        <Route path="stats" element={<StatsPage />} />
      </Routes>
    </AdminShell>
  );
}
