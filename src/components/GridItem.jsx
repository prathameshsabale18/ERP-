import React from 'react';

const GridItem = ({ icon, label, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="touch-ripple"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: '8px', /* Reduced gap */
                padding: '12px 4px',
                cursor: 'pointer',
                minHeight: '100px'
            }}
        >
            <div style={{
                color: '#3b82f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '4px'
            }}>
                {/* 
                   We remove strokeWidth as it doesn't always apply to these icon sets directly 
                   and can cause rendering issues. The icons selected are already 'Line' style.
                */}
                {React.cloneElement(icon, {
                    size: 44, // Larger icon
                    color: '#3b82f6'
                })}
            </div>
            <span style={{
                color: '#e2e8f0', // Soft white/grey
                fontSize: '12px', // Smaller text
                textAlign: 'center',
                fontWeight: '400',
                lineHeight: '1.2',
                maxWidth: '100%',
                letterSpacing: '0.01em'
            }}>
                {label}
            </span>
        </div>
    );
};

export default GridItem;
