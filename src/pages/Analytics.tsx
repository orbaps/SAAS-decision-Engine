import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter, Cell } from 'recharts';
import { Wallet, PiggyBank, Layers, Gauge, Download } from 'lucide-react';
import { clsx } from 'clsx';

const SPEND_DATA = [
  { name: 'INFRA', value: 85, color: '#353535' },
  { name: 'DEV_TOOLS', value: 60, color: '#353535' },
  { name: 'DESIGN', value: 45, color: '#353535' },
  { name: 'SALES', value: 30, color: '#353535' },
  { name: 'HR', value: 20, color: '#353535' },
  { name: 'MAR_KTING', value: 15, color: '#353535' }, // shortened MARKETING to MAR_KTING to fit smaller screens
];

const SCATTER_DATA = [
  { cost: 80, util: 85, fill: '#4ade80', name: 'High Cost, High Util' },
  { cost: 90, util: 20, fill: '#f87171', name: 'High Cost, Low Util' },
  { cost: 60, util: 30, fill: '#f87171', name: 'Medium Cost, Low Util' },
  { cost: 30, util: 60, fill: '#ffffff', name: 'Low Cost, Med Util' },
  { cost: 20, util: 90, fill: '#ffffff', name: 'Low Cost, High Util' },
];

interface MetricCardProps {
  title: string;
  value: string;
  subValue: string;
  icon: any;
  trend?: string;
  trendColor?: string;
  progress?: number;
}

function MetricCard({ title, value, subValue, icon: Icon, trend, trendColor, progress }: MetricCardProps) {
  return (
    <div className="border border-outline-variant bg-surface-container-lowest p-6 flex flex-col justify-between hover:border-outline transition-colors duration-100 group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="flex justify-between items-start mb-4 relative z-10 gap-2">
        <h3 className="label-caps text-outline uppercase tracking-widest leading-normal sm:leading-none break-words">{title}</h3>
        <Icon className="text-outline-variant shrink-0" size={20} />
      </div>
      <div className="relative z-10">
        <div className="font-display text-[24px] sm:text-[32px] font-bold text-primary mb-1 leading-none tracking-tight">{value}</div>
        {progress !== undefined ? (
          <div className="space-y-2">
            <div className="w-full bg-surface-container-highest h-1 mt-2">
              <div className="bg-primary h-1" style={{ width: `${progress}%` }} />
            </div>
            <div className="font-mono text-[12px] sm:text-[14px] text-outline flex items-center gap-1 leading-tight">{subValue}</div>
          </div>
        ) : (
          <div className={clsx('font-mono text-[12px] sm:text-[14px] flex items-center gap-1 leading-tight', trendColor || 'text-outline')}>
            {trend && <span className="mr-1">{trend}</span>}
            {subValue}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Analytics() {
  return (
    <div className="space-y-8 md:space-y-section-gap w-full max-w-7xl mx-auto">
      <div className="relative pt-8 md:pt-12 pb-12 md:pb-24 overflow-hidden border-b border-outline">
        <div className="massive-text text-[15vw] font-black leading-[0.8] tracking-[-0.05em] uppercase text-white opacity-10 absolute -bottom-4 -left-8 pointer-events-none select-none">
          ANALYTICS
        </div>
        <div className="relative z-10">
          <h1 className="font-display text-[48px] md:text-[80px] lg:text-[120px] font-black text-white mb-6 leading-[0.85] tracking-[-0.06em] uppercase break-words">
            TEL_METRY<br /><span className="text-primary">ENGINE</span>
          </h1>
          <p className="font-sans text-[16px] md:text-[20px] text-on-surface-variant max-w-xl leading-[1.4] tracking-tight">
            Comprehensive fiscal impact analysis and real-time operational spend monitoring across all departments.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-gutter mb-8 md:mb-section-gap">
        <MetricCard
          title="TOTAL_SPEND / MO"
          value="$142,500"
          subValue="+4.2%_VAR"
          icon={Wallet}
          trendColor="text-error font-black"
          trend="↑"
        />
        <MetricCard
          title="SAVINGS_PROJECTION"
          value="$38,200"
          subValue="OPTIMIZED_PATH"
          icon={PiggyBank}
          trendColor="text-status-keep font-black"
          trend="↓"
        />
        <MetricCard
          title="ACTIVE_FLEET"
          value="104"
          subValue="UNITS_DEPLOYED"
          icon={Layers}
        />
        <MetricCard
          title="UTIL_EFFICIENCY"
          value="68%"
          subValue="TARGET_MIN: 85%"
          icon={Gauge}
          progress={68}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-gutter">
        <div className="lg:col-span-2 border border-outline bg-surface-container-low p-4 sm:p-6 md:p-10 flex flex-col h-[400px] md:h-[500px]">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 sm:gap-0 mb-8 md:mb-12">
            <h2 className="font-display text-[18px] md:text-[24px] font-black text-white uppercase tracking-[-0.02em]">FISCAL_DISTRIBUTION</h2>
            <button className="label-caps text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 border-b border-outline hover:border-primary pb-1 font-black self-start sm:self-auto text-[10px] md:text-[12px]">
              EXPORT_DATA <Download size={14} />
            </button>
          </div>
          <div className="flex-1 w-full -ml-4 md:-ml-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={SPEND_DATA} margin={{ top: 20, right: 0, left: window.innerWidth < 768 ? -25 : -20, bottom: window.innerWidth < 768 ? 40 : 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: window.innerWidth < 768 ? 8 : 10, fontWeight: 900, tracking: '0.1em' }}
                  interval={0}
                  height={window.innerWidth < 768 ? 60 : 60}
                  angle={window.innerWidth < 768 ? -45 : 0}
                  textAnchor={window.innerWidth < 768 ? 'end' : 'middle'}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: window.innerWidth < 768 ? 8 : 10, fontWeight: 900 }}
                  width={window.innerWidth < 768 ? 35 : 60}
                />
                <Tooltip 
                  cursor={{ fill: 'rgba(242,125,38,0.05)' }}
                  contentStyle={{ backgroundColor: '#050505', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0' }}
                  itemStyle={{ fontSize: '10px' }}
                  labelStyle={{ fontSize: '10px' }}
                />
                <Bar dataKey="value" fill="#F27D26" radius={0} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="lg:col-span-1 border border-outline bg-surface-container-low p-4 sm:p-6 md:p-10 flex flex-col h-[400px] md:h-[500px]">
          <h2 className="font-display text-[18px] md:text-[24px] font-black text-white uppercase tracking-[-0.02em] mb-8 md:mb-12">COST/UTIL_MATRIX</h2>
          <div className="flex-1 w-full relative">
            <div className="absolute inset-x-0 top-1/2 h-px bg-white/5 pointer-events-none" />
            <div className="absolute inset-y-0 left-1/2 w-px bg-white/5 pointer-events-none" />
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: window.innerWidth < 768 ? -15 : 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis 
                  type="number" 
                  dataKey="util" 
                  domain={[0, 100]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 9, fontWeight: 900 }}
                />
                <YAxis 
                  type="number" 
                  dataKey="cost" 
                  domain={[0, 100]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 9, fontWeight: 900 }}
                  width={window.innerWidth < 768 ? 30 : 60}
                />
                <Tooltip 
                  cursor={{ strokeDasharray: '3 3' }}
                  contentStyle={{ backgroundColor: '#050505', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0' }}
                  itemStyle={{ fontSize: '10px' }}
                  labelStyle={{ fontSize: '10px' }}
                />
                <Scatter name="Tools" data={SCATTER_DATA}>
                  {SCATTER_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} stroke="#000" strokeWidth={2} />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
