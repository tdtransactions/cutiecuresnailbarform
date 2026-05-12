'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [countdown, setCountdown] = useState(10);
  const [isGenerated, setIsGenerated] = useState(false);
  const [dates, setDates] = useState({ start: '', end: '' });

  useEffect(() => {
    // Check local storage on mount
    const savedCode = localStorage.getItem('cutiecures_coupon');
    if (savedCode) {
      setCode(savedCode);
      const savedDates = localStorage.getItem('cutiecures_dates');
      if (savedDates) {
        setDates(JSON.parse(savedDates));
      }
      setIsGenerated(true);
      setStep(4);
      setCountdown(15);
    }
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (step === 4 && countdown > 0) {
      timer = setTimeout(() => setCountdown(c => c - 1), 1000);
    } else if (step === 4 && countdown === 0) {
      window.location.href = 'https://cutiecuresnailbarsunnyvale.com';
    }
    return () => clearTimeout(timer);
  }, [step, countdown]);

  const formatPhoneNumber = (value: string) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    if (name === 'phone') {
      value = formatPhoneNumber(value);
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitInfo = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.email) {
      setError('Please fill out all fields');
      return;
    }
    
    // Proceed to confirmation step
    setStep(2);
  };

  const handleConfirm = async () => {
    setLoading(true);
    setError('');
    
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      
      if (!res.ok) throw new Error(data.error || 'Failed to generate code');
      
      setCode(data.code);
      setDates({ start: data.startDate, end: data.endDate });
      localStorage.setItem('cutiecures_coupon', data.code);
      localStorage.setItem('cutiecures_dates', JSON.stringify({ start: data.startDate, end: data.endDate }));
      setStep(3);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container">
      <div className="card">
        <div style={{ textAlign: 'center', marginBottom: '25px', paddingBottom: '25px', borderBottom: '1px solid rgba(209, 122, 134, 0.15)' }}>
          <img 
            src="https://cutiecuresnailbarsunnyvale.com/wp-content/uploads/2026/05/646679576_122110247517244994_8865244738307769827_n-removebg-preview.png" 
            alt="Cutiecures Nail Bar Logo" 
            style={{ height: '80px', maxWidth: '100%', objectFit: 'contain', marginBottom: '10px' }} 
          />
          <h2 style={{ fontSize: '1.1rem', color: 'var(--text-light)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '600', margin: 0 }}>Cutiecures Nail Bar</h2>
        </div>

        {step === 1 && (
          <div className="step-container">
            <div className="card-header">
              <h1>Get Your Discount</h1>
              <p className="subtitle">Enter your details to receive an exclusive coupon for your next visit.</p>
            </div>
            
            {error && <div className="global-error">{error}</div>}
            
            <form onSubmit={handleSubmitInfo}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="form-control" 
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  className="form-control" 
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="form-control" 
                  placeholder="jane@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn">Continue</button>
            </form>
          </div>
        )}

        {step === 2 && (
          <div className="step-container">
            <div className="card-header">
              <h1>Confirm Details</h1>
              <p className="subtitle">Please confirm your information to generate your unique code.</p>
            </div>
            
            {error && <div className="global-error">{error}</div>}
            
            <div className="form-group">
              <label>Name:</label>
              <div style={{ fontSize: '1.1rem' }}>{formData.name}</div>
            </div>
            <div className="form-group">
              <label>Phone:</label>
              <div style={{ fontSize: '1.1rem' }}>{formData.phone}</div>
            </div>
            <div className="form-group">
              <label>Email:</label>
              <div style={{ fontSize: '1.1rem' }}>{formData.email}</div>
            </div>
            
            <div style={{ marginBottom: '20px', padding: '12px', backgroundColor: 'rgba(209, 122, 134, 0.15)', borderRadius: '10px', color: 'var(--primary)', fontWeight: '500', fontSize: '0.95rem', textAlign: 'center', border: '1px solid rgba(209, 122, 134, 0.3)' }}>
              ⚠️ Please remember to <b>screenshot</b> or <b>copy</b> your discount code on the next page!
            </div>
            
            <button onClick={handleConfirm} disabled={loading} className="btn">
              {loading ? (
                <><span className="loading-spinner"></span> Generating...</>
              ) : (
                'Confirm & Get Code'
              )}
            </button>
            <button onClick={() => setStep(1)} disabled={loading} className="btn btn-secondary">
              Back to Edit
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="step-container">
            <div className="card-header">
              <div className="success-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1>Here is your code!</h1>
              <p className="subtitle">Your discount code has been generated successfully.</p>
            </div>
            
            <div className="code-display">
              <span className="code-value">{code}</span>
              {dates.start && dates.end && (
                <div style={{ marginTop: '10px', fontSize: '1rem', color: 'var(--primary)', fontWeight: '500' }}>
                  Hạn sử dụng: {dates.start} - {dates.end}
                </div>
              )}
              <span className="code-hint" style={{ color: 'var(--error)', fontWeight: 'bold', display: 'block', marginTop: '15px' }}>⚠️ Please screenshot or copy this code now!</span>
            </div>
            
            <button 
              onClick={() => { setStep(4); setCountdown(15); }} 
              className="btn"
            >
              I have saved the code
            </button>
          </div>
        )}

        {step === 4 && (
          <div className="step-container">
            <div className="card-header">
              {isGenerated ? (
                <div className="success-icon" style={{ backgroundColor: 'var(--error)' }}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
              ) : (
                <div className="success-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
              <h1>{isGenerated ? 'Notice' : 'Thank You!'}</h1>
              <p className="subtitle">
                {isGenerated 
                  ? 'You have already generated a discount code and cannot create another one.' 
                  : 'Thank you for saving the code. See you at the salon!'}
              </p>
            </div>
            
            <button 
              onClick={() => window.location.href = 'https://cutiecuresnailbarsunnyvale.com'} 
              className="btn"
            >
              Back to Home
            </button>
            
            <div className="redirect-text">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Redirecting automatically in {countdown}s
            </div>

            <div className="terms">
              {dates.end && <div>Hạn dùng đến: {dates.end}</div>}
              One coupon per customer. Cannot be combined with other offers. Please present the code at checkout.
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
