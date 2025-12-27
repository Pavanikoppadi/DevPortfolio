import { motion } from "framer-motion";

export const VideoSection = () => {
  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-[1100px] mx-auto"
        >
          <div 
            className="relative w-full rounded-[28px] overflow-hidden bg-background-secondary"
            style={{
              aspectRatio: "16 / 9",
              boxShadow: "0 20px 60px -15px rgba(0, 0, 0, 0.5)",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/1nqZAl_skNE?autoplay=1&mute=1&controls=0&loop=1&playlist=1nqZAl_skNE&modestbranding=1&rel=0&showinfo=0"
              title="Portfolio Video"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              frameBorder="0"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
