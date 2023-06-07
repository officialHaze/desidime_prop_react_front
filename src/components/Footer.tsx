import "../styles/Footer.css";

interface Props {
  email: string | undefined;
}

function Footer(props: Props) {
  return (
    <div>
      <div className="inbox-deals">
        <div>
          <img
            src="https://cdn2.desidime.com/assets/whatsapp_subscribe-02bbff9fd50540e5c200bb905ab98144.png"
            alt="message"
          />
        </div>
        <div>
          <h1 style={{ color: "white", fontWeight: "normal" }}>
            Great Deals in your Inbox
          </h1>
        </div>
        <div>
          <input className="deal-input" defaultValue={props.email} />
          <button className="sub-btn" type="submit">
            Subscribe
          </button>
        </div>
      </div>
      <div style={{ padding: "0.5rem 0", background: "#4d4d4d" }}>
        <div className="browse-list">
          <div className="browse-section">
            <h3>Browse by Section</h3>
            <ul className="browse-list-content">
              <li>
                <a href="/">All Forums</a>
              </li>
              <li>
                <a href="/">All Groups</a>
              </li>
              <li>
                <a href="/">All Coupons</a>
              </li>
              <li>
                <a href="/">Mobile App</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="browse-list">
          <div className="browse-section">
            <h3>Top Stores</h3>
            <ul className="browse-list-content">
              <li>
                <a href="/">Amazon</a>
              </li>
              <li>
                <a href="/">Flipkart</a>
              </li>
              <li>
                <a href="/">Myntra</a>
              </li>
              <li>
                <a href="/">Swiggy</a>
              </li>
              <li>
                <a href="/">McDonald's</a>
              </li>
              <li>
                <a href="/">Ajio</a>
              </li>
              <li>
                <a href="/">Tata Cliq</a>
              </li>
              <li>
                <a href="/">Pepperfry</a>
              </li>
              <li>
                <a href="/">BookMyShow</a>
              </li>
              <li>
                <a href="/" style={{ color: "green" }}>
                  All Stores
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="browse-list">
          <div className="browse-section">
            <h3>Special Occassions</h3>
            <ul className="browse-list-content">
              <li>
                <a href="/">Myntra End of Reason Sale</a>
              </li>
              <li>
                <a href="/">Ajio Big Bold Sale</a>
              </li>
              <li>
                <a href="/" style={{ color: "green" }}>
                  All Festivals
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
