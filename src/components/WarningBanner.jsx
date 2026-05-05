function WarningBanner() {
  return (
    <div style={{
      background: '#FEF3C7',
      borderBottom: '1px solid #F59E0B',
      padding: '10px 24px',
      textAlign: 'center',
      fontSize: '0.875rem',
      color: '#92400E',
      fontWeight: '500',
    }}>
      ⚠️ <strong>Student Project</strong> — This is a demo crypto app built for academic purposes only.
      It is <strong>not affiliated with Coinbase Inc.</strong> Do not enter real personal or financial information.
    </div>
  );
}

export default WarningBanner;
