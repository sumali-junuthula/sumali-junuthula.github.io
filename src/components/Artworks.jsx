import { motion } from "framer-motion"

const artworks = [
  {
    title: "Cosmic Dream",
    img: "/artworks/cosmic-dream.png",
    description: "a glitch-inspired galaxy rendered in pixel gradients."
  },
  {
    title: "Glitch Phoenix",
    img: "/artworks/glitch-phoenix.png",
    description: "a reborn phoenix made with asymmetric pixel bursts."
  }
];

export default function Artworks() {
  return (
    <section id="artworks" className="py-20 bg-darkblue text-beige font-spacemono">
      <div className="text-center mb-10">
        <h2 className="text-beige text-4xl md:text-5xl glitch-text">artworks</h2>
        <p className="text-lg mt-2 text-blue">where code meets canvas</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        {artworks.map((art, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.2)",
              rotate: 0.5
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-darkblue border border-gray-700 rounded-lg shadow-md overflow-hidden hover:border-beige transition-all duration-300"
          >
            <img src={art.img} alt={art.title} className="w-full h-60 object-cover" />
            <div className="p-4">
              <h3 className="text-yellow text-lg mb-1">{art.title}</h3>
              <p className="text-sm text-beige">{art.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
