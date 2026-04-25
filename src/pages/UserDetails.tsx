import { UserMinus, Key, AlertTriangle, CheckCircle, Search, History, Filter } from 'lucide-react';
import { clsx } from 'clsx';

export default function UserDetails() {
  return (
    <div className="max-w-[1600px] w-full mx-auto space-y-8 md:space-y-section-gap">
      <section className="border border-outline-variant p-4 md:p-8 bg-surface-container-lowest relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-surface-container-highest/20 to-transparent" />
        <div className="flex flex-col md:flex-row items-start justify-between relative z-10 gap-6 md:gap-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 w-full md:w-auto">
            <div className="w-16 h-16 sm:w-24 sm:h-24 rounded border border-outline-variant p-1 bg-surface-container-high shrink-0">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD81RsZLmhDWYOj4CF7McTqFJHYsJlEh7PpCKQdSCab3PraVAkHVuWeAF-9eVk3b1cnegMwYy4fNHPT8FArwWXmgFQ5GL_5oa-7sYTqMbWcesrNTA0hmdRP6OUswu9RyU9hXRF66hVhLczNYAnt-cTlwZxuZPDVXpHRBRBvSd2AG34VQ9To2CYBVKMyuOSgOBrZbT7pq8WWJcX_dTVwIX3qn997fnVX2vMhBu5T0zvPXE8liJxIMMYo8c0nl6dEZwpB4iESktUfVqT6"
                alt="Elena Rostova"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                <h1 className="font-display text-[24px] sm:text-[32px] font-bold text-primary leading-none">Elena Rostova</h1>
                <span className="px-2 py-1 bg-primary/10 border border-primary/20 text-primary label-caps text-[10px] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Active
                </span>
              </div>
              <div className="font-mono text-on-surface-variant mb-4 font-bold tracking-tight text-[12px] md:text-base break-all">elena.rostova@acmecorp.dev</div>
              <div className="flex flex-wrap gap-4 sm:gap-6">
                <div>
                  <div className="label-caps text-on-surface-variant mb-1">Department</div>
                  <div className="font-sans text-[13px] sm:text-[15px] text-primary break-words max-w-[120px] sm:max-w-none">Engineering Ops</div>
                </div>
                <div>
                  <div className="label-caps text-on-surface-variant mb-1">Total Spend</div>
                  <div className="font-sans text-[13px] sm:text-[15px] text-primary">$4,250 <span className="text-on-surface-variant text-xs sm:text-sm">/mo</span></div>
                </div>
                <div>
                  <div className="label-caps text-on-surface-variant mb-1">Tools Assigned</div>
                  <div className="font-sans text-[13px] sm:text-[15px] text-primary">12</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col gap-2 w-full md:w-auto overflow-x-auto sm:overflow-visible pb-2 sm:pb-0 hide-scrollbar">
            <button className="bg-primary text-black label-caps uppercase py-2 px-4 hover:bg-primary-fixed transition-colors w-full sm:w-[200px] text-left flex justify-between items-center font-bold shrink-0">
              <span className="truncate pr-2">Offboard User</span>
              <UserMinus size={16} className="shrink-0" />
            </button>
            <button className="border border-outline-variant text-primary label-caps uppercase py-2 px-4 hover:border-primary transition-colors w-full sm:w-[200px] text-left flex justify-between items-center shrink-0">
              <span className="truncate pr-2">Edit Permissions</span>
              <Key size={16} className="shrink-0" />
            </button>
          </div>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row gap-6 md:gap-gutter">
        <div className="w-full lg:w-2/3 space-y-6 md:space-y-gutter flex-1 min-w-0">
          <section className="border border-error-container bg-error-container/10 p-4 md:p-6 relative max-w-full overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-2 sm:gap-0">
              <div className="flex items-center gap-2 text-error">
                <AlertTriangle size={20} className="stroke-error shrink-0" />
                <h2 className="font-display text-[18px] md:text-[24px] font-bold uppercase tracking-tight truncate">Engine Recommendations</h2>
              </div>
              <span className="px-2 py-1 bg-error/20 border border-error/30 text-error label-caps text-[10px] self-start sm:self-auto">2 Pending</span>
            </div>
            <div className="space-y-4 md:space-y-unit max-w-full overflow-hidden">
              <RecommendationRow
                tool="Figma Professional Seat"
                desc="34 days inactive. Potential saving: $15/mo"
                icon="https://lh3.googleusercontent.com/aida-public/AB6AXuAxBibW-KyMI2DWK8rczugqpCPkjTB87CquPpF1o3UtxcWWzgdeXBhQND6RizO9mKO15WH7SkPMPakQO94yIaun-hoK6EPmpADi7dv0fOKcjmx3hik3fCY4Lp6-6Lb0ym0LCmwNOg5ZmZYsIjInOgWD10TG925tdghr690c6tnXFR3u4tJNgP1gXjs1govDpqnvHFgQED3cdZIk3kB0196l99sV_xRhVHjykL3jHKSGvwDCP1WlrfYhM5hQX9dPcQUQkiL4lDLA45kf"
                actionLabel="Remove Seat"
                actionType="remove"
              />
              <RecommendationRow
                tool="GitHub Copilot"
                desc="Low utilization (2 actions/week). Downgrade suggested."
                icon="https://lh3.googleusercontent.com/aida-public/AB6AXuBOPHnAZi_TbXy5l1QDiLFIdvA-Mp3tvOzOZbvDY2rqCZTlOKLN84R6eFD9ZsanMcX5tGw96WUPDyTYPhfHmZ67MJPtxzntDUIdtzWtRuz37f7L2FJ2iukqqEIlFVi_ibG6zQh3b2RYgmy6QrF-Y0osKLu8HUR3H7xsorrqnmwzgGE2xHBbgKdCt8xrcX50hGqKxrdCJzp2X_h61LUKp9syyyKDYA0FupiDLY29b0tBtuEkggTlKlv-Y6a2IQIc-PrNapFNRsR4nfh0"
                actionLabel="Downgrade"
                actionType="downgrade"
              />
            </div>
          </section>

          <section className="border border-outline-variant bg-surface-container-lowest flex flex-col max-w-[100vw] sm:max-w-none">
            <div className="p-4 md:p-6 border-b border-outline-variant flex flex-col sm:flex-row justify-between sm:items-center gap-2 sm:gap-0">
              <h2 className="font-display text-[18px] md:text-[24px] font-bold text-primary uppercase line-clamp-2">Subscription Inventory & Telemetry</h2>
              <button className="text-on-surface-variant hover:text-white transition-colors flex items-center gap-1 label-caps self-start sm:self-auto text-[10px] md:text-[12px]">
                Filter <Filter size={16} />
              </button>
            </div>
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse min-w-[650px]">
                <thead className="bg-surface-container border-b border-outline-variant">
                  <tr className="label-caps !font-normal text-on-surface-variant text-[10px]">
                    <th className="p-3 md:p-4 pl-4 md:pl-6 w-[25%]">Tool</th>
                    <th className="p-3 md:p-4 w-[20%]">Category</th>
                    <th className="p-3 md:p-4 text-right w-[15%]">Cost/Mo</th>
                    <th className="p-3 md:p-4 w-[20%]">Last Active</th>
                    <th className="p-3 md:p-4 text-right pr-4 md:pr-6 w-[20%]">Activity (30d)</th>
                  </tr>
                </thead>
                <tbody className="font-mono text-[12px] md:text-[14px]">
                  <InventoryRow tool="AWS IAM" cat="Infrastructure" cost="$0.00" active="2 hrs ago" activity={1420} max={1420} />
                  <InventoryRow tool="Linear" cat="Project Mgmt" cost="$8.00" active="1 day ago" activity={342} max={1420} />
                  <InventoryRow tool="Slack Enterprise" cat="Communication" cost="$15.00" active="5 mins ago" activity={4105} max={4105} />
                  <InventoryRow tool="Figma" cat="Design" cost="$15.00" active="34 days ago" activity={0} max={4105} isError />
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <aside className="w-full lg:w-1/3 xl:min-w-[400px] space-y-6 md:space-y-gutter shrink-0">
          <section className="border border-outline-variant bg-surface-container-lowest p-4 md:p-6">
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <CheckCircle className="text-primary shrink-0" size={20} />
              <h2 className="font-display text-[18px] md:text-[20px] font-bold text-primary uppercase line-clamp-1">System Ownership</h2>
            </div>
            <div className="space-y-4">
              <OwnershipCard title="Datadog Enterprise" role="Admin" desc="Responsible for 42 sub-accounts and billing oversight." spend="$12,400/mo" />
              <OwnershipCard title="GitHub Organization" role="Owner" desc="Primary technical contact for engineering org." spend="$4,800/mo" />
            </div>
            <button className="mt-4 w-full border border-outline-variant text-primary label-caps py-2 px-4 hover:border-primary transition-colors font-bold uppercase text-[10px] md:text-[12px]">
              Transfer Ownerships
            </button>
          </section>

          <section className="border border-outline-variant bg-surface-container p-4 md:p-6">
            <h3 className="label-caps text-on-surface-variant mb-4 uppercase text-[10px] md:text-[12px]">Identity Metadata</h3>
            <div className="space-y-3 font-mono text-[11px] md:text-[13px]">
              <div className="flex flex-col sm:flex-row sm:justify-between border-b border-outline-variant/30 pb-2 gap-1 sm:gap-0">
                <span className="text-on-surface-variant">User ID</span>
                <span className="text-primary break-all">usr_8f92a1b</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between border-b border-outline-variant/30 pb-2 gap-1 sm:gap-0">
                <span className="text-on-surface-variant">Created Date</span>
                <span className="text-primary">2023-01-15</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between border-b border-outline-variant/30 pb-2 gap-1 sm:gap-0">
                <span className="text-on-surface-variant">Last Login (SSO)</span>
                <span className="text-primary">Today, 08:42 AM</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between pb-2 gap-1 sm:gap-0">
                <span className="text-on-surface-variant">Auth Method</span>
                <span className="text-primary">Okta SAML</span>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}

function RecommendationRow({ tool, desc, icon, actionLabel, actionType }: { tool: string, desc: string, icon: string, actionLabel: string, actionType: 'remove' | 'downgrade' }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between p-3 md:p-4 border border-outline-variant bg-surface-container hover:bg-surface-container-high transition-colors gap-4 w-full">
      <div className="flex items-start md:items-center gap-3 md:gap-4 min-w-0 flex-1 w-full">
        <img src={icon} alt={tool} className="w-8 h-8 md:w-8 md:h-8 grayscale opacity-70 shrink-0 mt-1 md:mt-0" />
        <div className="min-w-0 flex-1">
          <div className="font-mono font-bold text-primary mb-1 uppercase tracking-tighter text-[12px] md:text-[14px] truncate">{tool}</div>
          <div className="font-sans text-[12px] md:text-sm text-on-surface-variant lowercase tracking-tight line-clamp-2 md:line-clamp-1 break-words leading-tight">{desc}</div>
        </div>
      </div>
      <div className="flex gap-2 self-start md:self-auto w-full md:w-auto shrink-0 justify-end md:justify-start pt-2 md:pt-0 border-t border-outline-variant/30 md:border-t-0 mt-2 md:mt-0">
        <button className="flex-1 md:flex-none border border-outline-variant text-primary label-caps uppercase py-2 md:py-1.5 px-2 md:px-3 hover:border-primary transition-colors font-bold tracking-widest text-[10px] text-center">Keep</button>
        <button className={clsx(
          'flex-1 md:flex-none label-caps uppercase py-2 md:py-1.5 px-2 md:px-3 transform active:scale-95 transition-all font-bold tracking-widest text-[10px] text-center truncate max-w-[120px] md:max-w-none',
          actionType === 'remove' ? 'bg-error text-black hover:bg-error/90' : 'bg-primary text-black hover:bg-white/90'
        )}>
          {actionLabel}
        </button>
      </div>
    </div>
  );
}

function InventoryRow({ tool, cat, cost, active, activity, max, isError }: any) {
  return (
    <tr className={clsx('hover:bg-surface-container-high transition-colors', isError && 'bg-error-container/5')}>
      <td className="p-3 md:p-4 pl-4 md:pl-6 flex items-center gap-2 md:gap-3 text-primary border-none">
        <span className={clsx('w-2 h-2 rounded-full shrink-0', isError ? 'bg-error animate-pulse' : 'bg-primary')} />
        <span className="font-bold truncate max-w-[150px] md:max-w-[200px] block" title={tool}>{tool}</span>
      </td>
      <td className="p-3 md:p-4 text-on-surface-variant border-none truncate text-[11px] md:text-[14px]">{cat}</td>
      <td className="p-3 md:p-4 text-right text-primary font-bold border-none">{cost}</td>
      <td className={clsx('p-3 md:p-4 border-none text-[11px] md:text-[14px]', isError ? 'text-error font-bold' : 'text-on-surface-variant')}>{active}</td>
      <td className="p-3 md:p-4 text-right pr-4 md:pr-6 border-none">
        <div className="flex items-center justify-end gap-1 md:gap-2 text-primary">
          <span className={clsx('w-10 md:w-12 text-right text-[11px] md:text-[14px]', isError && 'text-error')}>{activity.toLocaleString()}</span>
          <div className="w-12 md:w-16 h-1 bg-surface-container-highest rounded-full overflow-hidden shrink-0">
            <div className={clsx('h-full transition-all duration-500', isError ? 'bg-error' : 'bg-primary')} style={{ width: `${(activity/max)*100}%` }} />
          </div>
        </div>
      </td>
    </tr>
  );
}

function OwnershipCard({ title, role, desc, spend }: { title: string, role: string, desc: string, spend: string }) {
  return (
    <div className="p-3 md:p-4 border border-outline-variant bg-surface-container hover:border-primary transition-colors group">
      <div className="flex justify-between items-start mb-2 gap-2">
        <div className="font-mono text-primary font-bold uppercase tracking-tighter text-[12px] md:text-[13px] line-clamp-1" title={title}>{title}</div>
        <span className="px-1.5 md:px-2 py-0.5 bg-surface-variant border border-outline-variant text-primary label-caps text-[8px] md:text-[9px] uppercase tracking-widest leading-none shrink-0">{role}</span>
      </div>
      <div className="font-sans text-on-surface-variant text-[12px] md:text-sm mb-3 leading-tight line-clamp-2 md:line-clamp-none">{desc}</div>
      <div className="flex flex-wrap sm:flex-nowrap justify-between items-center text-[10px] md:text-[11px] font-mono border-t border-outline-variant/30 pt-2 group-hover:border-primary transition-colors gap-1 sm:gap-0">
        <span className="text-on-surface-variant uppercase tracking-widest font-bold w-full sm:w-auto">Managed Spend:</span>
        <span className="text-primary font-black w-full sm:w-auto sm:text-right">{spend}</span>
      </div>
    </div>
  );
}
