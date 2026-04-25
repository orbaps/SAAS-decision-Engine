import { TrendingUp, TrendingDown, Target, Zap, Download, RefreshCw, AlertCircle } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { clsx } from 'clsx';

const FORECAST_DATA = [
  { month: 'OCT 23', actual: 120000, projected: 120000 },
  { month: 'NOV 23', actual: 125000, projected: 125000 },
  { month: 'DEC 23', actual: 142000, projected: 142000 },
  { month: 'JAN 24', actual: 138000, projected: 138000 },
  { month: 'FEB 24', actual: 135000, projected: 135000 },
  { month: 'MAR 24', actual: null, projected: 130000 },
  { month: 'APR 24', actual: null, projected: 125000 },
  { month: 'MAY 24', actual: null, projected: 118000 },
  { month: 'JUN 24', actual: null, projected: 112000 },
  { month: 'JUL 24', actual: null, projected: 108000 },
];

export default function Forecasting() {
  return (
    <div className="space-y-8 md:space-y-section-gap w-full max-w-7xl mx-auto">
      <div className="relative pt-8 md:pt-12 pb-12 md:pb-24 overflow-hidden border-b border-outline">
        <div className="massive-text text-[15vw] font-black leading-[0.8] tracking-[-0.05em] uppercase text-white opacity-10 absolute -bottom-4 -left-8 pointer-events-none select-none">
          FOR_CAST
        </div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
          <div className="max-w-4xl">
            <h1 className="font-display text-[48px] md:text-[80px] lg:text-[120px] font-black text-white mb-6 leading-[0.85] tracking-[-0.06em] uppercase break-words">
              PREDICT_VE<br /><span className="text-primary">MODELS</span>
            </h1>
            <p className="font-sans text-[16px] md:text-[20px] text-on-surface-variant max-w-xl leading-[1.4] tracking-tight">
              AI-driven projections for software expenditure based on active optimization protocols and workforce trajectory.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="bg-white text-black font-display font-black text-[11px] uppercase px-4 md:px-8 py-3 md:py-4 hover:bg-primary hover:text-black transition-all duration-300 tracking-widest border border-white">
              NEW_SCENARIO
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-gutter">
        <InsightCard
          label="RUN_RATE_PROJ"
          value="$1.34M"
          sub="BASE_OPT_DELTA: -28%"
          icon={TrendingDown}
          status="positive"
        />
        <InsightCard
          label="OPT_VELOCITY"
          value="12.4%"
          sub="SAVINGS_PER_Q"
          icon={Zap}
          status="neutral"
        />
        <InsightCard
          label="VAR_THRESHOLD"
          value="-4.82%"
          sub="BELOW_Q3_TARGET"
          icon={Target}
          status="positive"
        />
        <InsightCard
          label="RISK_INDEX"
          value="MEDIUM"
          sub="CONTRACT_CHURN: 03"
          icon={AlertCircle}
          status="warning"
        />
      </div>

      <div className="border border-outline bg-surface-container-low p-4 sm:p-6 md:p-10 h-[400px] md:h-[600px] flex flex-col">
        <div className="flex flex-col xl:flex-row justify-between xl:items-center gap-4 xl:gap-0 mb-8 md:mb-16">
          <div>
            <h2 className="font-display text-[18px] md:text-[24px] font-black text-white uppercase tracking-[-0.02em]">ANNUAL_SPEND_TRAJECTORY</h2>
            <p className="font-mono text-[8px] md:text-[10px] text-on-surface-variant uppercase tracking-[0.2em] mt-2 font-black italic break-words">COMPARISON // SECTOR_OPTIMIZED vs BASELINE</p>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-8 font-mono text-[8px] md:text-[9px] uppercase font-black tracking-[0.2em] text-on-surface-variant">
             <div className="flex items-center gap-2">
               <div className="w-2 h-2 md:w-3 md:h-3 bg-primary shrink-0" /> <span>ACTUAL_SPEND</span>
             </div>
             <div className="flex items-center gap-2">
               <div className="w-2 h-2 md:w-3 md:h-3 bg-white/10 border border-white/20 shrink-0" /> <span>AI_PROJECTION</span>
             </div>
          </div>
        </div>
        <div className="flex-1 w-full relative -ml-4 md:-ml-0">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={FORECAST_DATA} margin={{ top: 0, right: 0, left: window.innerWidth < 768 ? -25 : -20, bottom: window.innerWidth < 768 ? 20 : 0 }}>
              <defs>
                <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F27D26" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#F27D26" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorProjected" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ffffff" stopOpacity={0.05}/>
                  <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: window.innerWidth < 768 ? 8 : 10, fontWeight: 900, tracking: '0.1em' }}
                dy={window.innerWidth < 768 ? 10 : 15}
                angle={window.innerWidth < 768 ? -45 : 0}
                textAnchor={window.innerWidth < 768 ? 'end' : 'middle'}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: window.innerWidth < 768 ? 8 : 10, fontWeight: 900 }}
                tickFormatter={(val) => `$${val/1000}K`}
                width={window.innerWidth < 768 ? 40 : 60}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#050505', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0' }}
                itemStyle={{ fontSize: '10px', textTransform: 'uppercase', fontWeight: 900, color: '#fff' }}
                labelStyle={{ fontSize: '10px' }}
              />
              <ReferenceLine x="FEB 24" stroke="#F27D26" strokeDasharray="5 5" label={{ position: 'top', value: 'SYNC', fill: '#F27D26', fontSize: window.innerWidth < 768 ? 8 : 10, fontWeight: 900, tracking: '0.2em' }} />
              <Area 
                type="monotone" 
                dataKey="projected" 
                stroke="rgba(255,255,255,0.2)" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorProjected)" 
                strokeDasharray="10 5"
              />
              <Area 
                type="monotone" 
                dataKey="actual" 
                stroke="#F27D26" 
                strokeWidth={4}
                fillOpacity={1} 
                fill="url(#colorActual)" 
                connectNulls={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-gutter">
        <section className="border border-outline bg-surface-container-low p-6 md:p-10">
          <h3 className="label-caps !text-[11px] text-primary mb-6 md:mb-8 border-l-4 border-primary pl-4 uppercase font-black tracking-widest italic">OPTIMIZATION_DRIVERS</h3>
          <ul className="space-y-4 md:space-y-6">
            <DriverItem label="License Reclaim Policy" impact="High" value="-$42k/yr" />
            <DriverItem label="Vendor Consolidation" impact="Med" value="-$18k/yr" />
            <DriverItem label="Tier Downgrade (Active)" impact="High" value="-$24k/yr" />
          </ul>
        </section>
        <section className="border border-outline bg-surface-container-low p-6 md:p-10">
          <h3 className="label-caps !text-[11px] text-error mb-6 md:mb-8 border-l-4 border-error pl-4 uppercase font-black tracking-widest italic">RISK_ASSUMPTIONS</h3>
          <ul className="space-y-4 md:space-y-6">
            <DriverItem label="Headcount Expansion" impact="Low" value="+$12k/yr" isNegative />
            <DriverItem label="Contract Price Escalation" impact="High" value="+$32k/yr" isNegative />
            <DriverItem label="Shadow IT Detection Rate" impact="Med" value="+$8k/yr" isNegative />
          </ul>
        </section>
      </div>
    </div>
  );
}

function InsightCard({ label, value, sub, icon: Icon, status }: any) {
  return (
    <div className="border border-outline p-6 md:p-10 bg-surface-container-low hover:border-primary transition-all duration-300 group cursor-pointer">
      <div className="flex justify-between items-start mb-4 md:mb-6">
        <span className="label-caps !text-[10px] text-on-surface-variant font-black uppercase tracking-[0.2em] break-words pr-2">{label}</span>
        <Icon size={18} className={clsx(
          'transition-transform group-hover:scale-125 shrink-0',
          status === 'positive' && 'text-primary',
          status === 'warning' && 'text-error',
          status === 'neutral' && 'text-on-surface-variant'
        )} />
      </div>
      <div>
        <div className="font-display text-[32px] md:text-[42px] font-black text-white leading-none mb-2 md:mb-3 uppercase tracking-[-0.05em] group-hover:text-primary transition-colors">{value}</div>
        <div className="font-mono text-[9px] md:text-[10px] text-on-surface-variant uppercase tracking-widest font-black italic opacity-60 break-words">{sub}</div>
      </div>
    </div>
  );
}

function DriverItem({ label, impact, value, isNegative }: any) {
  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between group cursor-pointer gap-2 sm:gap-0">
      <div className="flex items-center gap-2 md:gap-4">
        <div className={clsx('w-2 h-2 rotate-45 group-hover:scale-150 transition-all shrink-0', isNegative ? 'bg-error' : 'bg-primary')} />
        <span className="font-display text-[14px] md:text-[16px] font-black text-white uppercase tracking-tighter group-hover:text-primary transition-colors shrink min-w-0 break-words line-clamp-2">{label}</span>
      </div>
      <div className="flex items-center gap-4 md:gap-6 justify-between sm:justify-end pl-4 sm:pl-0">
        <span className="label-caps text-[8px] md:text-[9px] text-on-surface-variant px-2 py-0.5 border border-outline font-black shrink-0">{impact}</span>
        <span className={clsx('font-mono text-[14px] md:text-[16px] font-black italic shrink-0', isNegative ? 'text-error' : 'text-white')}>{value}</span>
      </div>
    </li>
  );
}
