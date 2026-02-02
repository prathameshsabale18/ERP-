import React from 'react';
import { useNavigate } from 'react-router-dom';
import GridItem from '../components/GridItem';
import {
    MdOutlinePerson,
    MdOutlineCreditCard, /* Fees */
    MdOutlineSavings, /* Misc Fees */
    MdOutlineCalendarMonth, /* Holidays */
    MdOutlineAssignment, /* Assignment */
    MdOutlineCampaign, /* Announcement */
    MdOutlineDashboard, /* Bulletin Board */
    MdOutlineLaptopChromebook, /* Assessment */
    MdOutlineMenuBook, /* Syllabus */
    MdOutlineLocalLibrary, /* Library */
    MdOutlineGroups, /* Attendance */
    MdOutlineSchedule, /* Scheduler */
    MdOutlineQrCodeScanner /* Mark Attendance */
} from 'react-icons/md';

const Dashboard = () => {
    const navigate = useNavigate();

    const items = [
        { label: 'Profile', icon: <MdOutlinePerson />, path: '/profile' },
        { label: 'Fees', icon: <MdOutlineCreditCard />, path: '/fees' },
        { label: 'Miscellaneous Fee', icon: <MdOutlineSavings />, path: '/misc-fees' },
        { label: 'Holidays', icon: <MdOutlineCalendarMonth />, path: '/holidays' },
        { label: 'Assignment', icon: <MdOutlineAssignment />, path: '/assignment' },
        { label: 'Announcement', icon: <MdOutlineCampaign />, path: '/announcement' },
        { label: 'Bulletin Board', icon: <MdOutlineDashboard />, path: '/bulletin' },
        { label: 'Student Assessment', icon: <MdOutlineLaptopChromebook />, path: '/assessment' },
        { label: 'Syllabus', icon: <MdOutlineMenuBook />, path: '/syllabus' },
        { label: 'Library', icon: <MdOutlineLocalLibrary />, path: '/library' },
        { label: 'Attendance', icon: <MdOutlineGroups />, path: '/attendance' },
        { label: 'Scheduler', icon: <MdOutlineSchedule />, path: '/scheduler' },
        { label: 'Mark Attendance', icon: <MdOutlineQrCodeScanner />, path: '/mark-attendance' },
    ];

    return (
        <div style={{ padding: '8px', flex: 1, overflowY: 'auto' }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                columnGap: '8px',
                rowGap: '24px',
                marginTop: '32px',
                paddingBottom: '24px'
            }}>
                {items.map((item, index) => (
                    <GridItem
                        key={index}
                        icon={item.icon}
                        label={item.label}
                        onClick={() => navigate(item.path)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
