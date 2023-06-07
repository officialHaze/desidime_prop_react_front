import "../styles/Achievment.css";

interface Props {
  type: string;
  received: number;
  icon: string;
  background: string;
}

export default function Achievment(props: Props) {
  return (
    <div className="achievment-container">
      <div className="icon-wrapper" style={{ background: props.background }}>
        <img src={props.icon} alt="icon" />
      </div>
      <div>
        {props.received} {props.type}
      </div>
    </div>
  );
}
