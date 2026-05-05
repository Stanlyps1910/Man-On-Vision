import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, FolderOpen, Lock, CheckCircle, ArrowRight, Sparkles, Calendar, MessageSquare } from "lucide-react";
import { io } from "socket.io-client";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";

export default function Home() {
    const [user, setUser] = useState(null);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    const { user: authUser } = useAuth();
    const userId = authUser?.id || authUser?._id;

    const fetchDashboardData = async () => {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                const [userRes, bookingsRes] = await Promise.all([
                    axios.get(`${import.meta.env.VITE_API_URL || ""}/api/auth/me`, {
                        headers: { 'x-auth-token': token }
                    }),
                    axios.get(`${import.meta.env.VITE_API_URL || ""}/api/leads/my-bookings`, {
                        headers: { 'x-auth-token': token }
                    })
                ]);
                setUser(userRes.data);
                setBookings(bookingsRes.data);
            }
        } catch (err) {
            console.error("Failed to fetch dashboard data", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDashboardData();
    }, []);

    // Socket Listener for Real-time Lead Updates
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (userId && token) {
            const socket = io(import.meta.env.VITE_API_URL || "", { 
                auth: { token }
            });

            socket.emit("join_chat", userId); // Join personal room

            socket.on("lead_updated", (data) => {
                console.log("🔔 Lead Status Updated:", data);
                toast.success(`Your booking status for ${data.name || 'event'} has been updated to ${data.status}!`, {
                    icon: '🚀',
                    duration: 5000,
                    style: {
                        background: '#1C1C1C',
                        color: '#fff',
                        borderRadius: '12px',
                        fontSize: '12px',
                        textTransform: 'uppercase',
                        tracking: '1px'
                    }
                });
                fetchDashboardData(); // Re-fetch to show new status
            });

            return () => socket.disconnect();
        }
    }, [userId]);

    const getStatusColor = (status) => {
        switch (status) {
            case 'New': return 'text-blue-500 bg-blue-50';
            case 'Follow-up': return 'text-amber-500 bg-amber-50';
            case 'Meeting': return 'text-purple-500 bg-purple-50';
            case 'Converted': return 'text-green-500 bg-green-50';
            default: return 'text-stone-400 bg-stone-50';
        }
    };

    return (
        <div id="home" className="animate-fade-up max-w-[1000px] mx-auto pb-20 space-y-12">
            {/* Top Banner: Hero */}
            <section className="relative h-[300px] md:h-[350px] w-full rounded-[40px] overflow-hidden shadow-2xl group bg-stone-900 border border-white/10">
                {/* Background Image on Right */}
                <div className="absolute inset-y-0 right-0 w-full md:w-3/4">
                    <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-[3000ms] group-hover:scale-110"
                        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/60 to-transparent" />
                </div>
                
                {/* Left Side Content Area */}
                <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/95 to-transparent z-10 w-full md:w-2/3" />
                
                {/* Soft Warm Top Light Overlay */}
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#fcd34d]/10 rounded-full blur-[100px] pointer-events-none mix-blend-overlay z-20" />

                <div className="relative z-30 h-full flex flex-col justify-center px-8 md:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-bold mb-6 block drop-shadow-sm">
                            The Studio Experience
                        </span>
                        
                        <h1 className="text-4xl md:text-[56px] text-white mb-10 uppercase tracking-tight font-light leading-[1] drop-shadow-md">
                            Welcome,<br />
                            <span className="font-bold text-luxury-gold">{user?.firstName || "Client"}</span>
                        </h1>
                        
                        <Link to="/portal/gallery" className="w-fit inline-flex items-center gap-4 bg-white text-stone-900 hover:bg-luxury-gold hover:text-white px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-500 shadow-xl group">
                            Explore Collections <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Booking Status Section */}
            <section className="space-y-6">
                <div className="flex items-end justify-between px-2">
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-[4px] text-stone-800">Reservation Status</h3>
                        <p className="text-[10px] text-stone-400 uppercase tracking-widest mt-1">Live Tracking</p>
                    </div>
                    <Link to="/quote" className="text-[10px] font-bold uppercase tracking-widest text-luxury-gold hover:underline">New Request +</Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {loading ? (
                        [1, 2].map(n => <div key={n} className="h-32 glass-card animate-pulse border-white/60" />)
                    ) : bookings.length > 0 ? (
                        bookings.map((booking) => (
                            <motion.div 
                                key={booking._id}
                                whileHover={{ y: -5 }}
                                className="glass-card border-white/60 shadow-lg p-6 flex items-center justify-between group"
                            >
                                <div className="flex items-center gap-5">
                                    <div className="icon-wrapper !w-12 !h-12 border-luxury-gold/20 bg-luxury-gold/5 group-hover:bg-luxury-gold/10 transition-colors">
                                        <Calendar size={18} className="text-luxury-gold" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-stone-800 text-sm tracking-tight">{booking.eventType || 'Event'}</h4>
                                        <p className="text-[10px] text-stone-400 font-medium uppercase tracking-widest mt-0.5">
                                            {booking.eventDate ? new Date(booking.eventDate).toLocaleDateString() : 'Date TBD'}
                                        </p>
                                    </div>
                                </div>
                                <div className={`px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest ${getStatusColor(booking.status)} shadow-sm border border-black/5`}>
                                    {booking.status}
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <div className="md:col-span-2 glass-card border-dashed border-stone-200 p-12 text-center">
                            <Quote size={32} className="mx-auto text-stone-200 mb-4" />
                            <p className="text-stone-400 italic text-sm">No active booking requests found.</p>
                            <Link to="/quote" className="inline-block mt-4 text-[10px] font-bold uppercase tracking-widest text-luxury-gold">Submit a Request</Link>
                        </div>
                    )}
                </div>
            </section>
            
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Testimonials />
                <ChatCTA />
            </div>
        </div>
    );
}

function ChatCTA() {
    return (
        <div className="glass-card hover-lift flex flex-col items-start text-left bg-gradient-to-br from-white/80 to-luxury-gold/5">
            <div className="icon-wrapper mb-8">
                <MessageSquare size={24} strokeWidth={1.5} className="text-luxury-gold" />
            </div>
            <h3 className="text-sm uppercase tracking-[4px] text-stone-800 font-bold mb-6">Studio Concierge</h3>
            <p className="text-stone-500 mb-10 leading-relaxed italic text-sm">
                Need help with your collection or want to discuss details? Our concierge is here for you.
            </p>
            <Link to="/portal/chats" className="btn-luxury-primary w-full flex items-center justify-center gap-3 mt-auto">
                Open Chat <ArrowRight size={14} />
            </Link>
        </div>
    );
}



function Testimonials() {
    return (
        <div className="glass-card hover-lift flex flex-col items-start text-left">
            <div className="icon-wrapper mb-8">
                <Quote size={24} strokeWidth={1.5} className="text-luxury-gold" />
            </div>
            <h3 className="text-sm uppercase tracking-[4px] text-luxury-gold font-bold mb-6">A Legacy of Love</h3>
            <blockquote className="text-xl md:text-2xl italic font-light leading-[1.6] mb-10 text-stone-700">
                "Man On Vision captured more than just scenes; they captured the <span className="font-bold">stolen glances</span> and breathless moments."
            </blockquote>
            <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-ivory border border-luxury-gold/20 flex items-center justify-center font-serif text-luxury-gold text-xs">MA</div>
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-stone-800">Meghna & Arjun</p>
                    <p className="text-[9px] text-luxury-text-muted uppercase tracking-widest">Villa Experience, 2025</p>
                </div>
            </div>
        </div>
    );
}

function CTA() {
    return (
        <div className="glass-card !p-8 md:!p-16 text-left overflow-hidden relative group rounded-3xl border-white/60">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-luxury-gold/5 rounded-full -mr-32 -mt-32 blur-[80px] group-hover:bg-luxury-gold/10 transition-all duration-1000"></div>
            <div className="relative z-10 flex flex-col items-start w-full">
                <div className="px-4 py-1.5 bg-luxury-gold/10 text-luxury-gold text-[9px] font-bold uppercase tracking-[4px] rounded-full mb-8">
                    Limited Availability
                </div>
                <h3 className="text-4xl md:text-5xl font-light mb-6 tracking-tight leading-none italic uppercase text-stone-800">Preserve Your Legacy</h3>
                <p className="text-lg text-luxury-text-muted font-light mb-12 max-w-2xl leading-relaxed italic">
                    Our bookings for the 2026/27 season are closing soon. Let's start planning the most beautiful day of your life.
                </p>
                <Link to="/portal/chats" className="btn-luxury-primary !px-12 flex items-center gap-4 group">
                    Message The Studio <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </Link>
            </div>
        </div>
    );
}
