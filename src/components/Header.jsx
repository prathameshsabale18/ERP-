import React from 'react';
import { MdMenu, MdArrowBack } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = ({ title, onMenuClick, showBack = false }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const isDashboard = location.pathname === '/';
    // If we are not on dashboard, we typically show back arrow
    const effectiveShowBack = showBack || !isDashboard;

    return (
        <div style={{
            height: '64px', // Standard Android Toolbar height
            backgroundColor: 'var(--bg-primary)',
            display: 'flex',
            alignItems: 'center',
            padding: '0 16px',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            borderBottom: '1px solid var(--divider)', // Subtle separator
            gap: '24px' // Material guideline gap
        }}>
            {effectiveShowBack ? (
                <button
                    onClick={() => navigate(-1)}
                    className="touch-ripple"
                    style={{
                        padding: '8px',
                        marginLeft: '-8px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <MdArrowBack size={24} color="#e2e8f0" />
                </button>
            ) : (
                <button
                    onClick={onMenuClick}
                    className="touch-ripple"
                    style={{
                        padding: '8px',
                        marginLeft: '-8px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <MdMenu size={28} color="#e2e8f0" />
                </button>
            )}

            <div style={{
                flex: 1,
                fontSize: '20px',
                fontWeight: '500',
                color: '#f8fafc',
                letterSpacing: '0.01em'
            }}>
                {title}
            </div>

            {isDashboard && (
                <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: '#334155',
                    backgroundImage: 'url("https://randomuser.me/api/portraits/men/32.jpg")',
                    backgroundSize: 'cover',
                    border: '1px solid var(--divider)',
                    cursor: 'pointer'
                }} onClick={() => navigate('/profile')} />
            )}
        </div>
    );
};

export default Header;
