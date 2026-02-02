import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Fees from './pages/Fees';
import ReceiptHistory from './pages/ReceiptHistory';
import Profile from './pages/Profile';
import { MdConstruction } from 'react-icons/md';

const UnderConstruction = ({ title }) => (
  <div style={{
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--text-secondary)',
    gap: '16px'
  }}>
    <MdConstruction size={64} style={{ opacity: 0.5 }} />
    <p>The {title} module is under development.</p>
  </div>
);

const AppContent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const [title, setTitle] = useState('Dashboard');

  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case '/': setTitle('Dashboard'); break;
      case '/profile': setTitle('Profile'); break;
      case '/fees': setTitle('Fees'); break;
      case '/receipts': setTitle('Receipt History'); break;
      case '/misc-fees': setTitle('Miscellaneous Fee'); break;
      case '/holidays': setTitle('Holidays'); break;
      case '/assignment': setTitle('Assignment'); break;
      case '/announcement': setTitle('Announcement'); break;
      case '/bulletin': setTitle('Bulletin Board'); break;
      case '/assessment': setTitle('Student Assessment'); break;
      case '/syllabus': setTitle('Syllabus'); break;
      case '/library': setTitle('Library'); break;
      case '/attendance': setTitle('Attendance'); break;
      case '/scheduler': setTitle('Scheduler'); break;
      case '/mark-attendance': setTitle('Mark Attendance'); break;
      default: setTitle('Student ERP');
    }
  }, [location]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <Header
        title={title}
        onMenuClick={() => setSidebarOpen(true)}
      />

      <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/receipts" element={<ReceiptHistory />} />

          {/* Placeholders for other routes */}
          <Route path="/misc-fees" element={<UnderConstruction title="Miscellaneous Fee" />} />
          <Route path="/holidays" element={<UnderConstruction title="Holidays" />} />
          <Route path="/assignment" element={<UnderConstruction title="Assignment" />} />
          <Route path="/announcement" element={<UnderConstruction title="Announcement" />} />
          <Route path="/bulletin" element={<UnderConstruction title="Bulletin Board" />} />
          <Route path="/assessment" element={<UnderConstruction title="Student Assessment" />} />
          <Route path="/syllabus" element={<UnderConstruction title="Syllabus" />} />
          <Route path="/library" element={<UnderConstruction title="Library" />} />
          <Route path="/attendance" element={<UnderConstruction title="Attendance" />} />
          <Route path="/scheduler" element={<UnderConstruction title="Scheduler" />} />
          <Route path="/mark-attendance" element={<UnderConstruction title="Mark Attendance" />} />
        </Routes>
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
