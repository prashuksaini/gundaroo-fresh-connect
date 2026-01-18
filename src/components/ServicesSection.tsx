import {
  Lightbulb,
  TrendingUp,
  Mountain,
  Bug,
  Leaf,
  Beef,
  ClipboardList,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Lightbulb,
    title: "Agriculture Consulting & Advisory",
    description:
      "Expert guidance on farming strategies, market trends, and operational improvements to maximize your agricultural business potential.",
  },
  {
    icon: TrendingUp,
    title: "Crop Productivity Improvement",
    description:
      "Data-driven solutions to enhance crop yields through optimised planting schedules, variety selection, and cultivation techniques.",
  },
  {
    icon: Mountain,
    title: "Soil & Land Management",
    description:
      "Comprehensive soil analysis and land management strategies to maintain soil health and ensure long-term agricultural sustainability.",
  },
  {
    icon: Bug,
    title: "Pest & Disease Management",
    description:
      "Integrated pest management solutions that protect crops while minimising environmental impact and chemical usage.",
  },
  {
    icon: Leaf,
    title: "Sustainable Farming Practices",
    description:
      "Implementation of eco-friendly farming methods including water conservation, organic practices, and biodiversity preservation.",
  },
  {
    icon: Beef,
    title: "Livestock Growth & Nutrition",
    description:
      "Expert advice on animal husbandry, nutrition planning, and livestock health management for optimal growth and productivity.",
  },
  {
    icon: ClipboardList,
    title: "Farm Planning & Modern Techniques",
    description:
      "Strategic farm planning services incorporating modern agricultural technologies and precision farming methodologies.",
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-section-alt">
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
              Our Services
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive agricultural solutions tailored to meet the unique
              needs of modern farmers.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
                >
                  <service.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
