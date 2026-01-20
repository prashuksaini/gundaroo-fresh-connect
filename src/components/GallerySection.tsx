import { useState } from "react";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import { X } from "lucide-react";
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
    category: "Farming",
  },
  {
    id: 2,
    image: sample2,
    title: "Crop Management",
    description: "Sustainable crop production methods",
    category: "Sustainability",
  },
  {
    id: 3,
    image: sample3,
    title: "Farm Operations",
    description: "Professional farm management",
    category: "Operations",
  },
  {
    id: 4,
    image: sample4,
    title: "Team Work",
    description: "Dedicated agricultural professionals",
    category: "Team",
  },
  {
    id: 5,
    image: sample5,
    title: "Innovation",
    description: "Advanced farming solutions",
    category: "Technology",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-28 bg-gradient-to-b from-background via-section-alt to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: "1s" }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="px-6 py-2 bg-gradient-to-r from-primary/30 to-primary/10 border border-primary/40 rounded-full text-sm font-semibold text-primary backdrop-blur-sm">
                Gallery & Highlights
              </span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
              Our <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">Work</span> in Action
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our commitment to agricultural excellence through stunning visuals of our farming operations, sustainable practices, and dedicated team.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -12 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(item.id)}
                className="group cursor-pointer h-80 rounded-2xl overflow-hidden bg-card border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-300 relative"
              >
                {/* Image Container */}
                <div className="relative w-full h-full overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Multi-layer overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Content on hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex flex-col justify-end p-6 text-white"
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ delay: 0.05 }}
                      className="inline-block w-fit px-3 py-1 bg-primary/70 rounded-full text-xs font-semibold mb-3 backdrop-blur-sm"
                    >
                      {item.category}
                    </motion.span>
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-2xl font-heading font-bold mb-2 leading-tight"
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ delay: 0.15 }}
                      className="text-white/90 text-sm leading-relaxed"
                    >
                      {item.description}
                    </motion.p>
                  </motion.div>

                  {/* Floating corner accent */}
                  <motion.div
                    className="absolute top-4 right-4 w-12 h-12 rounded-lg border-2 border-primary/40 group-hover:border-primary/80 transition-colors duration-300"
                    whileHover={{ rotate: 45, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>

                  {/* Click to expand indicator */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="bg-white/20 backdrop-blur-md rounded-full p-4 border border-white/30"
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6v4m12-4h4v4M6 14v4h4m8-4v4h-4" />
                      </svg>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Index counter */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="absolute bottom-4 left-4 text-xs font-bold text-white/40 group-hover:text-primary/60 transition-colors duration-300"
                >
                  0{item.id}/0{galleryItems.length}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-20 text-center"
          >
            <p className="text-lg text-muted-foreground mb-6">
              Want to see more of our work and discuss your agricultural needs?
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(var(--primary), 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              Get in Touch
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />

            {/* Modal Content - Mobile Version */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:hidden"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-h-[95vh] rounded-xl overflow-hidden bg-card shadow-2xl border border-border/50 flex flex-col"
              >
                {/* Image Container - Mobile */}
                <div className="relative w-full flex-1 bg-black overflow-y-auto">
                  <img
                    src={galleryItems.find((item) => item.id === selectedImage)?.image}
                    alt="Expanded view"
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Info overlay - Mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-t from-black/95 via-black/80 to-transparent p-4 w-full"
                >
                  <h3 className="text-xl font-heading font-bold text-white mb-1 line-clamp-2">
                    {galleryItems.find((item) => item.id === selectedImage)?.title}
                  </h3>
                  <p className="text-sm text-white/80 mb-3 line-clamp-2">
                    {galleryItems.find((item) => item.id === selectedImage)?.description}
                  </p>
                  <span className="inline-block px-3 py-1 bg-primary/70 rounded-full text-xs font-semibold text-white backdrop-blur-sm">
                    {galleryItems.find((item) => item.id === selectedImage)?.category}
                  </span>
                </motion.div>

                {/* Close button - Mobile */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-lg border border-white/20 transition-colors duration-300"
                >
                  <X className="w-5 h-5 text-white" />
                </motion.button>

                {/* Navigation indicators - Mobile */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-4 left-4 text-white/70 text-xs font-medium"
                >
                  {selectedImage}/{galleryItems.length}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Modal Content - Desktop Version */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-0 z-50 hidden sm:flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full max-h-[90vh] rounded-2xl overflow-hidden bg-card shadow-2xl border border-border/50"
              >
                {/* Image - Desktop */}
                <img
                  src={galleryItems.find((item) => item.id === selectedImage)?.image}
                  alt="Expanded view"
                  className="w-full h-full object-cover max-h-[80vh]"
                />

                {/* Info overlay - Desktop (over image) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8"
                >
                  <h3 className="text-3xl font-heading font-bold text-white mb-2">
                    {galleryItems.find((item) => item.id === selectedImage)?.title}
                  </h3>
                  <p className="text-white/80 text-lg mb-2">
                    {galleryItems.find((item) => item.id === selectedImage)?.description}
                  </p>
                  <span className="inline-block px-4 py-1 bg-primary/70 rounded-full text-sm font-semibold text-white backdrop-blur-sm">
                    {galleryItems.find((item) => item.id === selectedImage)?.category}
                  </span>
                </motion.div>

                {/* Close button - Desktop */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-6 right-6 z-10 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-lg border border-white/20 transition-colors duration-300"
                >
                  <X className="w-6 h-6 text-white" />
                </motion.button>

                {/* Navigation indicators - Desktop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-6 left-6 text-white/70 text-sm font-medium"
                >
                  {selectedImage}/{galleryItems.length}
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
