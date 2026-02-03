import { motion } from 'framer-motion';

const BirthdayHighlight = ({ data }) => {
    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="flex flex-col items-center justify-center w-full py-16 text-center"
        >
            <div className="relative w-full max-w-lg">
                {/* Animated Rings */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping opacity-75"></div>
                <div className="absolute inset-4 rounded-full border-2 border-secondary/20 animate-pulse"></div>

                <div className="relative z-10 p-8 rounded-3xl bg-gradient-to-br from-dark to-primary/10 border border-primary/30 backdrop-blur-xl shadow-[0_0_50px_rgba(255,77,109,0.3)]">
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="text-6xl mb-4"
                    >
                        🎂
                    </motion.div>

                    <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-yellow-400 mb-2">
                        Happy Birthday!
                    </h1>

                    <p className="text-2xl text-pink-200 font-light mb-6 font-handwriting">
                        {data.date}
                    </p>

                    <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                        <img
                            src={data.image}
                            alt="Birthday Celebration"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent mix-blend-overlay"></div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute bottom-0 w-full p-6 text-white"
                        >
                            <p className="text-lg font-medium shadow-black drop-shadow-lg">{data.description}</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default BirthdayHighlight;
