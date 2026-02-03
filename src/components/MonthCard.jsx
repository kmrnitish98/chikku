import { motion } from 'framer-motion';

const MonthCard = ({ data, index, align = 'left' }) => {
    const isLeft = align === 'left';

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, x: isLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`relative flex flex-col items-center ${isLeft ? 'md:items-end' : 'md:items-start md:ml-auto'} w-full md:w-1/2 p-4`}
        >
            <div className={`relative group w-full max-w-[400px] p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-xl hover:shadow-2xl hover:bg-white/10 transition-all duration-300 ${isLeft ? 'md:mr-8' : 'md:ml-8'}`}>

                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

                <div className="relative">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 text-xs font-semibold tracking-wider text-pink-200 uppercase bg-pink-500/20 rounded-full">
                            {data.month}
                        </span>
                        <span className="text-2xl">{data.icon}</span>
                    </div>

                    {/* Image */}
                    <div className="relative h-72 mb-4 overflow-hidden rounded-xl">
                        <motion.img
                            initial={{ scale: 1.15 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                            src={data.image}
                            alt={data.title}
                            loading="lazy"
                            className="object-cover object-top w-full h-full transform transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                        <div className="absolute bottom-0 left-0 p-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-xl font-bold text-white drop-shadow-md">{data.title}</h3>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed">
                        {data.description}
                    </p>

                    {/* Year Badge */}
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-dark rounded-full flex items-center justify-center border-2 border-primary/50 text-[10px] font-bold text-primary shadow-lg z-10">
                        {data.year}
                    </div>
                </div>
            </div>

            {/* Connector Dot for Desktop */}
            <div className={`hidden md:block absolute top-1/2 w-4 h-4 bg-primary rounded-full border-4 border-dark z-20 shadow-[0_0_15px_rgba(255,77,109,0.5)] ${isLeft ? '-right-2 translate-x-1/2' : '-left-2 -translate-x-1/2'}`}></div>

        </motion.div>
    );
};

export default MonthCard;
