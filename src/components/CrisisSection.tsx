import crisisImage from "@/assets/crisis-burning.jpg";

const CrisisSection = () => {
  const crisisPoints = [
    {
      title: "Crop Residue Burning",
      description: "Every harvest season, 250 million tonnes stubble is burned, creating toxic air that engulfs cities and villages alike.",
      icon: "🔥"
    },
    {
      title: "Biomass as Waste",
      description: "Agricultural residues are treated as disposal problems rather than valuable resources, releasing carbon into the atmosphere.",
      icon: "🌾"
    },
    {
      title: "Soil Carbon Depletion",
      description: "Decades of intensive farming have stripped soil of organic carbon, undermining the very foundation of food security.",
      icon: "🌍"
    },
    {
      title: "Farmer Vulnerability",
      description: "Caught between rising costs and declining yields, farmers bear the weight of a system designed against them.",
      icon: "👨‍🌾"
    }
  ];

  return (
    <section id="crisis" className="relative min-h-screen py-24 md:py-32 overflow-hidden">
      {/* Background Image with Lighter Vignette */}
      <div className="absolute inset-0">
        <img 
          src={crisisImage} 
          alt="Crop residue burning across Indian fields" 
          className="image-cinematic opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/40 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,hsl(var(--background)/0.8)_80%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="label-text text-terracotta mb-4 block opacity-0 animate-fade-in">
            The Crisis
          </span>
          <h2 className="headline-section text-foreground opacity-0 animate-fade-in-up delay-100">
            These emergencies are interconnected. <span className="text-terracotta">So must be the solution.</span>
          </h2>
        </div>

        {/* Crisis Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-20">
          {crisisPoints.map((point, index) => (
            <div 
              key={point.title}
              className="p-8 md:p-10 bg-background/40 backdrop-blur-sm border border-border/30 rounded-lg opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <span className="text-3xl mb-4 block">{point.icon}</span>
              <h3 className="headline-subsection text-foreground mb-3">{point.title}</h3>
              <p className="body-text text-muted-foreground">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Critical Data Callout */}
       <div className="bg-background/50 backdrop-blur-sm border border-border/30 rounded-lg p-6 sm:p-8 md:p-12">
  <div className="max-w-3xl mx-auto text-center">
    
    <span className="label-text text-terracotta mb-6 block">
      Soil Organic Carbon Crisis
    </span>

    {/* Stats */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8">
      
      <div>
        <span className="stat-number text-destructive text-2xl sm:text-3xl md:text-4xl">
          ~0.6%
        </span>
        <p className="text-xs sm:text-sm text-muted-foreground mt-2">
          Current levels in many districts
        </p>
      </div>

      <div>
        <span className="stat-number text-terracotta text-2xl sm:text-3xl md:text-4xl">
          0.8%
        </span>
        <p className="text-xs sm:text-sm text-muted-foreground mt-2">
          Bare minimum threshold
        </p>
      </div>

      <div>
        <span className="stat-number text-sage text-2xl sm:text-3xl md:text-4xl">
          ~2%
        </span>
        <p className="text-xs sm:text-sm text-muted-foreground mt-2">
          Healthy, productive soil
        </p>
      </div>

    </div>

    <p className="text-base sm:text-lg md:text-xl body-large text-foreground font-display italic">
      "This is a slow-motion disaster unfolding beneath our feet."
    </p>

  </div>
</div>
      </div>
    </section>
  );
};

export default CrisisSection;
