import moment from "moment/moment";
import Countdown from "react-countdown";

const Counter = ({ deadline, totalTime, quizId }) => {
  const deadlineTimestamp = moment(Date.parse(deadline));
  const currentTimestamp = moment(Date.now());
  const timeDiff = deadlineTimestamp.diff(currentTimestamp);

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return "Time's up";
    } else {
      // Render a countdown
      let content = "";
      if (minutes) {
        localStorage.setItem(`totalTime_${quizId}`, minutes);
        content += `${minutes} মিনিট `;
      } else localStorage.setItem(`totalTime_${quizId}`, 0);
      if (seconds) {
        localStorage.setItem(`seconds_${quizId}`, seconds);
        content += `${seconds} সেকেন্ড `;
      } else localStorage.setItem(`seconds_${quizId}`, 0);
      return <span>{content} বাকি</span>;
    }
  };

  const handleComplete = () => {
    console.log(quizId);
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
