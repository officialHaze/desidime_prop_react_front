import "../styles/UserInfo.css";

interface Props {
  userData: {
    username: string;
    email: string;
    proPic: string;
    created_on: string;
  } | null;
}

export default function UserInfo({ userData }: Props) {
  return (
    <div className="user-info-container">
      <div className="user-img-wrapper">
        <img
          src="https://cdn1.desidime.com/avatars/default/large/missing.png"
          alt="user profile"
        />
        <div className="rank-badge">
          <img
            src="https://cdn0.desidime.com/cdn-cgi/image/fit=contain,f=auto,q=90,w=80,h=80/rank/enabled/deal-newbie.png"
            alt="rank"
          />
        </div>
      </div>
      <div className="user-details-container">
        <div>
          <h2>{userData?.username}</h2>
        </div>
        <div className="extra-details">
          <div className="user-rank">Deal Newbie</div>
          <div className="user-imp-dates">
            <div>User Since: {userData?.created_on}</div>
            <div>Birthday:</div>
          </div>
          <div className="user-rewards">
            <div>
              <span style={{ fontWeight: "bold" }}>Dimes:</span> 50
            </div>
            <div>
              <span style={{ fontWeight: "bold" }}>Karma:</span> 20
            </div>
          </div>
          <div className="navigation-btn-container">
            <button type="submit">BECOME A FAN</button>
            <button type="submit">EDIT PROFILE </button>
            <button type="submit">KARMA LOG</button>
          </div>
        </div>
      </div>
    </div>
  );
}
