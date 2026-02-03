import { motion } from 'framer-motion';

const BirthdayFinale = () => {
    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center justify-center w-full py-20 mt-12 text-center"
        >
            <div className="relative w-full max-w-2xl px-6">
                {/* Animated Background Rays */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-3xl rounded-full animate-pulse"></div>

                <div className="relative z-10 p-10 md:p-14 rounded-[3rem] bg-black/40 border border-white/20 backdrop-blur-2xl shadow-[0_0_80px_rgba(255,77,109,0.4)]">

                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{ repeat: Infinity, duration: 3 }}
                        className="text-7xl mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                    >
                        🎂✨🎁
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-primary to-purple-400 mb-6 leading-tight">
                        Here's to Another<br />Magical Year!
                    </h2>

                    <p className="text-xl md:text-2xl text-pink-100 font-light mb-8 max-w-lg mx-auto leading-relaxed">
                        "May your journey continue to shine brighter with every step. Happy Birthday Chhiku!"
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-bold text-lg shadow-lg hover:shadow-[0_0_30px_rgba(255,77,109,0.6)] transition-all"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        Replay the Journey 🔄
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default BirthdayFinale;
