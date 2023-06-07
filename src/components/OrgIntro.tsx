import "./../styles/ModalCard.css";

export default function OrgIntro() {
  return (
    <>
      <div className="org-logo-wrapper">
        <img
          src="https://cdn0.desidime.com/assets/login_signup_logo-1fd979ef774ca4d8a659efa56dad434d.png"
          alt="desidime logo"
        />
      </div>
      <div className="org-desc">
        Join thousands of savvy shoppers who share the best deals, discount
        coupons & online shopping tips
      </div>
      <div className="know-more-about-org">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          Know more about DesiDime
        </a>
      </div>
    </>
  );
}
