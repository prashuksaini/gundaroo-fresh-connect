import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const expertiseAreas = [
  {
    title: "Field Management",
    points: [
      "Crop rotation and diversification planning",
      "Irrigation system optimization",
      "Harvest timing and logistics",
      "Equipment and resource allocation",
    ],
  },
  {
    title: "Crop Analysis",
    points: [
      "Yield prediction and monitoring",
      "Nutrient deficiency identification",
      "Growth stage assessment",
      "Quality control measures",
    ],
  },
  {
    title: "Farmer Advisory",
    points: [
      "One-on-one consultation sessions",
      "Training and skills development",
      "Market access guidance",
      "Business planning support",
    ],
  },
  {
    title: "Sustainable Solutions",
    points: [
      "Carbon footprint reduction",
      "Organic certification guidance",
      "Water conservation strategies",
      "Renewable energy integration",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-20 bg-background">
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
              Our Expertise
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leveraging years of experience to deliver practical, results-driven
              agricultural solutions.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 gap-8"
          >
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-foreground mb-4 pb-3 border-b border-border">
                  {area.title}
                </h3>
                <ul className="space-y-3">
                  {area.points.map((point, pointIndex) => (
                    <motion.li
                      key={pointIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * pointIndex, duration: 0.4 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">
                        {point}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
