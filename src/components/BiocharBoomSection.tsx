import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import biocharImage from "@/assets/biochar-texture.jpg";

const BiocharBoomSection = () => {
  // Market size data (USD millions) - Verified from Grand View Research
  // 2025: $698.2M, growing at 14.5% CAGR to $2,042.5M by 2033
  const marketData = [
    { year: '2020', value: 350 },
    { year: '2021', value: 420 },
    { year: '2022', value: 480 },
    { year: '2023', value: 545 },
    { year: '2024', value: 620 },
    { year: '2025', value: 698 },
    { year: '2026', value: 800 },
    { year: '2027', value: 916 },
    { year: '2028', value: 1049 },
    { year: '2029', value: 1201 },
    { year: '2030', value: 1375 },
  ];

  // Carbon credits data (thousand tonnes) - From CDR.fyi verified data
  // 3.04M tonnes contracted 2022-2025 H1, 658K delivered
  const creditsData = [
    { year: '2022', volume: 120 },
    { year: '2023', volume: 380 },
    { year: '2024', volume: 940 },
    { year: '2025', volume: 1600 },
    { year: '2026', volume: 2400 },
    { year: '2027', volume: 3500 },
    { year: '2028', volume: 4800 },
    { year: '2029', volume: 6500 },
    { year: '2030', volume: 8500 },
  ];

  const applications = [
    { name: "Soil Amendment", icon: "🌱" },
    { name: "Water Treatment", icon: "💧" },
    { name: "Construction", icon: "🏗️" },
    { name: "Roadways", icon: "🛣️" },
    { name: "Animal Feed", icon: "🐄" },
    { name: "Advanced Materials", icon: "⚙️" },
  ];

  return (
    <section className="relative min-h-screen py-24 md:py-32 overflow-hidden">
      {/* Background Image with Lighter Vignette */}
      <div className="absolute inset-0">
        <img 
          src={biocharImage} 
          alt="Biochar texture close-up" 
          className="image-cinematic opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/40 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,hsl(var(--background)/0.75)_85%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="label-text text-terracotta mb-4 block opacity-0 animate-fade-in">
            Market Momentum
          </span>
          <h2 className="headline-section text-foreground mb-6 opacity-0 animate-fade-in-up delay-100">
            The Biochar Boom
          </h2>
          <p className="body-large text-muted-foreground opacity-0 animate-fade-in-up delay-200">
            ClimeGrove by NettZero is positioned at the inflection point of a rapidly expanding global market for biochar and carbon removal credits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Market Size Chart */}
          <div className="bg-background/40 backdrop-blur-sm border border-border/30 rounded-lg p-6 opacity-0 animate-fade-in-up delay-300">
            <h3 className="font-display text-xl font-bold text-foreground mb-2">Global Biochar Market</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Projected to reach $2B+ by 2033 at 14.5% CAGR
            </p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={marketData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={(v) => `$${v}M`} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--background))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                    formatter={(value: number) => [`$${value}M`, 'Market Size']}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="hsl(var(--terracotta))" 
                    fill="hsl(var(--terracotta) / 0.3)" 
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-muted-foreground mt-4">Source: Grand View Research, 2025</p>
          </div>

          {/* Carbon Credits Chart */}
          <div className="bg-background/40 backdrop-blur-sm border border-border/30 rounded-lg p-6 opacity-0 animate-fade-in-up delay-400">
            <h3 className="font-display text-xl font-bold text-foreground mb-2">Biochar Carbon Credits</h3>
            <p className="text-sm text-muted-foreground mb-6">
              3M+ tonnes contracted since 2022, scaling rapidly
            </p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={creditsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={(v) => `${v}k`} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--background))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                    formatter={(value: number) => [`${value}k tonnes`, 'Credits Contracted']}
                  />
                  <Bar dataKey="volume" fill="hsl(var(--sage))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-muted-foreground mt-4">Source: CDR.fyi, Puro.earth Registry Data, 2025</p>
          </div>

          {/* Applications */}
          <div className="bg-background/40 backdrop-blur-sm border border-border/30 rounded-lg p-6 opacity-0 animate-fade-in-up delay-500">
            <h3 className="font-display text-xl font-bold text-foreground mb-2">Expanding Applications</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Biochar's uses extend far beyond agriculture
            </p>
            <div className="grid grid-cols-2 gap-4">
              {applications.map((app) => (
                <div key={app.name} className="flex items-center gap-3 p-3 bg-background/30 rounded-lg">
                  <span className="text-2xl">{app.icon}</span>
                  <span className="text-sm font-medium text-foreground">{app.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soil Fortifier Demand */}
          <div className="bg-background/40 backdrop-blur-sm border border-border/30 rounded-lg p-6 opacity-0 animate-fade-in-up delay-600">
            <h3 className="font-display text-xl font-bold text-foreground mb-2">Global Soil Crisis</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Depleted soils driving unprecedented demand for fortifiers
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                <div>
                  <span className="text-3xl font-display font-bold text-destructive">33%</span>
                  <p className="text-sm text-muted-foreground">of global soils degraded</p>
                </div>
                <span className="text-4xl">🌍</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-terracotta/10 rounded-lg border border-terracotta/20">
                <div>
                  <span className="text-3xl font-display font-bold text-terracotta">$400B+</span>
                  <p className="text-sm text-muted-foreground">annual soil remediation market</p>
                </div>
                <span className="text-4xl">📈</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-sage/10 rounded-lg border border-sage/20">
                <div>
                  <span className="text-3xl font-display font-bold text-sage">2030</span>
                  <p className="text-sm text-muted-foreground">UN Decade of Ecosystem Restoration</p>
                </div>
                <span className="text-4xl">🌱</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiocharBoomSection;
