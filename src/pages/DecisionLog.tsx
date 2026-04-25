import { TELEMETRY_DATA } from '../constants';
import { ActionProtocol } from '../types';
import { Search, Calendar, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { clsx } from 'clsx';

export default function DecisionLog() {
  return (
    <div className="space-y-8 md:space-y-section-gap w-full max-w-7xl mx-auto">
      <div className="relative pt-8 md:pt-12 pb-12 md:pb-24 overflow-hidden border-b border-outline">
        <div className="massive-text text-[15vw] font-black leading-[0.8] tracking-[-0.05em] uppercase text-white opacity-10 absolute -bottom-4 -left-8 pointer-events-none select-none">
          AUDIT
        </div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
          <div className="max-w-4xl">
            <h1 className="font-display text-[48px] md:text-[80px] lg:text-[120px] font-black text-white mb-6 leading-[0.85] tracking-[-0.06em] uppercase break-words">
              DECISION<br /><span className="text-primary">AUDIT</span>
            </h1>
            <p className="font-sans text-[16px] md:text-[20px] text-on-surface-variant max-w-xl leading-[1.4] tracking-tight">
              Deterministic analysis of software expenditure based on active optimization protocols and workforce trajectory.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="bg-white text-black font-display font-black text-[11px] uppercase px-4 md:px-8 py-3 md:py-4 hover:bg-primary hover:text-black transition-all duration-300 tracking-widest border border-white">
              EXPORT_AUDIT_LOG
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-gutter mb-8 md:mb-section-gap">
        <div className="bg-surface-container-low border border-outline p-6 md:p-10 flex flex-col justify-between group hover:border-primary transition-all">
          <span className="label-caps text-on-surface-variant uppercase tracking-widest leading-none font-black italic text-[10px]">TOTAL_LOGGED_ACTS</span>
          <div className="mt-8 flex items-baseline gap-2 md:gap-4 flex-wrap">
            <span className="font-display text-[36px] md:text-[48px] font-black text-white leading-none tracking-tighter">124,092</span>
            <span className="font-mono text-[12px] md:text-[14px] text-primary italic font-black">+1.2%_VAR</span>
          </div>
        </div>
        <div className="bg-surface-container-low border border-outline p-6 md:p-10 flex flex-col justify-between group hover:border-primary transition-all">
          <span className="label-caps text-on-surface-variant uppercase tracking-widest leading-none font-black italic text-[10px]">AI_ACCURACY_INDEX</span>
          <div className="mt-8 flex items-baseline gap-2 md:gap-4 flex-wrap">
            <span className="font-display text-[36px] md:text-[48px] font-black text-white leading-none tracking-tighter">99.8%</span>
            <span className="font-mono text-[12px] md:text-[14px] text-on-surface-variant italic font-black">0.2%_FLOAT</span>
          </div>
        </div>
        <div className="bg-surface-container-low border border-outline p-6 md:p-10 flex flex-col justify-between group hover:border-primary transition-all">
          <span className="label-caps text-on-surface-variant uppercase tracking-widest leading-none font-black italic text-[10px]">ENGINE_HEALTH_STATE</span>
          <div className="mt-8 flex items-center gap-2 md:gap-4 border-2 border-primary px-4 md:px-6 py-4 bg-black">
            <span className="w-3 h-3 bg-primary animate-pulse rotate-45 shrink-0" />
            <span className="font-display text-[14px] md:text-[18px] text-primary uppercase leading-none font-black tracking-widest">STATE: ACTIVE</span>
          </div>
        </div>
      </div>

      <section className="bg-surface-container-low border border-outline flex flex-col max-w-[100vw] sm:max-w-none">
        <div className="p-4 md:p-10 border-b border-outline flex flex-col sm:flex-row justify-between sm:items-center gap-4 sm:gap-0 bg-surface-container">
          <div className="flex gap-4 md:gap-8 items-center flex-wrap sm:flex-nowrap">
             <div className="flex flex-col">
                <span className="label-caps text-[9px] text-primary mb-1">FILTER_SELECTOR</span>
                <select className="bg-transparent border-none text-white font-display font-black text-[12px] md:text-[14px] uppercase tracking-widest focus:ring-0 p-0 cursor-pointer italic max-w-[150px] sm:max-w-none">
                    <option>ALL_DECISIONS</option>
                    <option>KEEP_ONLY</option>
                    <option>REMOVE_ONLY</option>
                </select>
             </div>
             <div className="h-10 w-px bg-outline hidden sm:block" />
             <div className="flex flex-col">
                <span className="label-caps text-[9px] text-primary mb-1">TIME_HORIZON</span>
                <select className="bg-transparent border-none text-white font-display font-black text-[12px] md:text-[14px] uppercase tracking-widest focus:ring-0 p-0 cursor-pointer italic max-w-[150px] sm:max-w-none">
                    <option>LAST_24_HOURS</option>
                    <option>LAST_7_DAYS</option>
                </select>
             </div>
          </div>
          <button className="label-caps text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 border-b border-outline hover:border-primary pb-1 font-black self-start sm:self-auto text-[10px] md:text-[12px]">
            SYNC_TO_CLOUD <Download size={14} />
          </button>
        </div>

        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline">
                <th className="py-5 px-4 md:px-10 label-caps text-on-surface-variant text-[10px] tracking-[0.2em] w-1/5">TIMESTAMP</th>
                <th className="py-5 px-4 md:px-10 label-caps text-on-surface-variant text-[10px] tracking-[0.2em] w-1/5">NODE/CLUSTER</th>
                <th className="py-5 px-4 md:px-10 label-caps text-on-surface-variant text-[10px] tracking-[0.2em] w-1/5">PROTOCOL</th>
                <th className="py-5 px-4 md:px-10 label-caps text-on-surface-variant text-[10px] tracking-[0.2em] w-1/5">TRIGGER_REASON</th>
                <th className="py-5 px-4 md:px-10 label-caps text-on-surface-variant text-[10px] tracking-[0.2em] w-1/5">CONFIDENCE</th>
              </tr>
            </thead>
            <tbody className="data-mono font-black italic uppercase">
              {TELEMETRY_DATA.map((row, idx) => (
                <tr key={row.id} className="border-b border-outline/50 hover:bg-surface-container transition-all duration-300 group cursor-pointer">
                  <td className="py-4 md:py-6 px-4 md:px-10 text-on-surface-variant text-[10px] md:text-[12px] opacity-60">2026-04-25 16:45:{idx < 10 ? `0${idx}` : idx}</td>
                  <td className="py-4 md:py-6 px-4 md:px-10">
                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                      <span className="text-white text-[14px] md:text-[16px] font-display not-italic tracking-tighter truncate">{row.tool}</span>
                      <span className="text-primary opacity-50 font-black tracking-widest hidden md:inline">/</span>
                      <span className="text-on-surface-variant lowercase text-[9px] md:text-[11px] font-mono tracking-normal italic truncate max-w-[120px] md:max-w-[200px]">{row.user.replace(' ', '.').toLowerCase()}@company.com</span>
                    </div>
                  </td>
                  <td className="py-4 md:py-6 px-4 md:px-10">
                    <span className={clsx(
                      'inline-block border-2 px-2 md:px-3 py-1 label-caps text-[9px] md:text-[10px] bg-black font-black tracking-[0.2em]',
                      row.protocol === ActionProtocol.REMOVE && 'border-status-remove text-status-remove',
                      row.protocol === ActionProtocol.KEEP && 'border-status-keep text-status-keep',
                      row.protocol === ActionProtocol.DOWNGRADE && 'border-status-downgrade text-status-downgrade',
                      row.protocol === ActionProtocol.FLAG && 'border-status-flag text-status-flag',
                    )}>
                      {row.protocol}
                    </span>
                  </td>
                  <td className="py-4 md:py-6 px-4 md:px-10 text-white text-[10px] md:text-[12px] tracking-tight font-display not-italic opacity-80 whitespace-normal min-w-[200px]">{row.reason}</td>
                  <td className="py-4 md:py-6 px-4 md:px-10">
                     <div className="flex items-baseline gap-1 md:gap-2">
                        <span className="text-[16px] md:text-[20px] font-black text-white not-italic font-display leading-none tracking-tighter">{(row.confidence * 100).toFixed(0)}</span>
                        <span className="text-primary text-[9px] md:text-[10px] font-black uppercase tracking-widest">%_DET</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-surface-container py-4 md:py-6 px-4 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          <span className="label-caps text-[9px] md:text-[10px] text-on-surface-variant tracking-[0.2em] font-black italic text-center sm:text-left">REGISTRY_PAGE_01_OF_2409</span>
          <div className="flex gap-2 md:gap-4">
            <button className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border border-outline text-on-surface-variant hover:border-primary transition-colors">
              <ChevronLeft size={16} />
            </button>
            <button className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border border-outline text-primary hover:bg-primary hover:text-black transition-all">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
