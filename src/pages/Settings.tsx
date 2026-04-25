import { Rocket, Save, Terminal, MemoryStick, AlertTriangle, Plus, X } from 'lucide-react';
import { clsx } from 'clsx';

export default function Settings() {
  return (
    <div className="max-w-7xl mx-auto space-y-section-gap pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-surface-variant pb-6">
        <div>
          <h2 className="font-display text-[32px] font-bold text-primary mb-2 leading-none uppercase tracking-tight">System Settings</h2>
          <p className="font-sans text-[15px] text-on-surface-variant max-w-2xl leading-relaxed">
            Configure deterministic rules, AI constraints, and global system preferences for the decision engine.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-6 py-2 border border-outline-variant text-primary label-caps uppercase hover:bg-surface-container transition-colors">
            Reset Defaults
          </button>
          <button className="px-6 py-2 bg-primary text-black label-caps uppercase hover:bg-surface-tint transition-colors flex items-center gap-2 font-bold transform active:scale-95 duration-100">
            <Save size={16} /> Save Configuration
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-element-gap">
        <section className="md:col-span-8 border border-outline-variant bg-surface-container-lowest">
          <div className="p-6 border-b border-surface-variant bg-surface-container-low flex items-center justify-between">
            <h3 className="font-display text-[24px] font-bold text-primary uppercase tracking-tight">Rule Configuration</h3>
            <span className="px-2 py-1 border border-outline-variant text-on-surface-variant label-caps text-[10px]">DETERMINISTIC</span>
          </div>
          <div className="p-6 space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div>
                  <label className="data-mono text-primary block mb-1">Inactivity Threshold (Days)</label>
                  <p className="text-sm text-on-surface-variant leading-relaxed">Flag licenses as underutilized after this period of zero logins.</p>
                </div>
                <div className="font-mono text-primary bg-surface-container border border-surface-variant px-3 py-1 font-bold">
                  60 DAYS
                </div>
              </div>
              <input type="range" className="w-full accent-primary h-1 bg-surface-container appearance-none cursor-pointer" min="15" max="180" defaultValue="60" />
              <div className="flex justify-between text-[10px] text-outline-variant font-mono uppercase tracking-widest">
                <span>15d</span>
                <span>90d</span>
                <span>180d</span>
              </div>
            </div>
            
            <div className="border-t border-surface-variant pt-8">
              <div className="flex justify-between items-end">
                <div>
                  <label className="data-mono text-primary block mb-1">Low Usage Threshold (Actions/Month)</label>
                  <p className="text-sm text-on-surface-variant leading-relaxed">Minimum key actions required to maintain 'Active' status.</p>
                </div>
                <div className="w-24">
                  <input
                    type="number"
                    defaultValue="15"
                    className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-primary font-mono text-right p-1 transition-colors font-bold text-[18px]"
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-surface-variant pt-8">
              <div className="flex justify-between items-end">
                <div>
                  <label className="data-mono text-primary block mb-1">Renewal Notification Window (Days)</label>
                  <p className="text-sm text-on-surface-variant leading-relaxed">Lead time for triggering review workflows before contract end.</p>
                </div>
                <div className="font-mono text-primary bg-surface-container border border-surface-variant px-3 py-1 font-bold">
                  45 DAYS
                </div>
              </div>
              <input type="range" className="w-full accent-primary h-1 bg-surface-container appearance-none cursor-pointer" min="15" max="120" defaultValue="45" />
            </div>
          </div>
        </section>

        <section className="md:col-span-4 border border-outline-variant bg-surface-container-lowest flex flex-col">
          <div className="p-6 border-b border-surface-variant bg-surface-container-low flex items-center justify-between">
            <h3 className="font-display text-[24px] font-bold text-primary uppercase tracking-tight">AI Constraints</h3>
            <MemoryStick size={20} className="text-outline-variant" />
          </div>
          <div className="p-6 space-y-6 flex-1">
            <ToggleItem
              title="Classification Assistance"
              description="Allow AI to suggest categories for unmapped software based on usage patterns."
              checked
            />
            <div className="border-t border-surface-variant" />
            <ToggleItem
              title="Auto-Archive Recommendations"
              description="AI proposes removal of dead subscriptions. Requires manual approval."
              checked
            />
            <div className="border-t border-surface-variant" />
            <ToggleItem
              title="Autonomous Execution"
              description="Allow AI to execute license revokes without human-in-the-loop."
              disabled
            />
            
            <div className="mt-auto pt-6">
              <div className="bg-[#111111] border border-error/20 p-4 space-y-2">
                <div className="flex items-center gap-2 text-error">
                  <AlertTriangle size={14} />
                  <span className="label-caps !text-[10px]">SAFETY PROTOCOL</span>
                </div>
                <p className="text-[11px] text-on-surface-variant leading-normal lowercase font-mono">
                  Autonomous execution is currently disabled system-wide pending security audit.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="md:col-span-12 border border-outline-variant bg-surface-container-lowest mt-4">
          <div className="p-6 border-b border-surface-variant bg-surface-container-low">
            <h3 className="font-display text-[24px] font-bold text-primary uppercase tracking-tight">System Preferences</h3>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <label className="data-mono text-primary block mb-2 lowercase tracking-wider font-bold">sso_data_sync_frequency</label>
              <select className="w-full bg-transparent border-0 border-b border-outline-variant text-primary font-sans focus:border-primary focus:ring-0 p-0 pb-2 cursor-pointer uppercase text-[12px] font-bold tracking-widest">
                <option value="1">Real-time (Webhooks)</option>
                <option value="12" selected>Every 12 Hours</option>
                <option value="24">Every 24 Hours</option>
                <option value="manual">Manual Only</option>
              </select>
            </div>
            <div className="space-y-4">
              <label className="data-mono text-primary block mb-2 lowercase tracking-wider font-bold">global_department_exclusions</label>
              <p className="text-sm text-on-surface-variant leading-relaxed">Rules engine will ignore assets tagged with these departments.</p>
              <div className="flex flex-wrap gap-2">
                {['Executive Team', 'Legal'].map(dept => (
                  <span key={dept} className="inline-flex items-center gap-1 border border-outline-variant bg-surface px-2 py-1 text-[10px] text-primary font-mono uppercase font-bold group hover:border-white transition-colors cursor-default">
                    {dept}
                    <button className="hover:text-error ml-1 transition-colors"><X size={10} /></button>
                  </span>
                ))}
              </div>
              <div className="flex items-center border-b border-outline-variant focus-within:border-primary transition-colors pb-1">
                <Plus size={14} className="text-outline mr-2" />
                <input
                  type="text"
                  placeholder="Add department..."
                  className="bg-transparent border-none outline-none font-mono text-[11px] w-full text-primary placeholder:text-outline-variant focus:ring-0 p-0 h-auto lowercase"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function ToggleItem({ title, description, checked, disabled }: { title: string, description: string, checked?: boolean, disabled?: boolean }) {
  return (
    <div className={clsx('flex items-start justify-between gap-4', disabled && 'opacity-50')}>
      <div className="flex-1">
        <h4 className="data-mono text-primary mb-1 uppercase tracking-tighter text-[13px] font-bold">{title}</h4>
        <p className="text-sm text-on-surface-variant leading-tight">{description}</p>
      </div>
      <label className={clsx('relative inline-flex items-center mt-1 flex-shrink-0', disabled ? 'cursor-not-allowed' : 'cursor-pointer')}>
        <input type="checkbox" className="sr-only peer" checked={checked} disabled={disabled} readOnly />
        <div className="w-10 h-5 bg-surface-container border border-outline-variant peer-checked:bg-primary peer-checked:border-primary transition-all duration-200" />
        <div className="absolute left-1 top-1 bg-outline-variant w-3 h-3 transition-all duration-200 peer-checked:translate-x-5 peer-checked:bg-black" />
      </label>
    </div>
  );
}
