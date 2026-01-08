import impactImage from "@/assets/impact-scale.jpg";

const ImpactSection = () => {
  const metrics = [
    { value: "15,000+", unit: "tonnes", label: "Biomass diverted from burning" },
    { value: "4,500+", unit: "tonnes", label: "Biochar produced" },
    { value: "12,000+", unit: "tCO₂e", label: "Permanently removed" },
    { value: "2,000+", unit: "farmers", label: "Engaged across India" }
  ];

  // Project locations for the map (approximate lat/long converted to viewBox coordinates)
  const locations = [
    { name: "Rajgarh", x: 270, y: 155 },
    { name: "Chamoli", x: 285, y: 145 },
    { name: "Puranpur", x: 300, y: 165 },
    { name: "Damoh", x: 285, y: 215 },
    { name: "Bandhavgarh", x: 300, y: 220 },
    { name: "Udupi", x: 250, y: 330 },
  ];

  return (
    <section id="impact" className="relative min-h-screen py-24 md:py-32 overflow-hidden flex items-center">
      {/* Background Image with Lighter Vignette */}
      <div className="absolute inset-0">
        <img 
          src={impactImage} 
          alt="Vast agricultural landscape in India" 
          className="image-cinematic opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/35 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,hsl(var(--background)/0.7)_85%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="label-text text-terracotta mb-4 block opacity-0 animate-fade-in">
            Impact at Scale
          </span>
          <h2 className="headline-section text-foreground opacity-0 animate-fade-in-up delay-100">
            Proof, not promises.
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div 
              key={metric.label}
              className="text-center p-8 bg-background/40 backdrop-blur-sm border border-border/30 rounded-lg opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="mb-2">
                <span className="stat-number text-foreground">{metric.value}</span>
                <span className="text-lg text-terracotta ml-2">{metric.unit}</span>
              </div>
              <p className="text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* India Map with Locations */}
        <div className="bg-background/40 backdrop-blur-sm border border-border/30 rounded-lg p-8 md:p-12 opacity-0 animate-fade-in-up delay-700">
          <h3 className="font-display text-xl font-bold text-foreground mb-6 text-center">Operating Across India</h3>
          <div className="relative max-w-2xl mx-auto">
            {/* SVG Map of India - Official outline */}
            <svg viewBox="0 0 500 500" className="w-full h-auto">
              {/* India outline path - simplified official boundaries */}
              <path
                d="M280,70 L295,75 L310,80 L320,95 L330,100 L340,95 L355,100 L365,110 L370,125 
                   L365,140 L355,150 L345,155 L340,165 L330,175 L325,185 L320,195 L325,210 
                   L335,220 L345,235 L355,250 L360,265 L355,280 L345,295 L340,310 L335,325 
                   L325,340 L310,350 L295,360 L280,370 L265,380 L250,390 L240,395 L230,390 
                   L225,380 L230,365 L240,350 L250,335 L255,320 L250,305 L240,295 L235,280 
                   L240,265 L250,250 L255,235 L250,220 L240,210 L235,195 L240,180 L250,165 
                   L255,150 L250,135 L240,125 L235,115 L240,100 L250,90 L265,80 L280,70"
                fill="hsl(var(--secondary) / 0.3)"
                stroke="hsl(var(--border))"
                strokeWidth="2"
              />
              
              {/* Location pins */}
              {locations.map((loc, index) => (
                <g key={loc.name} className="cursor-pointer">
                  {/* Pulse animation circle */}
                  <circle
                    cx={loc.x}
                    cy={loc.y}
                    r="12"
                    fill="hsl(var(--terracotta) / 0.3)"
                    className="animate-pulse"
                  />
                  {/* Pin dot */}
                  <circle
                    cx={loc.x}
                    cy={loc.y}
                    r="6"
                    fill="hsl(var(--terracotta))"
                    stroke="hsl(var(--cream))"
                    strokeWidth="2"
                  />
                  {/* Location label */}
                  <text
                    x={loc.x}
                    y={loc.y - 18}
                    textAnchor="middle"
                    fill="hsl(var(--foreground))"
                    fontSize="10"
                    fontWeight="bold"
                  >
                    {loc.name}
                  </text>
                </g>
              ))}
            </svg>
            
            {/* Legend */}
            <div className="flex justify-center gap-6 mt-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-terracotta" />
                <span className="text-sm text-muted-foreground">Active Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
