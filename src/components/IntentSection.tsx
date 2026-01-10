import intentImage from "@/assets/intent-collection.jpg";

const IntentSection = () => {
  return (
    <section id="intent" className="relative min-h-screen py-24 md:py-32 overflow-hidden flex items-center">
      {/* Background Image with Lighter Vignette */}
      <div className="absolute inset-0">
        <img 
          src={intentImage} 
          alt="Farmers collecting agricultural biomass" 
          className="image-cinematic opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(var(--background)/0.7)_85%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container">
        <div className="max-w-2xl">
          <span className="label-text text-terracotta mb-4 block opacity-0 animate-fade-in">
            Our Intent
          </span>
          <h2 className="headline-section text-foreground mb-8 opacity-0 animate-fade-in-up delay-100">
            What if the very materials causing pollution could rebuild soil, incomes, and climate stability?
          </h2>

          <div className="space-y-6 opacity-0 animate-fade-in-up delay-300">
            <div className="flex gap-4">
              <div className="w-1 bg-terracotta rounded-full flex-shrink-0" />
              <div>
                <h4 className="font-bold text-foreground mb-1">Stop the burning</h4>
                <p className="text-muted-foreground">Intercept biomass before it becomes air pollution</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1 bg-terracotta rounded-full flex-shrink-0" />
              <div>
                <h4 className="font-bold text-foreground mb-1">Convert to carbon</h4>
                <p className="text-muted-foreground">Transform waste into stable, long-lived biochar</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1 bg-terracotta rounded-full flex-shrink-0" />
              <div>
                <h4 className="font-bold text-foreground mb-1">Return to soil</h4>
                <p className="text-muted-foreground">Apply biochar as a regenerative soil amendment</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1 bg-terracotta rounded-full flex-shrink-0" />
              <div>
                <h4 className="font-bold text-foreground mb-1">Create income</h4>
                <p className="text-muted-foreground">Build economic opportunity, not penalties, for farmers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntentSection;
