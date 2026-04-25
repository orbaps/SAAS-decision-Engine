import { Users, DollarSign, Activity, ChevronRight, Search, Plus, Filter, Download } from 'lucide-react';
import { clsx } from 'clsx';

const DEPTS = [
  { name: 'Core Engineering', pool: 42, activeUsers: 142, toolCount: 56, spend: 84200, status: 'OPTIMAL', utilization: 92 },
  { name: 'Product & Design', pool: 12, activeUsers: 34, toolCount: 18, spend: 12400, status: 'VAR_DET', utilization: 64 },
  { name: 'Sales & Growth', pool: 8, activeUsers: 85, toolCount: 12, spend: 32100, status: 'CRITICAL', utilization: 42 },
  { name: 'HR & People', pool: 4, activeUsers: 22, toolCount: 8, spend: 4200, status: 'OPTIMAL', utilization: 88 },
  { name: 'Marketing Ops', pool: 6, activeUsers: 45, toolCount: 22, spend: 18400, status: 'VAR_DET', utilization: 55 },
];

export default function Departments() {
  return (
    <div className="space-y-8 md:space-y-section-gap w-full max-w-7xl mx-auto">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-surface-variant pb-6 md:pb-gutter">
        <div className="flex-1">
          <h1 className="font-display text-[32px] md:text-[48px] font-bold text-primary mb-2 md:mb-4 leading-none tracking-tighter uppercase break-words">Departmental<br className="sm:hidden" /> Topology</h1>
          <p className="font-sans text-[14px] md:text-[18px] text-outline max-w-2xl leading-relaxed">Hierarchical analysis of software allocation and performance metrics across organizational units.</p>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-4 shrink-0">
          <button className="px-3 md:px-4 py-2 border border-outline text-primary label-caps uppercase hover:bg-surface-container font-bold tracking-widest text-[10px] md:text-[12px]">Export Report</button>
          <button className="px-3 md:px-4 py-2 bg-primary text-black label-caps uppercase hover:bg-surface-tint font-bold tracking-widest text-[10px] md:text-[12px] flex items-center gap-1 md:gap-2">
            <Plus size={16} /> New Unit
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-gutter">
        <MetricBox icon={Users} label="Total Workforce Coverage" value="452 Users" sub="98.2% across 8 depts" />
        <MetricBox icon={DollarSign} label="Largest Unit Expenditure" value="$84.2K" sub="Core Engineering" />
        <MetricBox icon={Activity} label="Global Utilization" value="76.4%" sub="Target: 85.0%" isError />
      </div>

      <div className="border border-outline bg-surface-container-lowest max-w-[100vw] sm:max-w-none">
        <div className="p-4 border-b border-outline bg-surface-container-low flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between sm:items-center">
          <div className="flex gap-4 w-full sm:w-auto">
            <div className="flex items-center border-b border-outline pb-1 focus-within:border-primary transition-colors flex-1 sm:w-[200px]">
              <Search size={14} className="text-on-surface-variant mr-2 shrink-0" />
              <input type="text" placeholder="Search departments..." className="w-full bg-transparent border-none focus:ring-0 p-0 font-mono text-[11px] uppercase placeholder:text-outline" />
            </div>
          </div>
          <div className="flex gap-4">
             <button className="text-on-surface-variant hover:text-white transition-colors flex items-center gap-1 label-caps text-[11px]">
               Filter <Filter size={14} />
             </button>
             <button className="text-on-surface-variant hover:text-white transition-colors flex items-center gap-1 label-caps text-[11px]">
               Download <Download size={14} />
             </button>
          </div>
        </div>

        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead className="bg-surface-container border-b border-outline">
              <tr className="label-caps text-on-surface-variant uppercase text-[10px] tracking-widest">
                <th className="p-4 md:p-6 w-[25%]">Sector / Unit</th>
                <th className="p-4 md:p-6 text-center w-[15%]">Resources (Pool)</th>
                <th className="p-4 md:p-6 text-center w-[15%]">Active Seats</th>
                <th className="p-4 md:p-6 text-center w-[15%]">Monthly Spend</th>
                <th className="p-4 md:p-6 w-[25%]">Efficiency Status</th>
                <th className="p-4 md:p-6 text-right w-[5%]">Topology</th>
              </tr>
            </thead>
            <tbody className="font-mono text-[12px] md:text-[14px] text-primary divide-y divide-outline/30">
              {DEPTS.map((dept) => (
                <tr key={dept.name} className="hover:bg-surface-container-high transition-all group cursor-pointer border-none">
                  <td className="p-4 md:p-6 border-none">
                    <div className="font-bold text-primary group-hover:underline underline-offset-4 uppercase tracking-tighter truncate md:whitespace-normal max-w-[150px] md:max-w-none">{dept.name}</div>
                  </td>
                  <td className="p-4 md:p-6 text-center border-none">{dept.toolCount}</td>
                  <td className="p-4 md:p-6 text-center border-none">{dept.activeUsers}</td>
                  <td className="p-4 md:p-6 text-center font-bold border-none">${dept.spend.toLocaleString()}</td>
                  <td className="p-4 md:p-6 border-none">
                    <div className="flex items-center gap-2 md:gap-3">
                      <span className={clsx(
                        'px-1 md:px-2 py-0.5 label-caps text-[8px] md:text-[9px] border text-center min-w-[70px]',
                        dept.status === 'OPTIMAL' && 'border-status-keep text-status-keep bg-status-keep/5',
                        dept.status === 'VAR_DET' && 'border-status-downgrade text-status-downgrade bg-status-downgrade/5',
                        dept.status === 'CRITICAL' && 'border-status-remove text-status-remove bg-status-remove/5'
                      )}>
                        {dept.status}
                      </span>
                      <div className="hidden sm:block flex-1 max-w-[60px] md:max-w-[80px] h-1 bg-surface-container-highest">
                        <div className={clsx(
                          'h-full transition-all duration-700',
                          dept.status === 'OPTIMAL' && 'bg-status-keep',
                          dept.status === 'VAR_DET' && 'bg-status-downgrade',
                          dept.status === 'CRITICAL' && 'bg-status-remove'
                        )} style={{ width: `${dept.utilization}%` }} />
                      </div>
                      <span className="text-[10px] uppercase">{dept.utilization}%</span>
                    </div>
                  </td>
                  <td className="p-4 md:p-6 text-right border-none">
                    <button className="p-2 hover:bg-primary hover:text-black transition-colors rounded-none border border-transparent hover:border-primary">
                      <ChevronRight size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function MetricBox({ icon: Icon, label, value, sub, isError }: any) {
  return (
    <div className="border border-outline p-6 md:p-gutter bg-surface-container-low/50 hover:bg-surface-container-low transition-colors duration-100 flex flex-col justify-between h-32 md:h-40">
      <div className="flex justify-between items-start gap-2">
        <span className="label-caps !text-[10px] uppercase text-on-surface-variant font-bold leading-none break-words">{label}</span>
        <Icon size={18} className="text-outline shrink-0" />
      </div>
      <div>
        <div className={clsx('font-display text-[24px] md:text-[32px] font-bold leading-none mb-1 uppercase tracking-tight', isError ? 'text-status-remove' : 'text-primary')}>
          {value}
        </div>
        <div className="font-mono text-[10px] md:text-[12px] text-on-surface-variant lowercase tracking-tight">{sub}</div>
      </div>
    </div>
  );
}
