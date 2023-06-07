import "../styles/Rank.css";

interface Props {
  icon: string;
  name: string;
}

function Rank(props: Props) {
  return (
    <div className="rank-container">
      <div className="rank-icon-wrapper">
        <img src={props.icon} alt="badge" />
      </div>
      <div className="rank-name">{props.name}</div>
    </div>
  );
}

export default Rank;
