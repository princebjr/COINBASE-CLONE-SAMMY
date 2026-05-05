import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import useReveal from '../hooks/useReveal';
import coinbaseLogo from '../assets/coinbase_logo@2x.png';

const ACCOUNT_TYPES = [
  {
    id: 'personal',
    label: 'Personal',
    desc: 'Trade crypto as an individual.',
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <circle cx="19" cy="13" r="7.5" fill="#4A90D9" />
        <path d="M4 34c0-8.284 6.716-15 15-15s15 6.716 15 15" stroke="#4A90D9" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    id: 'business',
    label: 'Business',
    desc: 'Manage teams and portfolios, accept crypto payments, access APIs, and more',
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <circle cx="13" cy="14" r="6.5" fill="#9CA3AF" />
        <circle cx="25" cy="14" r="6.5" fill="#6B7280" />
        <path d="M2 34c0-6.075 4.925-11 11-11" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M36 34c0-6.075-4.925-11-11-11" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    id: 'developer',
    label: 'Developer',
    desc: 'Build onchain using developer tooling.',
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <polygon points="19,3 35,12 35,30 19,39 3,30 3,12" fill="none" stroke="#3B82F6" strokeWidth="1.8" />
        <polygon points="19,10 28,15 28,25 19,30 10,25 10,15" fill="#3B82F6" opacity="0.35" />
        <polygon points="19,16 24,19 24,25 19,28 14,25 14,19" fill="#60A5FA" opacity="0.9" />
      </svg>
    ),
  },
];

function SignUp() {
  const [step, setStep] = useState(1);
  const [accountType, setAccountType] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [hoveredType, setHoveredType] = useState(null);
  const navigate = useNavigate();
  const { register } = useAuth();
  const formRef = useReveal();

  const handleSelectType = (typeId) => {
    setAccountType(typeId);
    setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    setLoading(true);
    try {
      await register(name, email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#fff', display: 'flex', flexDirection: 'column' }}>
      {/* Logo */}
      <div style={{ padding: '22px 28px' }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
          <img src={coinbaseLogo} alt="Coinbase Logo" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
        </Link>
      </div>

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px 24px 48px' }}>
        <div ref={formRef} style={{ width: '100%', maxWidth: '480px' }} className="reveal reveal-fade-up">

          {/* STEP 1: Account type */}
          {step === 1 && (
            <div>
              <h1 style={{ color: '#000', fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: '500', marginBottom: '28px', lineHeight: '1.25', letterSpacing: '-0.025em' }}>
                What kind of account are you creating?
              </h1>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {ACCOUNT_TYPES.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => handleSelectType(type.id)}
                    onMouseEnter={() => setHoveredType(type.id)}
                    onMouseLeave={() => setHoveredType(null)}
                    style={{ display: 'flex', alignItems: 'center', gap: '18px', background: hoveredType === type.id ? '#f3f4f6' : '#fff', border: `1px solid ${hoveredType === type.id ? '#d1d5db' : '#e5e7eb'}`, borderRadius: '12px', padding: '18px 20px', cursor: 'pointer', textAlign: 'left', width: '100%', transition: 'background 0.15s' }}
                  >
                    <div style={{ flexShrink: 0 }}>{type.icon}</div>
                    <div>
                      <p style={{ color: '#000', fontWeight: '700', fontSize: '1rem', margin: '0 0 4px' }}>{type.label}</p>
                      <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: 0, lineHeight: '1.55' }}>{type.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
              <p style={{ textAlign: 'center', marginTop: '28px', fontSize: '0.875rem', color: '#6b7280' }}>
                Already have an account?{' '}
                <Link to="/signin" style={{ color: '#1652F0', fontWeight: '600', textDecoration: 'none' }}>Sign in</Link>
              </p>
            </div>
          )}

          {/* STEP 2: Registration form */}
          {step === 2 && (
            <div>
              <h1 style={{ color: '#000', fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: '800', marginBottom: '8px', letterSpacing: '-0.025em' }}>
                Create your account
              </h1>
              <p style={{ color: '#6b7280', fontSize: '0.9375rem', marginBottom: '28px', lineHeight: '1.55' }}>
                Access all that Coinbase has to offer with a single account.
              </p>

              {error && (
                <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '10px', padding: '12px 16px', marginBottom: '16px', color: '#DC2626', fontSize: '0.875rem', fontWeight: '500' }}>
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Name */}
                <label style={{ display: 'block', color: '#000', fontWeight: '600', fontSize: '0.875rem', marginBottom: '8px' }}>Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  style={{ width: '100%', background: '#fff', border: '1.5px solid #d1d5db', borderRadius: '10px', padding: '14px 16px', color: '#000', fontSize: '0.9375rem', outline: 'none', boxSizing: 'border-box', marginBottom: '14px' }}
                  onFocus={e => { e.target.style.borderColor = '#1652F0'; }}
                  onBlur={e => { e.target.style.borderColor = '#d1d5db'; }}
                />

                {/* Email */}
                <label style={{ display: 'block', color: '#000', fontWeight: '600', fontSize: '0.875rem', marginBottom: '8px' }}>Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  style={{ width: '100%', background: '#fff', border: '1.5px solid #d1d5db', borderRadius: '10px', padding: '14px 16px', color: '#000', fontSize: '0.9375rem', outline: 'none', boxSizing: 'border-box', marginBottom: '14px' }}
                  onFocus={e => { e.target.style.borderColor = '#1652F0'; }}
                  onBlur={e => { e.target.style.borderColor = '#d1d5db'; }}
                />

                {/* Password */}
                <label style={{ display: 'block', color: '#000', fontWeight: '600', fontSize: '0.875rem', marginBottom: '8px' }}>Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Minimum 6 characters"
                  style={{ width: '100%', background: '#fff', border: '1.5px solid #d1d5db', borderRadius: '10px', padding: '14px 16px', color: '#000', fontSize: '0.9375rem', outline: 'none', boxSizing: 'border-box', marginBottom: '14px' }}
                  onFocus={e => { e.target.style.borderColor = '#1652F0'; }}
                  onBlur={e => { e.target.style.borderColor = '#d1d5db'; }}
                />

                <button
                  type="submit"
                  disabled={loading}
                  style={{ width: '100%', background: loading ? '#93A8F4' : '#1652F0', color: '#fff', fontWeight: '700', fontSize: '1rem', padding: '14px', borderRadius: '10px', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', marginBottom: '20px', letterSpacing: '0.01em' }}
                  onMouseEnter={e => { if (!loading) e.currentTarget.style.background = '#1246d6'; }}
                  onMouseLeave={e => { if (!loading) e.currentTarget.style.background = '#1652F0'; }}
                >
                  {loading ? 'Creating account...' : 'Continue'}
                </button>
              </form>

              <p style={{ textAlign: 'center', fontSize: '0.875rem', color: '#6b7280' }}>
                Already have an account?{' '}
                <Link to="/signin" style={{ color: '#1652F0', fontWeight: '600', textDecoration: 'none' }}>Sign in</Link>
              </p>

              <p style={{ textAlign: 'center', fontSize: '0.8125rem', color: '#9ca3af', marginTop: '8px', cursor: 'pointer' }} onClick={() => setStep(1)}>
                ← Change account type
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
