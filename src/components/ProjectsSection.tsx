import projectsImage from "@/assets/projects-hero.jpg";
import projectRajgarh from "@/assets/project-rajgarh.jpg";
import projectChamoli from "@/assets/project-chamoli.jpg";
import projectPuranpur from "@/assets/project-puranpur.jpg";
import projectDamoh from "@/assets/project-damoh.jpg";
import projectBandhavgarh from "@/assets/project-bandhavgarh.jpg";
import projectUdupi from "@/assets/project-udupi.jpg";
import { useState } from "react";

const ProjectsSection = () => {

const [activeGallery, setActiveGallery] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

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
      },
       images: [
    "https://img.freepik.com/free-photo/lavender-field-sunset-near-valensole_268835-3910.jpg?semt=ais_incoming&w=740&q=80",
    "https://media.istockphoto.com/id/1550071750/photo/green-tea-tree-leaves-camellia-sinensis-in-organic-farm-sunlight-fresh-young-tender-bud.jpg?s=612x612&w=0&k=20&c=RC_xD5DY5qPH_hpqeOY1g1pM6bJgGJSssWYjVIvvoLw=",
    "https://img.freepik.com/free-photo/courage-man-jump-through-gap-hill-business-concept-idea_1323-262.jpg?semt=ais_incoming&w=740&q=80",
    "https://img.freepik.com/free-photo/woman-beach-with-her-baby-enjoying-sunset_52683-144131.jpg?size=626&ext=jpg",
    "https://thumbs.dreamstime.com/b/autumn-nature-landscape-colorful-forest-autumn-nature-landscape-colorful-forest-morning-sunlight-131400332.jpg",
    "https://ik.imagekit.io/serenity/ByteofDev/Blog_Content_Images/tr:f-jpg/speed_up_images_original_R8oje17ew"
  ]
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
},
       images: [
    "https://img.freepik.com/free-photo/lavender-field-sunset-near-valensole_268835-3910.jpg?semt=ais_incoming&w=740&q=80",
    "https://media.istockphoto.com/id/1550071750/photo/green-tea-tree-leaves-camellia-sinensis-in-organic-farm-sunlight-fresh-young-tender-bud.jpg?s=612x612&w=0&k=20&c=RC_xD5DY5qPH_hpqeOY1g1pM6bJgGJSssWYjVIvvoLw=",
    "https://img.freepik.com/free-photo/courage-man-jump-through-gap-hill-business-concept-idea_1323-262.jpg?semt=ais_incoming&w=740&q=80",
    "https://img.freepik.com/free-photo/woman-beach-with-her-baby-enjoying-sunset_52683-144131.jpg?size=626&ext=jpg",
    "https://thumbs.dreamstime.com/b/autumn-nature-landscape-colorful-forest-autumn-nature-landscape-colorful-forest-morning-sunlight-131400332.jpg",
    "https://ik.imagekit.io/serenity/ByteofDev/Blog_Content_Images/tr:f-jpg/speed_up_images_original_R8oje17ew"
  ]
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
      },
       images: [
    "https://img.freepik.com/free-photo/lavender-field-sunset-near-valensole_268835-3910.jpg?semt=ais_incoming&w=740&q=80",
    "https://media.istockphoto.com/id/1550071750/photo/green-tea-tree-leaves-camellia-sinensis-in-organic-farm-sunlight-fresh-young-tender-bud.jpg?s=612x612&w=0&k=20&c=RC_xD5DY5qPH_hpqeOY1g1pM6bJgGJSssWYjVIvvoLw=",
    "https://img.freepik.com/free-photo/courage-man-jump-through-gap-hill-business-concept-idea_1323-262.jpg?semt=ais_incoming&w=740&q=80",
    "https://img.freepik.com/free-photo/woman-beach-with-her-baby-enjoying-sunset_52683-144131.jpg?size=626&ext=jpg",
    "https://thumbs.dreamstime.com/b/autumn-nature-landscape-colorful-forest-autumn-nature-landscape-colorful-forest-morning-sunlight-131400332.jpg",
    "https://ik.imagekit.io/serenity/ByteofDev/Blog_Content_Images/tr:f-jpg/speed_up_images_original_R8oje17ew"
  ]
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
      },
       images: [
    "https://img.freepik.com/free-photo/lavender-field-sunset-near-valensole_268835-3910.jpg?semt=ais_incoming&w=740&q=80",
    "https://media.istockphoto.com/id/1550071750/photo/green-tea-tree-leaves-camellia-sinensis-in-organic-farm-sunlight-fresh-young-tender-bud.jpg?s=612x612&w=0&k=20&c=RC_xD5DY5qPH_hpqeOY1g1pM6bJgGJSssWYjVIvvoLw=",
    "https://img.freepik.com/free-photo/courage-man-jump-through-gap-hill-business-concept-idea_1323-262.jpg?semt=ais_incoming&w=740&q=80",
    "https://img.freepik.com/free-photo/woman-beach-with-her-baby-enjoying-sunset_52683-144131.jpg?size=626&ext=jpg",
    "https://thumbs.dreamstime.com/b/autumn-nature-landscape-colorful-forest-autumn-nature-landscape-colorful-forest-morning-sunlight-131400332.jpg",
    "https://ik.imagekit.io/serenity/ByteofDev/Blog_Content_Images/tr:f-jpg/speed_up_images_original_R8oje17ew"
  ]
    },
    {
      location: "Sitamarhi",
      state: "Uttar Pradesh",
      headline: "Harnessing Mustard for Soil Restoration",
      subhead: "From ash piles to Carbonic Fertilisers",
      description: "In the vast tracts between Prayagraj and Varanasi, mustard stalks are burnt across hundreds of acres. Our project works with farmers to convert this biomass into high-quality biochar that is returned to the soil.",
      image: "https://iili.io/BBJ9bdG.png",
      metrics: {
      biomass: "2,500",
co2: "1,800",
farmers: "3000",
soilArea: "10,280",
treesEquiv: "39,400",
electricityEquiv: "1.90M"
      },
       images: [
    "https://img.freepik.com/free-photo/lavender-field-sunset-near-valensole_268835-3910.jpg?semt=ais_incoming&w=740&q=80",
    "https://media.istockphoto.com/id/1550071750/photo/green-tea-tree-leaves-camellia-sinensis-in-organic-farm-sunlight-fresh-young-tender-bud.jpg?s=612x612&w=0&k=20&c=RC_xD5DY5qPH_hpqeOY1g1pM6bJgGJSssWYjVIvvoLw=",
    "https://img.freepik.com/free-photo/courage-man-jump-through-gap-hill-business-concept-idea_1323-262.jpg?semt=ais_incoming&w=740&q=80",
    "https://img.freepik.com/free-photo/woman-beach-with-her-baby-enjoying-sunset_52683-144131.jpg?size=626&ext=jpg",
    "https://thumbs.dreamstime.com/b/autumn-nature-landscape-colorful-forest-autumn-nature-landscape-colorful-forest-morning-sunlight-131400332.jpg",
    "https://ik.imagekit.io/serenity/ByteofDev/Blog_Content_Images/tr:f-jpg/speed_up_images_original_R8oje17ew"
  ]
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
            Five active project sites across India, each solving local crises while building permanent carbon infrastructure*.
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
  <div className="flex justify-between items-start gap-4">
    
    {/* Left content */}
    <div className="flex-1">
      <h3 className="font-display text-2xl font-bold text-foreground mb-1">
        {project.location}
      </h3>
      <p className="text-terracotta font-medium">
        {project.headline}
      </p>
      <p className="text-sm text-muted-foreground mt-1">
        {project.subhead}
      </p>
    </div>

    {/* Right Gallery Button */}
    {project.images && project.images.length > 0 && (
      <button
        onClick={() => setActiveGallery(project)}
        className="text-sm text-terracotta hover:underline whitespace-nowrap shrink-0 mt-20"
      >
        Gallery
      </button>
    )}
    
  </div>
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

      {/* GLOBAL MODAL */}
{activeGallery && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl p-4 max-w-4xl w-full relative">

      <button
        onClick={() => setActiveGallery(null)}
        className="absolute top-3 right-3 text-black text-xl"
      >
        ✕
      </button>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {activeGallery.images?.map((img, index) => (
          <img
            key={index}
            src={img}
            className="rounded-lg cursor-pointer hover:scale-105 transition"
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
    </div>
  </div>
)}

{/* FULL IMAGE */}
{selectedImage && (
  <div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-[60]"
    onClick={() => setSelectedImage(null)}
  >
    <img
      src={selectedImage}
      className="max-h-[90vh] max-w-[90vw] rounded-lg"
    />
  </div>
)}
    </section>
  );
};

export default ProjectsSection;
