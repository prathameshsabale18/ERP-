import React from 'react';

const ProfileField = ({ label, value }) => (
    <div style={{ marginBottom: '20px' }}>
        <div style={{ color: 'var(--accent-blue)', fontSize: '12px', marginBottom: '4px' }}>{label}</div>
        <div style={{ color: 'var(--text-primary)', fontSize: '16px', borderBottom: '1px solid var(--divider)', paddingBottom: '8px' }}>
            {value}
        </div>
    </div>
);

const Profile = () => {
    return (
        <div style={{ padding: '24px 16px', flex: 1, overflowY: 'auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '32px' }}>
                <div style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    backgroundColor: '#333',
                    backgroundImage: 'url("https://randomuser.me/api/portraits/men/32.jpg")',
                    backgroundSize: 'cover',
                    border: '2px solid var(--accent-blue)',
                    marginBottom: '16px'
                }} />
                <h2 style={{ fontSize: '24px', fontWeight: '500' }}>Prathmesh Ramdas</h2>
                <p style={{ color: 'var(--text-secondary)' }}>B.E. E&TC (IEMR)</p>
            </div>

            <div style={{ backgroundColor: 'var(--bg-card)', padding: '16px', borderRadius: '8px' }}>
                <ProfileField label="Full Name" value="Prathmesh Ramdas Sabale" />
                <ProfileField label="Email" value="prathmesh.sabale18@gmail.com" />
                <ProfileField label="Mobile" value="+91 98765 43210" />
                <ProfileField label="PRN" value="72338086E" />
                <ProfileField label="Date of Birth" value="18 Aug 2002" />
                <ProfileField label="Address" value="Pune, Maharashtra, India" />
            </div>
        </div>
    );
};

export default Profile;
