import gallery01 from "@/assets/gallery-01.jpg";
import gallery02 from "@/assets/gallery-02.jpg";
import gallery03 from "@/assets/gallery-03.jpg";
import gallery04 from "@/assets/gallery-04.jpg";
import gallery05 from "@/assets/gallery-05.jpg";
import gallery06 from "@/assets/gallery-06.jpg";
import gallery07 from "@/assets/gallery-07.jpg";
import gallery08 from "@/assets/gallery-08.jpg";
import gallery09 from "@/assets/gallery-09.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";
import gallery13 from "@/assets/gallery-13.jpg";
import gallery14 from "@/assets/gallery-14.jpg";
import gallery15 from "@/assets/gallery-15.jpg";
import gallery16 from "@/assets/gallery-16.jpg";

const GallerySection = () => {
  const images = [
    { src: "https://iili.io/fkMupja.jpg", caption: "Farmer holding freshly produced biochar" },
    { src: "https://iili.io/fkMuDyF.jpg", caption: "Pyrolysis kiln in operation" },
    { src: "https://iili.io/fkEi4AQ.jpg", caption: "Women farmers applying biochar to fields" },
    { src: "https://iili.io/fkEirHx.jpg", caption: "Crop residue ready for collection" },
    { src: "https://iili.io/fkEiUSj.jpg", caption: "New growth in biochar-enriched soil" },
    { src: "https://iili.io/fkEiScb.jpg", caption: "Biomass transport and logistics" },
    { src: "https://iili.io/fkEi8Ku.jpg", caption: "Soil testing and quality monitoring" },
    { src: "https://iili.io/fe7dutf.jpg", caption: "Aerial view of regenerated farmland" },
    { src: "https://iili.io/fe5y8CB.jpg", caption: "Farming families we work with" },
    { src: "https://iili.io/fe5mnaa.jpg", caption: "Biochar bags ready for distribution" },
    { src: "https://iili.io/fOZpEdb.png", caption: "Seedlings thriving in enriched soil" },
    { src: "https://iili.io/fOZpnqX.png", caption: "Sunset over the fields" },
    { src: "https://iili.io/fOZwmYv.jpg", caption: "Community planning meeting" },
    { src: "https://iili.io/fOZwt4a.jpg", caption: "Biochar texture close-up" },
    { src: "https://iili.io/fOZaE9s.jpg", caption: "Abundant harvest after soil restoration" },
    { src: "https://iili.io/fOZaH8u.jpg", caption: "Healthy, regenerated farmland" },
  ];


  return (
    <section id="gallery" className="relative py-24 md:py-32 overflow-hidden bg-background">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="label-text text-terracotta mb-4 block">Gallery</span>
          <h2 className="headline-section text-foreground mb-6">Watch ClimeGrove at Work</h2>
          <p className="body-large text-muted-foreground">Real moments from the field.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg aspect-square">
              <img src={img.src} alt={img.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="absolute bottom-4 left-4 right-4 text-sm text-foreground">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
