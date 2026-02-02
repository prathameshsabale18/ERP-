import { MdSettings, MdLockReset, MdZoomIn, MdFingerprint, MdDescription, MdBugReport, MdExitToApp, MdExpandMore, MdLightMode } from 'react-icons/md';
import { motion } from 'framer-motion';

const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: <MdLightMode size={24} />, label: 'Theme Mode', hasDropdown: true },
    { icon: <MdLockReset size={24} />, label: 'Reset Password' },
    { icon: <MdZoomIn size={24} />, label: 'Enable Auto-zoom', hasToggle: true, defaultToggle: false },
    { icon: <MdFingerprint size={24} />, label: 'Enable Biometric Login', hasToggle: true, defaultToggle: false },
    { icon: <MdDescription size={24} />, label: 'Licenses' },
    { icon: <MdBugReport size={24} />, label: 'Report Bug' },
    { icon: <MdExitToApp size={24} />, label: 'Logout' },
  ];

  const variants = {
    open: { x: 0 },
    closed: { x: '-100%' },
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
          style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 150 }}
        />
      )}

      {/* Drawer */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="sidebar-drawer"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '80%', /* Mobile typical width */
          maxWidth: '300px',
          height: '100%',
          backgroundColor: 'var(--bg-card)',
          zIndex: 200,
          boxShadow: '2px 0 8px rgba(0,0,0,0.5)',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto'
        }}
      >
        {/* Header */}
        <div style={{ position: 'relative', height: '200px', color: '#fff' }}>
          {/* Banner Image simulation */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            backgroundImage: 'url("https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")',
            backgroundSize: 'cover',
            filter: 'brightness(0.6)'
          }} />

          <div style={{ position: 'absolute', bottom: '20px', left: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{
              width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#ddd',
              backgroundImage: 'url("https://github.com/prathameshsabale18.png")',
              backgroundSize: 'cover',
              border: '2px solid #fff'
            }} />
            <div>
              <div style={{ fontSize: '18px', fontWeight: '500' }}>Prathmesh Ramdas</div>
              <div style={{ fontSize: '12px', opacity: 0.8 }}>prathmesh.sabale18@gmail.com</div>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div style={{ padding: '16px 0', flex: 1 }}>
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="touch-ripple"
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '16px 24px',
                gap: '20px',
                color: 'var(--text-secondary)',
                fontSize: '16px',
                fontWeight: '400',
                cursor: 'pointer'
              }}
            >
              <span style={{ color: 'var(--text-secondary)' }}>{item.icon}</span>
              <span style={{ flex: 1 }}>{item.label}</span>

              {item.hasDropdown && <MdExpandMore size={24} />}
              {item.hasToggle && (
                <div style={{
                  width: '36px', height: '20px',
                  backgroundColor: item.defaultToggle ? 'var(--accent-blue)' : '#555',
                  borderRadius: '10px',
                  position: 'relative'
                }}>
                  <div style={{
                    width: '16px', height: '16px',
                    backgroundColor: '#fff',
                    borderRadius: '50%',
                    position: 'absolute',
                    top: '2px',
                    left: item.defaultToggle ? '18px' : '2px',
                    transition: 'left 0.2s'
                  }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
