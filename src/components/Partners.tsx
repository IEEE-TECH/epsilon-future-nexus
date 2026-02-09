import { motion } from 'framer-motion';

const logos = [
    { name: 'Computer Society', src: '/src/assets/cs-logo.png' },
    { name: 'MTTS', src: '/src/assets/mtts-logo.png' },
    { name: 'WIE', src: '/src/assets/wie-logo.png' },
    { name: 'GRSS', src: '/src/assets/grss-logo.svg' },
];

export const Partners = () => {
    return (
        <section className="py-12 border-b border-white/5 bg-black/20 backdrop-blur-sm">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {logos.map((logo, index) => (
                        <motion.div
                            key={logo.name}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="h-12 md:h-16 w-auto flex items-center justify-center"
                        >
                            <img
                                src={logo.src}
                                alt={`${logo.name} Logo`}
                                className="h-full w-auto object-contain brightness-0 invert opacity-80 hover:brightness-100 hover:invert-0 hover:opacity-100 transition-all duration-300"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
