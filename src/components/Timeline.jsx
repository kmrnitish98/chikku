import { motion } from 'framer-motion';

const Timeline = () => {
    return (
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2 hidden md:block">
            <motion.div
                className="w-full bg-gradient-to-b from-primary via-secondary to-primary w-[2px] mx-auto shadow-[0_0_10px_#ff4d6d]"
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            ></motion.div>
        </div>
    );
};

export default Timeline;
