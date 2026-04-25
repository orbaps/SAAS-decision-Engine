import { INVENTORY_DATA } from '../constants';
import { Filter, SortAsc, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { clsx } from 'clsx';

export default function Inventory() {
  return (
    <div className="space-y-8 md:space-y-section-gap w-full max-w-7xl mx-auto">
      <div className="relative pt-8 md:pt-12 pb-12 md:pb-24 overflow-hidden border-b border-outline">
        <div className="massive-text text-[15vw] font-black leading-[0.8] tracking-[-0.05em] uppercase text-white opacity-10 absolute -bottom-4 -left-8 pointer-events-none select-none">
          FLEET
        </div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
          <div className="max-w-4xl">
            <h2 className="font-display text-[48px] md:text-[80px] lg:text-[120px] font-black text-white mb-6 leading-[0.85] tracking-[-0.06em] uppercase break-words">
              SOFTWARE<br /><span className="text-primary">FLEET</span>
            </h2>
            <p className="font-sans text-[16px] md:text-[20px] text-on-surface-variant max-w-xl leading-[1.4] tracking-tight">
              Comprehensive inventory management for 142 discrete license clusters across all organizational nodes.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="bg-white text-black font-display font-black text-[11px] uppercase px-4 md:px-8 py-3 md:py-4 hover:bg-primary hover:text-black transition-all duration-300 tracking-widest border border-white">
              ADD_RESOURCE
            </button>
          </div>
        </div>
      </div>

      <div className="bg-surface-container-low border border-outline flex flex-col max-w-[100vw] sm:max-w-none">
        <div className="px-4 md:px-10 py-6 border-b border-outline flex flex-col sm:flex-row justify-between sm:items-center gap-4 sm:gap-0 bg-surface-container">
          <div className="flex gap-6 md:gap-12 flex-wrap">
            <div className="flex flex-col">
                <span className="label-caps text-[9px] text-primary mb-1">TOTAL_NODES</span>
                <span className="font-display font-black text-[14px] md:text-[18px] text-white">142_UNITS</span>
            </div>
            <div className="flex flex-col">
                <span className="label-caps text-[9px] text-primary mb-1">ACTIVE_DEPT</span>
                <span className="font-display font-black text-[14px] md:text-[18px] text-white">08_BLOCKS</span>
            </div>
          </div>
          <div className="flex gap-4 md:gap-6 flex-wrap">
            <button className="text-on-surface-variant hover:text-primary label-caps flex items-center gap-2 transition-colors">
              <Filter size={14} /> <span className="hidden sm:inline">FILTER_BY</span><span className="sm:hidden">FILTER</span>
            </button>
            <button className="text-on-surface-variant hover:text-primary label-caps flex items-center gap-2 transition-colors">
              <SortAsc size={14} /> <span className="hidden sm:inline">SORT_FIELD</span><span className="sm:hidden">SORT</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse whitespace-nowrap min-w-[700px]">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline">
                <th className="py-5 px-4 md:px-10 label-caps text-on-surface-variant text-[10px] tracking-[0.2em] w-1/5">NODE_ID</th>
                <th className="py-5 px-4 md:px-10 label-caps text-on-surface-variant text-[10px] tracking-[0.2em] w-1/5">SEGMENT</th>
                <th className="py-5 px-4 md:px-10 label-caps text-on-surface-variant text-[10px] tracking-[0.2em] text-right w-1/5">FISCAL_VAL</th>
                <th className="py-5 px-4 md:px-10 label-caps text-on-surface-variant text-[10px] tracking-[0.2em] w-1/5">OWNER_HASH</th>
                <th className="py-5 px-4 md:px-10 label-caps text-on-surface-variant text-[10px] tracking-[0.2em] w-1/5">RENEWAL_EXP</th>
              </tr>
            </thead>
            <tbody className="data-mono font-black italic">
              {INVENTORY_DATA.map((item) => (
                <tr
                  key={item.id}
                  className={clsx(
                    'hover:bg-surface-container transition-all duration-300 group cursor-pointer border-b border-outline/50',
                    item.flagged && 'bg-primary/5 border-l-4 border-l-primary'
                  )}
                >
                  <td className="py-4 md:py-6 px-4 md:px-10 flex items-center gap-2 md:gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-surface-container-highest border border-outline flex items-center justify-center shrink-0 group-hover:border-primary transition-colors">
                      <span className="label-caps text-[10px] md:text-[12px] text-white group-hover:text-primary font-black not-italic">{item.tool.substring(0, 2).toUpperCase()}</span>
                    </div>
                    <span className="text-[14px] md:text-[18px] text-white font-display uppercase tracking-tighter not-italic truncate">{item.tool}</span>
                  </td>
                  <td className="py-4 md:py-6 px-4 md:px-10 text-on-surface-variant uppercase text-[10px] md:text-[12px] tracking-widest">{item.category}</td>
                  <td className="py-4 md:py-6 px-4 md:px-10 font-mono text-[14px] md:text-[16px] text-right text-white">
                    {typeof item.costPerSeat === 'number' ? `$${item.costPerSeat.toFixed(2)}` : <span className="italic text-on-surface-variant font-normal opacity-50 uppercase text-[9px] md:text-[10px]">FIXED_CONTRACT</span>}
                  </td>
                  <td className="py-4 md:py-6 px-4 md:px-10">
                    <div className="flex items-center gap-2 md:gap-3 flex-wrap sm:flex-nowrap">
                      <img
                        src={item.ownerAvatar || `https://ui-avatars.com/api/?name=${item.owner}&background=F27D26&color=fff`}
                        alt={item.owner}
                        className="w-5 h-5 md:w-6 md:h-6 grayscale border border-outline shrink-0 group-hover:grayscale-0 transition-all"
                      />
                      <span className="text-white uppercase text-[10px] md:text-[12px] tracking-tighter not-italic font-display truncate max-w-[120px]">{item.owner}</span>
                    </div>
                  </td>
                  <td className="py-4 md:py-6 px-4 md:px-10 relative flex flex-wrap items-center gap-2 md:gap-3">
                    <span className={clsx('text-white not-italic', item.flagged && 'text-primary')}>
                      {item.renewalDate}
                    </span>
                    {item.flagged && (
                      <span className="px-2 py-0.5 bg-primary text-black label-caps text-[8px] md:text-[9px] font-black tracking-widest italic shrink-0">
                        FLAG_CRITICAL
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="bg-surface-container py-4 md:py-6 px-4 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          <span className="label-caps text-[9px] md:text-[10px] text-on-surface-variant tracking-[0.2em] font-black italic text-center sm:text-left">REGISTRY_PAGE_01_OF_28</span>
          <div className="flex items-center gap-2 md:gap-4">
            <button className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border border-outline text-on-surface-variant disabled:opacity-30 hover:border-primary transition-colors" disabled>
              <ChevronLeft size={16} />
            </button>
            <button className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border border-outline text-primary hover:bg-primary hover:text-black transition-all">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
