import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const CinematicHome = () => {
    // Dynamic background URL (avoiding hardcoding by checking env, falling back to a cinematic placeholder)
    const bgUrl = import.meta.env.VITE_CINEMATIC_BG_URL || "https://assets.codepen.io/3364143/7btrrd.mp4"; 

    return (
        <div className="relative min-h-screen bg-black overflow-hidden selection:bg-luxury-gold selection:text-white">
            <Navbar />
            
            {/* Cinematic Video Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 z-10 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 z-10"></div>
                
                {/* Check if it's a video or image */}
                {bgUrl.endsWith('.mp4') ? (
                    <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="w-full h-full object-cover opacity-60 scale-105 transform origin-center animate-pulse-slow"
                    >
                        <source src={bgUrl} type="video/mp4" />
                    </video>
                ) : (
                    <img 
                        src={bgUrl} 
                        alt="Cinematic Background" 
                        className="w-full h-full object-cover opacity-60 scale-105"
                    />
                )}
            </div>

            {/* Content Overlay */}
            <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: [0.2, 0.6, 0.2, 1] }}
                    className="max-w-4xl mx-auto"
                >
                    <motion.p 
                        initial={{ opacity: 0, letterSpacing: '0px' }}
                        animate={{ opacity: 1, letterSpacing: '12px' }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="text-luxury-gold text-xs font-bold uppercase mb-8 ml-3"
                    >
                        Welcome To The New Vision
                    </motion.p>
                    
                    <h1 className="text-6xl md:text-8xl font-light text-white uppercase tracking-[8px] md:tracking-[16px] leading-tight mb-8">
                        Man On <br />
                        <span className="font-serif italic font-normal text-luxury-gold mix-blend-screen">Vision</span>
                    </h1>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="h-px w-32 bg-gradient-to-r from-transparent via-luxury-gold to-transparent mx-auto mb-10"
                    ></motion.div>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 1.2 }}
                        className="text-stone-300 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-12 leading-relaxed"
                    >
                        Experience events captured in breathtaking 3D cinematic detail. A temporary masterpiece leading to our grand reveal.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <Link 
                            to="/quote" 
                            className="group relative px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white uppercase tracking-[4px] text-xs font-bold transition-all duration-500 overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                Enter Portal <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/0 via-luxury-gold/20 to-luxury-gold/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default CinematicHome;
