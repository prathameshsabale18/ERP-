
import React, { useState } from 'react';
import { MdClose, MdCreditCard, MdCheckCircle } from 'react-icons/md';

const PaymentModal = ({ amount, onClose, onSuccess }) => {
    const [step, setStep] = useState('input'); // input, processing, success
    const [loading, setLoading] = useState(false);

    const handlePay = (e) => {
        e.preventDefault();
        setStep('processing');
        setLoading(true);

        // Simulate payment processing time
        setTimeout(() => {
            setLoading(false);
            setStep('success');
            // Notify parent of success after a brief delay
            setTimeout(() => {
                if (onSuccess) onSuccess();
            }, 2000);
        }, 1500);
    };

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.7)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 1000,
            padding: '16px'
        }}>
            <div style={{
                backgroundColor: 'var(--bg-card)',
                width: '100%', maxWidth: '400px',
                borderRadius: '16px',
                padding: '24px',
                position: 'relative',
                boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                border: '1px solid var(--divider)'
            }}>
                {/* Close Button */}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute', top: '16px', right: '16px',
                        background: 'none', border: 'none', color: 'var(--text-secondary)',
                        fontSize: '24px', cursor: 'pointer'
                    }}
                >
                    <MdClose />
                </button>

                {step === 'input' && (
                    <>
                        <h3 style={{ margin: '0 0 24px 0', fontSize: '20px', textAlign: 'center' }}>Secure Payment</h3>

                        <div style={{ marginBottom: '24px', textAlign: 'center' }}>
                            <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Total Amount</span>
                            <div style={{ fontSize: '32px', fontWeight: 'bold', color: 'var(--accent-blue)' }}>{amount}</div>
                        </div>

                        <form onSubmit={handlePay}>
                            <div style={{ marginBottom: '16px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', color: 'var(--text-secondary)' }}>Card Number</label>
                                <div style={{
                                    display: 'flex', alignItems: 'center',
                                    backgroundColor: 'var(--bg-app)',
                                    border: '1px solid var(--divider)',
                                    borderRadius: '8px',
                                    padding: '0 12px'
                                }}>
                                    <MdCreditCard color="var(--text-secondary)" size={20} />
                                    <input
                                        type="text"
                                        placeholder="0000 0000 0000 0000"
                                        maxLength="19"
                                        required
                                        style={{
                                            width: '100%', padding: '12px', background: 'transparent',
                                            border: 'none', color: 'var(--text-primary)', outline: 'none'
                                        }}
                                    />
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
                                <div style={{ flex: 1 }}>
                                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', color: 'var(--text-secondary)' }}>Expiry</label>
                                    <input
                                        type="text"
                                        placeholder="MM/YY"
                                        maxLength="5"
                                        required
                                        style={{
                                            width: '100%', padding: '12px',
                                            backgroundColor: 'var(--bg-app)', border: '1px solid var(--divider)',
                                            borderRadius: '8px', color: 'var(--text-primary)', outline: 'none'
                                        }}
                                    />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', color: 'var(--text-secondary)' }}>CVV</label>
                                    <input
                                        type="password"
                                        placeholder="123"
                                        maxLength="3"
                                        required
                                        style={{
                                            width: '100%', padding: '12px',
                                            backgroundColor: 'var(--bg-app)', border: '1px solid var(--divider)',
                                            borderRadius: '8px', color: 'var(--text-primary)', outline: 'none'
                                        }}
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                style={{
                                    width: '100%',
                                    padding: '14px',
                                    backgroundColor: 'var(--accent-blue)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '12px',
                                    fontWeight: '500',
                                    fontSize: '16px',
                                    cursor: 'pointer'
                                }}
                            >
                                Pay Now
                            </button>
                        </form>
                    </>
                )}

                {step === 'processing' && (
                    <div style={{ textAlign: 'center', padding: '40px 0' }}>
                        <div className="spinner" style={{
                            width: '40px', height: '40px', border: '3px solid var(--divider)',
                            borderTop: '3px solid var(--accent-blue)', borderRadius: '50%',
                            margin: '0 auto 20px auto',
                            animation: 'spin 1s linear infinite'
                        }} />
                        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
                        <p style={{ color: 'var(--text-secondary)' }}>Processing secure payment...</p>
                    </div>
                )}

                {step === 'success' && (
                    <div style={{ textAlign: 'center', padding: '20px 0' }}>
                        <MdCheckCircle size={64} color="#10b981" style={{ marginBottom: '16px' }} />
                        <h3 style={{ margin: '0 0 8px 0' }}>Payment Successful!</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Transaction ID: TXN-{Math.floor(Math.random() * 1000000)}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PaymentModal;
