import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Shield, Mail, Lock, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import API_BASE_URL from '../utils/apiConfig';
const logo = "/assets/MOV-logo.png";

const AuthPage = () => {
    const { user, login } = useAuth();
    const [userRole, setUserRole] = useState('client'); // 'client' or 'admin'
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    // Auto-redirect if already logged in
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (user && storedToken) {
            if (user.role === 'admin') navigate('/admin');
            else navigate('/portal');
        }
    }, [user, navigate]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);
        const url = `${API_BASE_URL}/api/auth/login`;
        const body = { email: formData.email, password: formData.password, role: userRole };

        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.msg || 'Something went wrong');

            login(data.user, data.token);
        } catch (err) {
            console.error("Login attempt failed:", err);
            setError(err.message || "An unexpected error occurred during login.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="relative h-screen w-full flex items-center justify-center overflow-hidden selection:bg-[#D4AF37] selection:text-black">
            
            {/* FULL SCREEN 3D CINEMATIC VIDEO BACKGROUND */}
            <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-cover opacity-50 scale-105 transform origin-center"
                >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-ink-swirling-in-water-in-slow-motion-11860-large.mp4" type="video/mp4" />
                </video>
                {/* Gradient Overlays for readability and clean cinematic mood */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black"></div>
            </div>

            {/* FLOATING AUTH CARD */}
            <motion.div 
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.2, 0.6, 0.2, 1] }}
                className="relative z-10 w-full max-w-[420px] mx-4"
            >
                <div className="bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] rounded-[2.5rem] p-8 md:p-10">
                    
                    {/* Logo/Brand */}
                    <div className="mb-8 flex justify-center">
                        <Link to="/" className="flex flex-col items-center gap-3 group">
                            <div className="bg-black/50 p-2 rounded-2xl backdrop-blur-sm border border-white/10 group-hover:bg-black/70 transition-all">
                                <img
                                    src={logo}
                                    alt="Man On Vision Logo"
                                    className="h-12 w-auto object-contain rounded-xl"
                                />
                            </div>
                            <span className="text-xl font-serif font-black tracking-[0.2em] text-white">MAN ON VISION</span>
                        </Link>
                    </div>

                    {/* Role Toggler */}
                    <div className="mb-8">
                        <div className="bg-black/30 p-1.5 rounded-2xl flex relative border border-white/10 backdrop-blur-md">
                            <motion.div
                                className="absolute top-1.5 bottom-1.5 bg-[#D4AF37] rounded-xl shadow-lg"
                                initial={false}
                                animate={{
                                    left: userRole === 'client' ? '6px' : '50%',
                                    width: 'calc(50% - 6px)'
                                }}
                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            />
                            <button
                                onClick={() => setUserRole('client')}
                                className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-[10px] font-black tracking-widest uppercase z-10 transition-colors duration-300 ${userRole === 'client' ? 'text-black' : 'text-white/60 hover:text-white'}`}
                            >
                                <User size={14} strokeWidth={2.5} /> Client
                            </button>
                            <button
                                onClick={() => setUserRole('admin')}
                                className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-[10px] font-black tracking-widest uppercase z-10 transition-colors duration-300 ${userRole === 'admin' ? 'text-black' : 'text-white/60 hover:text-white'}`}
                            >
                                <Shield size={14} strokeWidth={2.5} /> Admin
                            </button>
                        </div>
                    </div>

                    {/* Error Message */}
                    <AnimatePresence>
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mb-6 p-3 bg-red-500/20 border border-red-500/30 backdrop-blur-sm rounded-xl text-red-200 text-[10px] font-semibold flex items-center gap-2"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse shrink-0" />
                                {error}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <label className="text-[9px] font-black tracking-[0.2em] text-white/50 uppercase ml-1">Email Address</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-[#D4AF37] transition-colors" size={16} />
                                <input
                                    type="text"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white text-xs focus:outline-none focus:border-[#D4AF37] focus:bg-black/40 transition-all duration-300 placeholder-white/20"
                                    placeholder="yourname@gmail.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center px-1">
                                <label className="text-[9px] font-black tracking-[0.2em] text-white/50 uppercase">Password</label>
                                <Link to="#" className="text-[9px] font-bold text-white/30 hover:text-[#D4AF37] transition-colors uppercase tracking-widest">Forgot?</Link>
                            </div>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-[#D4AF37] transition-colors" size={16} />
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white text-xs focus:outline-none focus:border-[#D4AF37] focus:bg-black/40 transition-all duration-300 placeholder-white/20"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <motion.button
                            disabled={isSubmitting}
                            whileHover={isSubmitting ? {} : { scale: 1.02 }}
                            whileTap={isSubmitting ? {} : { scale: 0.98 }}
                            className={`w-full ${isSubmitting ? 'bg-white/20 text-white/50' : 'bg-[#D4AF37] text-black hover:bg-[#C5A028] shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]'} py-4 rounded-xl transition-all duration-300 text-[11px] font-black tracking-[0.3em] uppercase flex items-center justify-center gap-3 mt-8`}
                        >
                            {isSubmitting ? 'Authenticating...' : 'Enter Studio'}
                            {!isSubmitting && <ArrowRight size={16} strokeWidth={3} />}
                        </motion.button>
                    </form>

                    <div className="mt-8 text-center text-xs">
                        <p className="text-white/50 font-medium">
                            Don't have an account?
                            <Link to="/quote" className="text-[#D4AF37] font-bold hover:text-white transition-colors ml-2 uppercase tracking-wider text-[10px]">
                                Register
                            </Link>
                        </p>
                    </div>
                </div>
            </motion.div>

        </div>
    );
};

export default AuthPage;
