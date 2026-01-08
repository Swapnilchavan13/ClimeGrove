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
      description: "In the apple-growing belt of Himachal, post-harvest pruning waste was routinely burned. ClimeGrove by NettZero established pyrolysis units that convert this biomass into biochar, enriching the terraced orchards while preventing hill fires.",
      image: projectRajgarh,
      metrics: {
        biomass: "850",
        co2: "2,200",
        farmers: "180",
        soilArea: "420",
        treesEquiv: "36,000",
        electricityEquiv: "1.8M"
      }
    },
    {
      location: "Chamoli",
      state: "Uttarakhand",
      headline: "Himalayan Conservation",
      subhead: "Forest floor debris converted to climate action",
      description: "Pine needle litter creates devastating forest fire risk in Uttarakhand. Our collection and conversion program removes this fire hazard while creating biochar for degraded hill agriculture.",
      image: projectChamoli,
      metrics: {
        biomass: "1,200",
        co2: "3,100",
        farmers: "240",
        soilArea: "580",
        treesEquiv: "51,000",
        electricityEquiv: "2.5M"
      }
    },
    {
      location: "Puranpur",
      state: "Uttar Pradesh",
      headline: "Stubble Solution",
      subhead: "Rice straw diverted from burning at scale",
      description: "In the heart of the stubble burning belt, ClimeGrove works with farmer cooperatives to collect post-harvest residue. What once choked Delhi's air now rebuilds regional soil carbon.",
      image: projectPuranpur,
      metrics: {
        biomass: "3,500",
        co2: "9,100",
        farmers: "620",
        soilArea: "1,400",
        treesEquiv: "150,000",
        electricityEquiv: "7.4M"
      }
    },
    {
      location: "Damoh",
      state: "Madhya Pradesh",
      headline: "Dryland Restoration",
      subhead: "Soy and wheat residue creating soil carbon",
      description: "Central India's semi-arid farmlands face declining productivity. Biochar application is reversing decades of soil organic carbon loss, improving water retention in rain-fed agriculture.",
      image: projectDamoh,
      metrics: {
        biomass: "2,100",
        co2: "5,400",
        farmers: "380",
        soilArea: "920",
        treesEquiv: "89,000",
        electricityEquiv: "4.4M"
      }
    },
    {
      location: "Bandhavgarh",
      state: "Madhya Pradesh",
      headline: "Buffer Zone Revival",
      subhead: "Forest-edge communities building soil and income",
      description: "Around the tiger reserve, agricultural margins meet forest edge. Sustainable biomass management creates income alternatives while enriching soils that buffer wildlife corridors.",
      image: projectBandhavgarh,
      metrics: {
        biomass: "1,600",
        co2: "4,150",
        farmers: "290",
        soilArea: "680",
        treesEquiv: "68,000",
        electricityEquiv: "3.4M"
      }
    },
    {
      location: "Udupi",
      state: "Karnataka",
      headline: "Coastal Carbon",
      subhead: "Coconut and areca waste to premium biochar",
      description: "Karnataka's coastal plantations generate abundant husk and frond waste. Our units produce high-quality biochar suited for the region's laterite soils and areca gardens.",
      image: projectUdupi,
      metrics: {
        biomass: "1,800",
        co2: "4,700",
        farmers: "310",
        soilArea: "750",
        treesEquiv: "77,000",
        electricityEquiv: "3.8M"
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
            Six active project sites across India, each solving local crises while building permanent carbon infrastructure.
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
      </div>
    </section>
  );
};

export default ProjectsSection;
