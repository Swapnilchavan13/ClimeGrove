import projectsImage from "@/assets/projects-hero.jpg";
import projectRajgarh from "@/assets/project-rajgarh.jpg";
import projectChamoli from "@/assets/project-chamoli.jpg";
import projectPuranpur from "@/assets/project-puranpur.jpg";
import projectDamoh from "@/assets/project-damoh.jpg";
import projectBandhavgarh from "@/assets/project-bandhavgarh.jpg";
import projectUdupi from "@/assets/project-udupi.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      location: "Rajgarh",
      state: "Himachal Pradesh",
      headline: "Mountain Resilience",
      subhead: "Transforming apple orchard waste into soil carbon",
      description: "We are creating biochar using orchard prunings from over 100,000 trees — which were earlier getting burnt — transforming agricultural waste into a powerful carbon sequestration tool.",
      image: projectRajgarh,
      metrics: {
        biomass: "4,000",
        co2: "2,000",
        farmers: "2000",
        soilArea: "10000",
        treesEquiv: "32,900",
        electricityEquiv: "1.6M"
      }
    },
   
    {
      location: "Puranpur",
      state: "Uttar Pradesh",
      headline: "Stubble Solution",
      subhead: "Rice straw diverted from burning at scale",
      description: "We are creating biochar using rice-straw from over 5,000 farmers — directly preventing hundreds of tons of PM2.5 from affecting the AQI and improving regional air quality.",
      image: projectPuranpur,
      metrics: {
      biomass: "3,500",
co2: "1,800",
farmers: "5000",
soilArea: "11,400",
treesEquiv: "29,600",
electricityEquiv: "1.45M"

      }
    },
    {
      location: "Damoh",
      state: "Madhya Pradesh",
      headline: "Rice Straw Restoration",
      subhead: "Soy and wheat residue creating soil carbon",
      description: "We are converting rice straw into biochar and working with a cooperative of over 20,000 farmers. This year, we will prevent 300,000 kgs of rice straw from being burnt.",
      image: projectDamoh,
      metrics: {
      biomass: "4,100",
co2: "2,400",
farmers: "20000",
soilArea: "11,920",
treesEquiv: "39,500",
electricityEquiv: "1.94M"

      }
    },
    {
      location: "Bandhavgarh",
      state: "Madhya Pradesh",
      headline: "Buffer Zone Revival",
      subhead: "Forest communities building soil and income",
      description: "We are converting invasive species and rice straw into biochar for the last 2 years. We've covered nearly 10,000 farmers and prevented over 200,000 kgs of rice straw from being burnt.",
      image: projectBandhavgarh,
      metrics: {
      biomass: "3,600",
co2: "2,150",
farmers: "10000",
soilArea: "10,680",
treesEquiv: "35,400",
electricityEquiv: "1.73M"
      }
    }
  ];

  return (
    <section id="projects" className="relative min-h-screen py-24 md:py-32 overflow-hidden">
      {/* Background Image with Lighter Vignette */}
      <div className="absolute inset-0">
        <img 
          src={projectsImage} 
          alt="ClimeGrove project site in the Himalayas" 
          className="image-cinematic opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/35 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,hsl(var(--background)/0.7)_85%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="label-text text-terracotta mb-4 block opacity-0 animate-fade-in">
            On The Ground
          </span>
          <h2 className="headline-section text-foreground mb-6 opacity-0 animate-fade-in-up delay-100">
            ClimeGrove at Work
          </h2>
          <p className="body-large text-muted-foreground opacity-0 animate-fade-in-up delay-200">
            Six active project sites across India, each solving local crises while building permanent carbon infrastructure*.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.location}
              className="bg-background/50 backdrop-blur-sm border border-border/30 rounded-lg overflow-hidden opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 100 + 200}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.location} project site`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-2 py-1 bg-terracotta/90 text-cream text-xs font-medium rounded">
                    {project.state}
                  </span>
                </div>
              </div>

              {/* Header */}
              <div className="p-6 border-b border-border/30">
                <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                  {project.location}
                </h3>
                <p className="text-terracotta font-medium">{project.headline}</p>
                <p className="text-sm text-muted-foreground mt-1">{project.subhead}</p>
              </div>

              {/* Description */}
              <div className="p-6 border-b border-border/30">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Metrics */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-2xl font-bold text-foreground">{project.metrics.biomass}</p>
                    <p className="text-xs text-muted-foreground">tonnes biomass</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-terracotta">{project.metrics.co2}</p>
                    <p className="text-xs text-muted-foreground">tCO₂e removed</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{project.metrics.farmers}</p>
                    <p className="text-xs text-muted-foreground">farmers engaged</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{project.metrics.soilArea}</p>
                    <p className="text-xs text-muted-foreground">hectares nourished</p>
                  </div>
                </div>
                
                {/* Equivalent Impact */}
                <div className="mt-4 pt-4 border-t border-border/30">
                  <p className="text-xs text-muted-foreground mb-2">Equivalent impact:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-secondary/50 rounded text-xs text-secondary-foreground">
                      🌳 {project.metrics.treesEquiv} trees preserved
                    </span>
                    <span className="px-2 py-1 bg-secondary/50 rounded text-xs text-secondary-foreground">
                      ⚡ {project.metrics.electricityEquiv} kWh offset
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      <div className="mt-4 pt-4 border-t border-border/30 flex justify-end">
  <p className="text-xs text-muted-foreground">
    *Numbers include tCO2e removed so far + ongoing removals in FY 2026
  </p>
</div>


      </div>
    </section>
  );
};

export default ProjectsSection;
