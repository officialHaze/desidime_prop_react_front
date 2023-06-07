import "../styles/ExtraInfo.css";

interface Props {
  title: string;
  total: number;
  list: string[];
}

function ExtraInfo(props: Props) {
  return (
    <div className="extra-info-container">
      <div>
        {props.title}: {props.total}
      </div>
      <div>{props.list[0]}</div>
    </div>
  );
}

export default ExtraInfo;
