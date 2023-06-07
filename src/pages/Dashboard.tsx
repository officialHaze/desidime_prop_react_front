import { useEffect, useState } from "react";
import authenticate from "../lib/authenticate";
import UserInfo from "../components/UserInfo";
import Achievment from "../components/Achievment";
import { achievmentsData } from "../lib/achievments";
import VipBadge from "../components/VipBadge";
import Rank from "../components/Rank";
import { vipBadgeData } from "../lib/vipBadges";
import { activityBadgesData } from "../lib/activityBadges";
import { ranksData } from "../lib/ranks";
import ExtraInfo from "../components/ExtraInfo";
import { extraInfoData } from "../lib/extraInfoData";
import FavStores from "../components/FavStores";
import RecentTopics from "../components/RecentTopics";
import Activities from "../components/Activities";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import "../styles/Dashboard.css";

interface UserData {
  username: string;
  email: string;
  proPic: string;
  created_on: string;
}

export default function Dashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  useEffect(() => {
    authenticate()
      .then((data) => {
        setIsAuthenticated(true);
        setUserData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return isAuthenticated ? (
    <>
      <Navbar username={userData?.username} proPic={userData?.proPic} />
      <Header />
      <main className="dashboard-main">
        <div className="left-side">
          <UserInfo userData={userData} />
          <div className="achievments">
            {achievmentsData.map((data, i) => {
              return <Achievment key={i} {...data} />;
            })}
          </div>
          <div className="vip-badges-container">
            <h3 style={{ textAlign: "left" }}>VIP BADGES: 0</h3>
            <div className="vip-badges">
              {vipBadgeData.map((data, i) => {
                return <VipBadge key={i} {...data} />;
              })}
            </div>
          </div>
          <div className="activity-badges-container">
            <h3 style={{ textAlign: "left" }}>ACTIVITY BADGES: 0</h3>
            <div className="activity-badges">
              {activityBadgesData.map((data, i) => {
                return <VipBadge key={i} {...data} />;
              })}
            </div>
          </div>
          <div className="ranks-container">
            <h3 style={{ textAlign: "left" }}>RANKS</h3>
            <div className="ranks-badges">
              {ranksData.map((data, i) => {
                return <Rank key={i} {...data} />;
              })}
            </div>
          </div>
          <div className="extra-infos-container">
            {extraInfoData.map((data, i) => {
              return <ExtraInfo key={i} {...data} />;
            })}
          </div>
        </div>

        <div className="right-side">
          <FavStores username={userData?.username} />
          <div className="ad-container">ad</div>
          <RecentTopics />
          <Activities username={userData?.username} />
        </div>
      </main>
      <Footer email={userData?.email} />
    </>
  ) : (
    <>
      <main className="dashboard-main">
        You are not authorized to view this page
      </main>
    </>
  );
}
