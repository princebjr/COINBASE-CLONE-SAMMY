
import { Link } from "react-router-dom";

const COLS = [
  {
    heading: "Company",
    links: [
      { label: "About", to: "/learn" },
      { label: "Careers", to: "/learn" },
      { label: "Affiliates", to: "/learn" },
      { label: "Blog", to: "/learn" },
      { label: "Press", to: "/learn" },
      { label: "Security", to: "/learn" },
      { label: "Investors", to: "/learn" },
      { label: "Vendors", to: "/learn" },
      { label: "Legal & privacy", to: "/learn" },
      { label: "Cookie policy", to: "/learn" },
      { label: "Cookie preferences", to: "/learn" },
      { label: "Digital Asset Disclosures", to: "/learn" },
    ],
  },
  {
    heading: "Individuals",
    links: [
      { label: "Buy & sell", to: "/explore" },
      { label: "Earn free crypto", to: "/explore" },
      { label: "Base App", to: "/explore" },
      { label: "Coinbase One", to: "/explore" },
      { label: "Debit Card", to: "/explore" },
    ],
  },
  {
    heading: "Businesses",
    links: [
      { label: "Asset Listings", to: "/explore" },
      { label: "Coinbase Business", to: "/explore" },
      { label: "Payments", to: "/explore" },
      { label: "Commerce", to: "/explore" },
      { label: "Token Manager", to: "/explore" },
    ],
  },
  {
    heading: "Institutions",
    links: [
      { label: "Prime", to: "/explore" },
      { label: "Staking", to: "/explore" },
      { label: "Exchange", to: "/explore" },
      { label: "International Exchange", to: "/explore" },
      { label: "Derivatives Exchange", to: "/explore" },
      { label: "Verified Pools", to: "/explore" },
    ],
  },
  {
    heading: "Developers",
    links: [
      { label: "Developer Platform", to: "/explore" },
      { label: "Base", to: "/explore" },
      { label: "Server Wallets", to: "/explore" },
      { label: "Embedded Wallets", to: "/explore" },
      { label: "Smart Wallets", to: "/explore" },
      { label: "Onramp & Offramp", to: "/explore" },
      { label: "Trade API", to: "/explore" },
      { label: "Data API", to: "/explore" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Help center", to: "/learn" },
      { label: "Contact us", to: "/learn" },
      { label: "Create account", to: "/learn" },
      { label: "ID verification", to: "/learn" },
      { label: "Account information", to: "/learn" },
      { label: "Payment methods", to: "/learn" },
      { label: "Account access", to: "/learn" },
      { label: "Supported crypto", to: "/learn" },
      { label: "Status", to: "/learn" },
    ],
  },
  {
    heading: "Learn",
    links: [
      { label: "Explore", to: "/learn" },
      { label: "Market statistics", to: "/learn" },
      { label: "Coinbase Bytes newsletter", to: "/learn" },
      { label: "Crypto basics", to: "/learn" },
      { label: "Tips & tutorials", to: "/learn" },
      { label: "Crypto glossary", to: "/learn" },
      { label: "Market updates", to: "/learn" },
      { label: "What is Bitcoin?", to: "/learn" },
      { label: "What is crypto?", to: "/learn" },
      { label: "What is a blockchain?", to: "/learn" },
      { label: "How to set up a crypto wallet?", to: "/learn" },
      { label: "How to send crypto?", to: "/learn" },
      { label: "Taxes", to: "/learn" },
    ],
  },
];

function Footer() {
  return (
    <footer style={{ background: "#F3F4F6", borderTop: "1px solid #E5E7EB", marginTop: "auto" }}>
      
      {/* MAIN FOOTER */}
      <div style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "64px 32px 48px",
        display: "flex",
        gap: "60px",
        flexWrap: "wrap"
      }}>

        {/* BRAND */}
        <div style={{ minWidth: "200px" }}>
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", marginBottom: "16px" }}>
            <div style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              background: "#1652F0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "700"
            }}>
              C
            </div>

            <span style={{ fontSize: "18px", fontWeight: "800", color: "#111827" }}>
              Coinbase
            </span>
          </Link>

          <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: "1.6", maxWidth: "180px" }}>
            The most trusted cryptocurrency platform.
          </p>
        </div>

        {/* LINK COLUMNS */}
        <div style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
          gap: "36px"
        }}>
          {COLS.map(({ heading, links }) => (
            <div key={heading}>
              <h4 style={{
                fontSize: "13px",
                fontWeight: "700",
                color: "#111827",
                marginBottom: "16px",
                textTransform: "uppercase"
              }}>
                {heading}
              </h4>

              <ul style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "10px"
              }}>
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      style={{ fontSize: "14px", color: "#4B5563", textDecoration: "none" }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div style={{ borderTop: "1px solid #F3F4F6", background: "#FAFAFA" }}>
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "20px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          gap: "12px"
        }}>

          {/* SOCIAL ICONS */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginRight: "auto" }}>

            {/* X */}
            <div style={iconStyle}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.845L2.25 2.25h6.956l4.257 5.626L18.244 2.25z"/>
              </svg>
            </div>

            {/* Instagram */}
            <div style={iconStyle}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                <path d="M5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
              </svg>
            </div>

            {/* LinkedIn */}
            <div style={iconStyle}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/>
              </svg>
            </div>

            {/* TikTok */}
            <div style={iconStyle}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.321 5.562a5.122 5.122 0 0 1-.868-.074 3.081 3.081 0 0 1-1.144-.428 3.114 3.114 0 0 1-.841-.821 3.097 3.097 0 0 1-.576-1.177A3.122 3.122 0 0 1 15.738.87l-.048-1.133H12.738v14.41a2.307 2.307 0 0 1-.197 1.023 2.292 2.292 0 0 1-.565.823c-.247.233-.535.41-.844.517-.31.108-.63.137-.94.086a2.224 2.224 0 0 1-1.633-.915 2.211 2.211 0 0 1-.44-1.577 2.213 2.213 0 0 1 .44-1.577 2.224 2.224 0 0 1 1.633-.915c.076 0 .151.002.226.007v-2.387c-.15-.012-.3-.018-.452-.018a5.124 5.124 0 0 0-.884.074 5.145 5.145 0 0 0-1.598.489 5.119 5.119 0 0 0-2.16 2.224A5.143 5.143 0 0 0 2.736 14.196a5.213 5.213 0 0 0 1.032 3.071 5.113 5.113 0 0 0 2.16 2.224 5.145 5.145 0 0 0 1.598.489 5.124 5.124 0 0 0 .884.074c.3 0 .597-.013.888-.04a5.108 5.108 0 0 0 1.653-.417 5.121 5.121 0 0 0 2.18-1.842 5.144 5.144 0 0 0 1.115-2.68c.14-.632.197-1.294.169-1.952V8.627c.922.706 2.022 1.236 3.223 1.56.6.16 1.223.256 1.848.288v-2.387a5.122 5.122 0 0 1-.868-.074z"/>
              </svg>
            </div>

          </div>
        </div>

        {/* SEPARATOR */}
        <div style={{ width: "100%", height: "1px", background: "#E5E7EB" }}></div>

        {/* COPYRIGHT */}
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "20px 32px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          flexWrap: "wrap",
          width: "100%"
        }}>
          <span style={{ fontSize: "13px", color: "#9CA3AF" }}>
            © {new Date().getFullYear()} Coinbase
          </span>

          {["Privacy", "Terms", "Cookies", "Accessibility"].map((item) => (
            <span key={item} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ color: "#D1D5DB" }}>|</span>
              <a href="#" style={{ fontSize: "13px", color: "#6B7280", textDecoration: "none" }}>
                {item}
              </a>
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

const iconStyle = {
  width: 34,
  height: 34,
  borderRadius: "50%",
  background: "#F3F4F6",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#374151"
};

export default Footer;

