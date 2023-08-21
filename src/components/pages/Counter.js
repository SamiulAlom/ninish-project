import moment from "moment/moment";
import Countdown from "react-countdown";

const Counter = ({ deadline }) => {
  console.log(deadline);
  const deadlineTimestamp = moment(Date.parse(deadline));
  const currentTimestamp = moment(Date.now());
  // const timeDiff = currentTimestamp.diff(deadlineTimestamp);
  const timeDiff = deadlineTimestamp.diff(currentTimestamp);

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return "Time's up";
    } else {
      // Render a countdown
      let content = "";
      if (minutes) {
        content += `${minutes} `;
        if (minutes > 1) content += "minutes ";
        else content += "minute ";
      }
      if (seconds) {
        content += `${seconds} `;
        if (seconds > 1) content += "seconds ";
        else content += "second ";
      }
      return <span>{content} left</span>;
    }
  };

  const handleComplete = () => {
    console.log("here");
  };

  return (
    <div tabIndex="0" aria-label="Deadline">
      <Countdown
        date={Date.now() + timeDiff}
        renderer={renderer}
        onComplete={handleComplete}
      />
    </div>
  );
};

export default Counter;
