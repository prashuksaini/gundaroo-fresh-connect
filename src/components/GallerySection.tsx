import { motion } from "framer-motion";
import sample1 from "@/assets/sample1.jpeg";
import sample2 from "@/assets/sample2.jpeg";
import sample3 from "@/assets/sample3.jpeg";
import sample4 from "@/assets/sample4.jpeg";
import sample5 from "@/assets/sample5.jpeg";

const galleryItems = [
  {
    id: 1,
    image: sample1,
    title: "Agricultural Field",
    description: "Modern farming techniques in action",
  },
  {
    id: 2,
    image: sample2,
    title: "Crop Management",
    description: "Sustainable crop production methods",
  },
  {
    id: 3,
    image: sample3,
    title: "Farm Operations",
    description: "Professional farm management",
  },
  {
    id: 4,
    image: sample4,
    title: "Team Work",
    description: "Dedicated agricultural professionals",
  },
  {
    id: 5,
    image: sample5,
    title: "Innovation",
    description: "Advanced farming solutions",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our Work
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing our commitment to agricultural excellence and sustainable
              farming practices.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {galleryItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer rounded-xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
