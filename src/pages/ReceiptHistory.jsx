import React, { useState } from 'react';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

const ReceiptCard = () => {
    const [expanded, setExpanded] = useState(true);

    return (
        <div style={{ backgroundColor: 'var(--bg-card)', borderRadius: '4px', overflow: 'hidden', marginBottom: '16px' }}>
            {/* Header (Always Visible) */}
            <div
                onClick={() => setExpanded(!expanded)}
                style={{ padding: '16px', cursor: 'pointer', borderBottom: expanded ? '1px solid var(--divider)' : 'none' }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Bill No.: DYPIEMR/2024-2025/1011</div>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '4px' }}>Received on: Aug 09, 2024 06:48 PM</div>
                    </div>
                    {expanded ? <MdExpandLess size={24} color="var(--accent-blue)" /> : <MdExpandMore size={24} color="var(--accent-blue)" />}
                </div>
                {!expanded && (
                    <div style={{ marginTop: '12px', textAlign: 'right', fontSize: '14px', color: 'var(--text-secondary)' }}>
                        Amount: ₹ 1,05,258.00
                    </div>
                )}
            </div>

            {/* Expanded Content */}
            {expanded && (
                <div style={{ padding: '16px' }}>
                    <div style={{ textAlign: 'right', marginBottom: '16px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                        Amount: ₹ 1,05,258.00
                    </div>

                    <div style={{ textAlign: 'center', margin: '16px 0', fontSize: '16px', fontWeight: '500' }}>Receipt</div>

                    <div style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '8px' }}>Desc/Remark</div>
                    <div style={{ fontSize: '13px', lineHeight: '1.5', color: 'var(--text-primary)', marginBottom: '24px' }}>
                        Student Name :PRATHMESH RAMDAS SABALE Program Name : B.E. E&TC (IEMR) Batch: 2023-2027, Sr.No :72338086E, Application No. :- Transaction No. FVLUKVKSN8UEGET Payment Gateway Order ID: 11000234173394
                    </div>

                    <div style={{ border: '1px solid var(--divider)', borderRadius: '4px' }}>
                        <div style={{ padding: '12px', borderBottom: '1px solid var(--divider)' }}>Cash/DD/Cheque Details</div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                            <div style={{ padding: '12px', borderBottom: '1px solid var(--divider)', borderRight: '1px solid var(--divider)' }}>Amount</div>
                            <div style={{ padding: '12px', borderBottom: '1px solid var(--divider)', textAlign: 'right' }}>₹ 1,05,258.00</div>

                            <div style={{ padding: '12px', borderBottom: '1px solid var(--divider)', borderRight: '1px solid var(--divider)' }}>Payment mode</div>
                            <div style={{ padding: '12px', borderBottom: '1px solid var(--divider)' }}>Online</div>

                            <div style={{ padding: '12px', borderBottom: '1px solid var(--divider)', borderRight: '1px solid var(--divider)' }}>Chq/DD/Challan No.</div>
                            <div style={{ padding: '12px', borderBottom: '1px solid var(--divider)' }}>FVLUKVKSN8UEGET ( 2024-08-08 )</div>

                            <div style={{ padding: '12px', borderBottom: '1px solid var(--divider)', borderRight: '1px solid var(--divider)' }}>Bank Name</div>
                            <div style={{ padding: '12px', borderBottom: '1px solid var(--divider)' }}>NA</div>

                            <div style={{ padding: '12px', borderBottom: '1px solid var(--divider)', borderRight: '1px solid var(--divider)' }}>Branch</div>
                            <div style={{ padding: '12px', borderBottom: '1px solid var(--divider)' }}>NA</div>

                            <div style={{ padding: '12px', borderRight: '1px solid var(--divider)' }}>Student Fees Receivable</div>
                            <div style={{ padding: '12px', textAlign: 'right' }}>₹ 0.0</div>
                        </div>
                    </div>

                    <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end' }}>
                        <button style={{
                            backgroundColor: '#262A34',
                            color: 'var(--text-primary)',
                            padding: '10px 20px',
                            borderRadius: '20px',
                            fontSize: '14px',
                            border: '1px solid #333'
                        }}>
                            Download Receipt
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

const ReceiptHistory = () => {
    return (
        <div style={{ padding: '16px', flex: 1, overflowY: 'auto' }}>
            <ReceiptCard />
        </div>
    );
};

export default ReceiptHistory;
