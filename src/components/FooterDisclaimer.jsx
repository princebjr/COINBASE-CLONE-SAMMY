function FooterDisclaimer() {
  return (
    <div style={{
      background: '#F9FAFB',
      borderTop: '1px solid #E5E7EB',
      padding: '20px 24px',
      textAlign: 'center',
    }}>
      <p style={{ fontSize: '0.8125rem', color: '#6B7280', margin: '0 0 6px', fontWeight: '600' }}>
        🎓 Academic Demo Project
      </p>
      <p style={{ fontSize: '0.75rem', color: '#9CA3AF', margin: 0, lineHeight: '1.6', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
        This is a student project built for DCIT 323 – MULTIMEDIA AND WEB DESIGN.
        It is not affiliated with, endorsed by, or connected to Coinbase Inc. in any way.
        All branding is used purely for educational purposes.
        <strong> Do not enter real passwords, financial information, or personal data.</strong>
      </p>
    </div>
  );
}

export default FooterDisclaimer;
