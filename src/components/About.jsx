import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

export default function About() {
  const cards = [
    {
      title: "Artist",
      content: "I’ve been drawing since I could hold a pencil. Art keeps me grounded and imaginative.",
    },
    {
      title: "Engineer",
      content: "I love building tools, especially at the intersection of design, code, and intelligence.",
    },
    {
      title: "Trader",
      content: "Trading combines risk, research, and gut instinct — just like life.",
    },
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-darkblue text-beige">
      <h2 className="text-4xl font-bold font-spacemono text-center mb-12">about me</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <Tilt key={idx} glareEnable={true} glareMaxOpacity={0.1} scale={1.02} transitionSpeed={250}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.2 }}
              className="bg-darkblue rounded-xl p-6 shadow-xl border border-lightbeige hover:shadow-2xl"
            >
              <h3 className="text-xl font-spacemono text-yellow mb-2">{card.title}</h3>
              <p className="text-beige text-sm">{card.content}</p>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
