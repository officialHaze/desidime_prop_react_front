import "../styles/Activities.css";

interface Props {
  username: string | undefined;
}

function Activities({ username }: Props) {
  return (
    <div className="activities-container">
      <div className="users-name">{`${username}'s Activities`}</div>
      <div className="list-of-activities">No Recent Activities</div>
    </div>
  );
}

export default Activities;
