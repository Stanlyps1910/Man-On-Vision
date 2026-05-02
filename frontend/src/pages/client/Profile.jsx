import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Camera, Save, ArrowLeft, ShieldCheck, Key } from 'lucide-react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext';

const API_URL = import.meta.env.VITE_API_URL || "";

export default function Profile() {
    const { user, login } = useAuth();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    useEffect(() => {
        if (user) {
            setFormData(prev => ({
                ...prev,
                firstName: user.firstName || '',
                lastName: user.lastName || '',
                email: user.email || ''
            }));
        }
    }, [user]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const token = localStorage.getItem('token');
            const res = await axios.put(`${API_URL}/api/auth/profile`, {
                name: `${formData.firstName} ${formData.lastName}`.trim()
            }, {
                headers: { 'x-auth-token': token }
            });
            
            // Update local auth state
            const updatedUser = { ...user, ...res.data };
            localStorage.setItem('user', JSON.stringify(updatedUser));
            // Assuming useAuth has a way to update user state, if not we might need to refresh
            toast.success("Profile updated successfully");
        } catch (err) {
            toast.error(err.response?.data?.msg || "Failed to update profile");
        } finally {
            setLoading(false);
        }
    };

    const handleChangePassword = async (e) => {
        e.preventDefault();
        if (formData.newPassword !== formData.confirmPassword) {
            return toast.error("Passwords do not match");
        }
        
        setLoading(true);
        try {
            const token = localStorage.getItem('token');
            await axios.put(`${API_URL}/api/auth/change-password`, {
                currentPassword: formData.currentPassword,
                newPassword: formData.newPassword
            }, {
                headers: { 'x-auth-token': token }
            });
            toast.success("Password changed successfully");
            setFormData(prev => ({ ...prev, currentPassword: '', newPassword: '', confirmPassword: '' }));
        } catch (err) {
            toast.error(err.response?.data?.msg || "Failed to change password");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-[1000px] mx-auto pb-20 animate-in fade-in duration-700">
            <Toaster position="top-right" />
            
            <header className="mb-12 text-left">
                <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck className="text-luxury-gold" size={20} />
                    <span className="text-[10px] font-bold uppercase tracking-[4px] text-luxury-gold">Account Security</span>
                </div>
                <h1 className="text-4xl md:text-5xl uppercase tracking-[8px] font-light text-stone-800 mb-4">Your Profile</h1>
                <div className="h-1 w-20 bg-gradient-to-r from-luxury-gold to-transparent rounded-full"></div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Profile Card */}
                <div className="lg:col-span-1">
                    <div className="glass-card text-center p-8 border-white/60 shadow-xl sticky top-8">
                        <div className="relative w-32 h-32 mx-auto mb-6">
                            <div className="w-full h-full rounded-full bg-gradient-to-br from-stone-800 to-black flex items-center justify-center text-luxury-gold text-4xl font-serif border-4 border-white shadow-lg">
                                {formData.firstName?.charAt(0)}{formData.lastName?.charAt(0)}
                            </div>
                            <button className="absolute bottom-0 right-0 p-2 bg-luxury-gold text-white rounded-full shadow-lg hover:scale-110 transition-transform">
                                <Camera size={16} />
                            </button>
                        </div>
                        <h2 className="text-xl font-bold text-stone-800 mb-1">{formData.firstName} {formData.lastName}</h2>
                        <p className="text-xs text-luxury-text-muted uppercase tracking-widest mb-6">{user?.role || 'Client'}</p>
                        
                        <div className="space-y-4 pt-6 border-t border-black/5 text-left">
                            <div className="flex items-center gap-3 text-stone-600">
                                <Mail size={14} className="text-luxury-gold" />
                                <span className="text-xs truncate">{formData.email}</span>
                            </div>
                            <div className="flex items-center gap-3 text-stone-600">
                                <User size={14} className="text-luxury-gold" />
                                <span className="text-xs uppercase tracking-wider">Member since 2025</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Forms */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Basic Info Form */}
                    <section className="glass-card border-white/60 shadow-xl overflow-hidden">
                        <div className="px-8 py-6 border-b border-black/5 bg-black/[0.02]">
                            <h3 className="text-sm font-bold uppercase tracking-[3px] text-stone-800">Personal Details</h3>
                        </div>
                        <form onSubmit={handleUpdateProfile} className="p-8 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-bold tracking-widest text-stone-400">First Name</label>
                                    <input 
                                        type="text" 
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full bg-stone-50/50 border border-black/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-luxury-gold/20 focus:border-luxury-gold/30 transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-bold tracking-widest text-stone-400">Last Name</label>
                                    <input 
                                        type="text" 
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full bg-stone-50/50 border border-black/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-luxury-gold/20 focus:border-luxury-gold/30 transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase font-bold tracking-widest text-stone-400">Email Address</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    disabled
                                    className="w-full bg-stone-100 border border-black/5 rounded-xl px-4 py-3 text-stone-500 cursor-not-allowed"
                                />
                                <p className="text-[9px] text-stone-400 italic">Email cannot be changed. Contact support if needed.</p>
                            </div>
                            <div className="pt-4">
                                <button 
                                    type="submit" 
                                    disabled={loading}
                                    className="btn-luxury-primary flex items-center gap-2 px-8"
                                >
                                    {loading ? 'Saving...' : <><Save size={16} /> Save Changes</>}
                                </button>
                            </div>
                        </form>
                    </section>

                    {/* Password Change Form */}
                    <section className="glass-card border-white/60 shadow-xl overflow-hidden">
                        <div className="px-8 py-6 border-b border-black/5 bg-black/[0.02] flex justify-between items-center">
                            <h3 className="text-sm font-bold uppercase tracking-[3px] text-stone-800">Security & Password</h3>
                            <Key size={18} className="text-luxury-gold" />
                        </div>
                        <form onSubmit={handleChangePassword} className="p-8 space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase font-bold tracking-widest text-stone-400">Current Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-300" size={16} />
                                    <input 
                                        type="password" 
                                        name="currentPassword"
                                        value={formData.currentPassword}
                                        onChange={handleChange}
                                        placeholder="••••••••"
                                        className="w-full bg-stone-50/50 border border-black/5 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-luxury-gold/20 focus:border-luxury-gold/30 transition-all"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-bold tracking-widest text-stone-400">New Password</label>
                                    <input 
                                        type="password" 
                                        name="newPassword"
                                        value={formData.newPassword}
                                        onChange={handleChange}
                                        placeholder="Min. 8 characters"
                                        className="w-full bg-stone-50/50 border border-black/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-luxury-gold/20 focus:border-luxury-gold/30 transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-bold tracking-widest text-stone-400">Confirm Password</label>
                                    <input 
                                        type="password" 
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className="w-full bg-stone-50/50 border border-black/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-luxury-gold/20 focus:border-luxury-gold/30 transition-all"
                                    />
                                </div>
                            </div>
                            <div className="pt-4">
                                <button 
                                    type="submit" 
                                    disabled={loading || !formData.newPassword}
                                    className="btn-luxury-primary flex items-center gap-2 px-8"
                                >
                                    Update Password
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
}
