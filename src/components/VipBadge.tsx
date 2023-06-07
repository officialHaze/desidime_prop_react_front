import "../styles/VipBadge.css";

interface Props {
  icon: string;
  name: string;
}

export default function VipBadge(props: Props) {
  return (
    <div className="badge-container">
      <div className="badge-icon-wrapper">
        <img src={props.icon} alt="badge" />
      </div>
      <div>{props.name}</div>
    </div>
  );
}
