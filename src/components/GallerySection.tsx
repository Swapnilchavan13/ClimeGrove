

const GallerySection = () => {
  const images = [
    { src: "https://i.postimg.cc/k5hQqZ4r/why_bandhavgarh_national_park_banner_img.jpg", caption: "Tigers roaming freely in Bandhavgarh" },
    { src: "https://i.postimg.cc/hG3LcwjK/Whats_App_Image_2026_01_10_at_3_05_05_PM.jpg", caption: "Transporting agricultural residue for biochar making" },
    { src: "https://i.postimg.cc/02bnT2rY/Homepage_Slider3_Rice_Straw.png", caption: "Open-pit biochar production using crop waste" },
    { src: "https://i.postimg.cc/4yYpY1Yh/8981390D_7A7C_4488_9CD7_89C945C51CFB.jpg", caption: "Farmers holding freshly produced biochar" },
    { src: "https://i.postimg.cc/k4Fpjqsk/IMG_7388.jpg", caption: "Processed biochar stored in containers" },
    { src: "https://i.postimg.cc/FFgXYpx2/IMG_7829.jpg", caption: "Bulk biochar ready for soil application" },
    { src: "https://i.postimg.cc/Vk3GgR9d/0F9D9A8C-545B-4B65-B2AE-3CA5C527B854.jpg", caption: "Community demonstration of biochar production" },
    { src: "https://i.postimg.cc/bvYgzk9M/Whats_App_Image_2026_01_09_at_5_54_27_PM_(1).jpg", caption: "Collected agricultural biomass for biochar preparation" },
    { src: "https://i.postimg.cc/PqFWTcxj/Whats_App_Image_2026_01_09_at_5_54_26_PM.jpg", caption: "Farmer holding freshly produced biochar pellets" },
    { src: "https://i.postimg.cc/hG3Lcwjc/E9ACE7A0_8F0E_4555_AD36_6EB8581D2A5A.jpg", caption: "Flame-cone kiln in action for biochar production" },
    { src: "https://i.postimg.cc/Pfy7YfP5/IMG_7828.jpg", caption: "Large biochar heap cooling after production" },
    { src: "https://i.postimg.cc/tTShRc4F/Whats_App_Image_2026_01_09_at_5_54_28_PM.jpg", caption: "Field-scale biochar production activity by farmers" },
    { src: "https://i.postimg.cc/ydXbfsjr/IMG_7218.jpg", caption: "Agricultural residue storage and transport area" },
    { src: "https://i.postimg.cc/RFQDP4dR/IMG_7345.jpg", caption: "Farmers gathered around a biochar production unit" },
    { src: "https://i.postimg.cc/L5JjJVJn/Whats_App_Image_2026_01_09_at_5_54_11_PM.jpg", caption: "Biochar pile ready for storage and soil application" },
    { src: "https://i.postimg.cc/d3pJ5tSv/Homepage_Slider3_Farmers2.png", caption: "Project team and farmers during biochar field demonstration" },
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
