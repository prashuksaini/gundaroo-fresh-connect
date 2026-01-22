import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 items-start">
            {/* Content Columns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src="/logo.jpeg"
                    alt="Gundaroo Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-heading font-semibold">
                    Gundaroo Freshest Zucchini
                  </h3>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
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
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {["About Us", "Our Services", "Expertise", "Contact"].map(
                  (link, index) => (
                    <li key={index}>
                      <a
                        href={`#${link.toLowerCase().replace(" ", "-").replace("our-", "")}`}
                        className="text-white/70 hover:text-white transition-colors inline-block hover:translate-x-1 duration-200"
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
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>3873 Sutton Road</li>
                <li>Gundaroo NSW 2620, Australia</li>
                <li className="pt-2">+61 414 294 611</li>
                <li>Jabal.halal@gmail.com</li>
              </ul>
            </motion.div>

            {/* Map Image on Right - Larger */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:col-span-2 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src="/map.jpeg"
                alt="Location Map"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-8 border-t border-white/20 text-center mt-8"
          >
            <p className="text-sm text-white/60">
              © {currentYear} Gundaroo Freshest Zucchini. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
