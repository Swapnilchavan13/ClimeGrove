import visionImage from "@/assets/vision-future.jpg";

const VisionSection = () => {
  return (
    <section className="relative min-h-screen py-24 md:py-32 overflow-hidden flex items-center">
      {/* Background Image with Vignette */}
      <div className="absolute inset-0">
        <img 
          src={visionImage} 
          alt="Sunrise over regenerated farmland" 
          className="image-cinematic opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_65%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container">
        <div className="max-w-3xl mx-auto text-center">
          <span className="label-text text-terracotta mb-4 block opacity-0 animate-fade-in">
            Long-Term Vision
          </span>
          <h2 className="headline-section text-foreground mb-12 opacity-0 animate-fade-in-up delay-100">
            We are building climate infrastructure for decades, not cycles.
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16 opacity-0 animate-fade-in-up delay-200">
            <div className="p-6 bg-background/60 backdrop-blur-sm border border-border/50 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-secondary/60 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🌍</span>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">Multi-Pathway Platform</h3>
              <p className="text-sm text-muted-foreground">
                Multiple CDR approaches, each proven before scaled
              </p>
            </div>

            <div className="p-6 bg-background/60 backdrop-blur-sm border border-border/50 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-secondary/60 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🌱</span>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">Rooted in Land</h3>
              <p className="text-sm text-muted-foreground">
                Built on physical reality, not financial abstraction
              </p>
            </div>

            <div className="p-6 bg-background/60 backdrop-blur-sm border border-border/50 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-secondary/60 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">⏳</span>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">Designed for Decades</h3>
              <p className="text-sm text-muted-foreground">
                Permanence in carbon, permanence in commitment
              </p>
            </div>
          </div>

          <p className="font-display text-2xl font-bold text-foreground italic pt-8 border-t border-border/50 opacity-0 animate-fade-in-up delay-300">
            "ClimeGrove will still be here in 20 years — because the work takes that long."
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
