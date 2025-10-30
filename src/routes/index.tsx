import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '../pages/guest/Landing';
import GuestLayout from '../layouts/GuestLayout';
import NotFound from '../pages/NotFound';
import Rulebook from '../pages/guest/Rulebook';
import GuestGuideline from '../pages/guest/GuestGuideline';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<GuestLayout><Landing /></GuestLayout>} />
                <Route path="/rulebook" element={<GuestLayout><Rulebook /></GuestLayout>} />
                <Route path="/guest-guidelines" element={<GuestLayout><GuestGuideline /></GuestLayout>} />
                {/* 404 NotFound */}
                <Route path="/*" element={<GuestLayout><NotFound /></GuestLayout>} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;