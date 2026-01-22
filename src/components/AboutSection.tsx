import { MapPin, Leaf, Target } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
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
              About Us
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedicated to advancing sustainable agriculture in the Gundaroo region and beyond.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                Our Story
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Gundaroo Freshest Zucchini is an established agriculture business
                located in the heart of New South Wales, Australia. We specialise
                in both farming operations and comprehensive agricultural consulting
                services.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our commitment to sustainable farming practices and modern agricultural
                techniques has positioned us as a trusted partner for farmers seeking
                to improve their productivity while maintaining environmental
                responsibility.
              </p>

              <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Our Location</p>
                  <p className="text-sm text-muted-foreground">
                    3873 Sutton Road, Gundaroo NSW 2620, Australia
                  </p>
                </div>
              </div>

              {/* Image below location */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src="/zucchini-harvest.jpg"
                  alt="Fresh zucchini harvest in wooden crate"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid gap-6"
            >
              {/* Image at top */}
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/soil-analysis.jpg"
                  alt="Agriculture consultant examining soil"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Sustainable Practices
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We prioritise environmentally responsible farming methods that
                  preserve soil health and protect local ecosystems for future generations.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-accent/50 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Our Mission
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To deliver expert agricultural solutions that empower farmers
                  to achieve optimal yields while embracing sustainable and
                  innovative farming practices.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
