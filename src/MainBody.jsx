import styles from "./MainBody.css";
import Header from "./Header";

function MainBody() {
  const teamMembers = [
    "Team React",
    "Team Java",
    "Team Python",
    "Team TypeScript",
    "Team DotNet",
  ];
  const mapTeamMembers = teamMembers.map((teamMembers) => {
    return (
      <div key={teamMembers} className={styles.team}>
        {teamMembers}
      </div>
    );
  });
  return (
    <div className={styles.mainBody}>
      <div className={styles.main}>{mapTeamMembers}</div>
    </div>
  );
}
export default MainBody;
