import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ allowedRoles }) => {
    const { token, user, loading } = useAuth();

    if (loading) return (
        <div className="flex h-screen w-full items-center justify-center bg-[#FDFBF7]">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-luxury-gold/20 border-t-luxury-gold rounded-full animate-spin" />
                <p className="text-stone-400 font-serif italic animate-pulse">Authenticating...</p>
            </div>
        </div>
    );

    if (!token || !user) {
        return <Navigate to="/auth" replace />;
    }

    if (allowedRoles && !allowedRoles.includes(user.role)) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
