import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import PaymentModal from '../components/PaymentModal';

const FeeRow = ({ label, value }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', fontSize: '14px' }}>
        <span style={{ color: 'var(--text-secondary)' }}>{label}</span>
        <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>{value}</span>
    </div>
);

const FeeSection = ({
    title,
    year,
    totalAmount,
    paidAmount,
    payableAmount = "0.0",
    concessionAmount = "0.0",
    isExpanded,
    onToggle,
    showReceipts,
    onPay
}) => {
    const numericPayable = parseFloat(payableAmount.replace(/[^0-9.]/g, ''));

    return (
        <div style={{ marginBottom: '16px' }}>
            {/* Header */}
            <div
                onClick={onToggle}
                className="touch-ripple"
                style={{
                    backgroundColor: 'var(--bg-card)',
                    borderRadius: '8px',
                    padding: '16px',
                    marginBottom: isExpanded ? '16px' : '0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    border: '1px solid var(--divider)'
                }}
            >
                <span style={{ fontSize: '14px', fontWeight: '500', color: '#f8fafc' }}>{title}</span>
                {isExpanded ?
                    <MdExpandLess size={24} color="#3b82f6" /> :
                    <MdExpandMore size={24} color="#3b82f6" />
                }
            </div>

            {/* Content */}
            {isExpanded && (
                <div style={{ padding: '0 8px', marginBottom: '24px' }}>
                    <FeeRow label="Admission Type" value="Institute Level (MS)" />
                    <FeeRow label="Admission Category" value="Open" />
                    <FeeRow label="Fee Structure Year" value={year} />

                    <div style={{ height: '16px', borderBottom: '1px dashed var(--divider)', marginBottom: '16px' }} />

                    <FeeRow label="Total Fees" value={`₹ ${totalAmount}`} />
                    <FeeRow label="Paid Amount" value={`₹ ${paidAmount}`} />
                    <FeeRow label="Concession Given" value={`₹ ${concessionAmount}`} />
                    <FeeRow label="Student Receivable" value="₹ 0.0" />
                    <FeeRow label="Student Payable" value={`₹ ${payableAmount}`} />
                    <FeeRow label="Sponsorship Receivable" value="₹ 0.0" />
                    <FeeRow label="Sponsorship Received" value="₹ 0.0" />

                    <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                        <button
                            onClick={showReceipts}
                            style={{
                                backgroundColor: '#1e293b',
                                color: '#f8fafc',
                                padding: '10px 20px',
                                borderRadius: '20px',
                                fontSize: '13px',
                                border: '1px solid #334155',
                                cursor: 'pointer'
                            }}
                        >
                            Show Receipts
                        </button>

                        {numericPayable > 0 && (
                            <button
                                onClick={() => onPay(payableAmount)}
                                style={{
                                    backgroundColor: 'var(--accent-blue)',
                                    color: 'white',
                                    padding: '10px 24px',
                                    borderRadius: '20px',
                                    fontSize: '13px',
                                    fontWeight: '500',
                                    border: 'none',
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 12px rgba(37,99,235,0.3)'
                                }}
                            >
                                Pay Now
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

const Fees = () => {
    const navigate = useNavigate();
    const [openSection, setOpenSection] = useState('2024-2025');
    const [paymentModal, setPaymentModal] = useState({ open: false, amount: '0' });

    const toggleSection = (id) => {
        if (openSection === id) {
            setOpenSection(null);
        } else {
            setOpenSection(id);
        }
    };

    const handlePay = (amount) => {
        setPaymentModal({ open: true, amount });
    };

    return (
        <div style={{ padding: '16px', flex: 1, overflowY: 'auto', position: 'relative', paddingBottom: '80px' }}>

            <FeeSection
                title="B.E.E&TC (IEMR) 2023-2027 SECOND YEAR"
                year="2024-2025"
                totalAmount="1,05,258.00"
                paidAmount="1,05,258.00"
                payableAmount="0.0"
                isExpanded={openSection === '2024-2025'}
                onToggle={() => toggleSection('2024-2025')}
                showReceipts={() => navigate('/receipts')}
                onPay={handlePay}
            />

            <FeeSection
                title="B.E.E&TC (IEMR) 2023-2027 THIRD YEAR"
                year="2025-26"
                totalAmount="1,05,258.00"
                paidAmount="10,000.00"
                concessionAmount="0.0"
                payableAmount="95,258.00"
                isExpanded={openSection === '2025-2026'}
                onToggle={() => toggleSection('2025-2026')}
                showReceipts={() => navigate('/receipts')}
                onPay={handlePay}
            />

            {/* Floating Button */}
            <div style={{ position: 'fixed', bottom: '24px', right: '16px' }}>
                <button
                    onClick={() => alert('Offline Tokens feature coming soon')}
                    className="touch-ripple"
                    style={{
                        backgroundColor: '#1d4ed8',
                        color: '#fff',
                        padding: '12px 24px',
                        borderRadius: '24px',
                        fontSize: '14px',
                        fontWeight: '500',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    View Offline Tokens
                </button>
            </div>

            {paymentModal.open && (
                <PaymentModal
                    amount={`₹ ${paymentModal.amount}`}
                    onClose={() => setPaymentModal({ ...paymentModal, open: false })}
                    onSuccess={() => {
                        // In a real app, update the fee status here
                        setPaymentModal({ ...paymentModal, open: false });
                    }}
                />
            )}
        </div>
    );
};

export default Fees;
