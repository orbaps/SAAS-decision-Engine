import { TELEMETRY_DATA } from '../constants';
import { ActionProtocol } from '../types';
import { Filter, Download } from 'lucide-react';
import { clsx } from 'clsx';

export default function Dashboard() {
  return (
    <div className="space-y-8 md:space-y-section-gap w-full max-w-7xl mx-auto">
      <div className="relative pt-8 md:pt-12 pb-12 md:pb-24 overflow-hidden border-b border-outline">
        <div className="massive-text text-[15vw] font-black leading-[0.8] tracking-[-0.05em] uppercase text-white opacity-10 absolute -bottom-4 -left-8 pointer-events-none select-none">
          ENGINE
        </div>
        <div className="relative z-10 flex flex-col xl:flex-row xl:items-end justify-between gap-8 custom-xl:gap-12">
          <div className="max-w-4xl">
            <h2 className="font-display text-[48px] md:text-[80px] lg:text-[120px] font-black text-white mb-6 leading-[0.85] tracking-[-0.06em] uppercase break-words">
              DECISION<br /><span className="text-primary">ENGINE</span>
            </h2>
            <p className="font-sans text-[16px] md:text-[20px] text-on-surface-variant max-w-xl leading-[1.4] tracking-tight">
              Deterministic analysis of hardware/software telemetry and global cost optimization protocols.
            </p>
          </div>
          <div className="flex flex-row flex-wrap xl:flex-col gap-6 md:gap-4 xl:min-w-[280px]">
            <div className="grid-item">
              <h3 className="label-caps !text-[10px] text-primary mb-2">CURATOR_ID</h3>
              <p className="font-display text-[14px] md:text-[18px] font-black text-white leading-tight uppercase">ELENA V. KOSTOVA / <span className="text-on-surface-variant">SE</span></p>
            </div>
            <div className="grid-item">
              <h3 className="label-caps !text-[10px] text-primary mb-2">LAST_RUN</h3>
              <p className="font-display text-[14px] md:text-[18px] font-black text-white leading-tight uppercase">25 APR 2026 — 16:45</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-outline bg-surface-container-low max-w-[100vw] sm:max-w-none">
        <div className="px-4 md:px-10 py-6 border-b border-outline flex flex-col sm:flex-row justify-between sm:items-center gap-4 sm:gap-0 bg-surface-container">
          <h3 className="font-display text-[16px] md:text-[20px] font-black text-white tracking-widest uppercase leading-none truncate">LICENSE_TELEMETRY / V1.0</h3>
          <div className="flex gap-4 md:gap-8 flex-wrap">
            <button className="text-on-surface-variant hover:text-primary label-caps flex items-center gap-2 transition-colors">
              <Filter size={14} /> <span className="hidden sm:inline">FILTER_ALL</span><span className="sm:hidden">FILTER</span>
            </button>
            <button className="text-on-surface-variant hover:text-primary label-caps flex items-center gap-2 transition-colors">
              <Download size={14} /> <span className="hidden sm:inline">EXPORT_LOG</span><span className="sm:hidden">EXPORT</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-outline bg-surface-container-low">
                <th className="py-5 px-4 md:px-10 label-caps text-on-surface-variant text-[10px] tracking-[0.2em] w-1/4">APP_TOOL</th>
                <th className="py-5 px-4 md:px-10 label-caps text-on-surface-variant text-[10px] tracking-[0.2em] w-1/4">USER_CONTEXT</th>
                <th className="py-5 px-4 md:px-10 label-caps text-on-surface-variant text-[10px] tracking-[0.2em] w-1/4">PROTOCOL</th>
                <th className="py-5 px-4 md:px-10 label-caps text-on-surface-variant text-[10px] tracking-[0.2em] w-1/4">CONFIDENCE</th>
              </tr>
            </thead>
            <tbody className="data-mono font-black italic">
              {TELEMETRY_DATA.map((row) => (
                <tr key={row.id} className="border-b border-outline/50 hover:bg-surface-container transition-all duration-300 group cursor-pointer">
                  <td className="py-4 md:py-6 px-4 md:px-10">
                    <div className="flex items-center gap-2 md:gap-4">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-surface-container-highest border border-outline flex items-center justify-center text-white font-black group-hover:border-primary transition-colors text-[14px] md:text-[16px] shrink-0">
                        {row.toolShort}
                      </div>
                      <span className="text-white text-[14px] md:text-[18px] tracking-tighter uppercase font-display not-italic truncate">{row.tool}</span>
                    </div>
                  </td>
                  <td className="py-4 md:py-6 px-4 md:px-10">
                    <div className="text-white text-[12px] md:text-[16px] uppercase tracking-tighter font-display not-italic font-black border-b border-transparent inline-block hover:border-outline truncate max-w-full">{row.user}</div>
                    <div className="text-on-surface-variant text-[9px] md:text-[10px] mt-1 uppercase tracking-widest font-mono italic opacity-60 truncate max-w-[150px] md:max-w-full">{row.context}</div>
                  </td>
                  <td className="py-4 md:py-6 px-4 md:px-10">
                    <span className={clsx(
                      'inline-block border-2 px-2 md:px-3 py-1 label-caps text-[9px] md:text-[11px] bg-black font-black tracking-[0.2em]',
                      row.protocol === ActionProtocol.REMOVE && 'border-status-remove text-status-remove',
                      row.protocol === ActionProtocol.KEEP && 'border-status-keep text-status-keep',
                      row.protocol === ActionProtocol.DOWNGRADE && 'border-status-downgrade text-status-downgrade',
                      row.protocol === ActionProtocol.FLAG && 'border-status-flag text-status-flag',
                    )}>
                      {row.protocol + '_ACT'}
                    </span>
                  </td>
                  <td className="py-4 md:py-6 px-4 md:px-10">
                    <div className="flex items-baseline gap-1 md:gap-2">
                        <span className="text-[18px] md:text-[24px] font-black text-white not-italic font-display leading-none tracking-tighter">{(row.confidence * 100).toFixed(0)}</span>
                        <span className="text-primary text-[10px] md:text-[14px] font-black uppercase tracking-widest shrink-0">%_DET</span>
                    </div>
                    <div className="w-20 md:w-32 h-1 bg-surface-container-highest mt-2 md:mt-3 overflow-hidden">
                        <div 
                            className="h-full bg-primary transition-all duration-1000 ease-out"
                            style={{ width: `${row.confidence * 100}%` }}
                        />
                    </div>
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
