import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">
                    G
                  </span>
                </div>
                <div>
                  <h3 className="font-heading font-semibold">
                    Gundaroo Freshest Zucchini
                  </h3>
                </div>
              </div>
              <p className="text-background/70 text-sm leading-relaxed">
                Professional agriculture farming and consulting services
                dedicated to sustainable and productive farming practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {["About Us", "Our Services", "Expertise", "Contact"].map(
                  (link, index) => (
                    <li key={index}>
                      <a
                        href={`#${link.toLowerCase().replace(" ", "-").replace("our-", "")}`}
                        className="text-background/70 hover:text-background transition-colors inline-block hover:translate-x-1 duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>3873 Sutton Road</li>
                <li>Gundaroo NSW 2620, Australia</li>
                <li className="pt-2">+61 2 6236 8888</li>
                <li>info@gundaroozucchini.com.au</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-8 border-t border-background/20 text-center"
          >
            <p className="text-sm text-background/60">
              © {currentYear} Gundaroo Freshest Zucchini. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
