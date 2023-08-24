import moment from "moment/moment";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";

const Counter = ({
  deadline,
  totalTime,
  quizId,
  setForceQuizSubmit,
  regNum,
  interval,
  setStateInterval,
}) => {
  const [timeDelta, setTimeDelta] = useState(0);
  const [ready, setReady] = useState(false);

  const deadlineTimestamp = moment(Date.parse(deadline));
  const currentTimestamp = moment(Date.now());
  const timeDiff = deadlineTimestamp.diff(currentTimestamp);

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
    setForceQuizSubmit,
  }) => {
    if (completed) {
      // Render a completed state
      return "Time's up";
    } else {
      // Render a countdown
      let content = "";
      if (minutes) {
        localStorage.setItem(`totalTime_${regNum}_${quizId}`, minutes);
        content += `${minutes} মিনিট `;
      } else localStorage.setItem(`totalTime_${regNum}_${quizId}`, 0);
      if (seconds) {
        localStorage.setItem(`seconds_${regNum}_${quizId}`, seconds);
        content += `${seconds} সেকেন্ড `;
      }
      return <span>{content} </span>;
    }
  };

  useEffect(() => {
    const quizIds = [1, 2, 3, 4];
    const storedTime = window.localStorage.getItem(
      `quizTimer_${regNum}_${quizId}`
    );

    if (storedTime) {
      const absenceTime = new Date() - storedTime;
      setTimeDelta(absenceTime);
    } else {
      quizIds.forEach((id) => {
        if (id !== Number(quizId)) {
          window.localStorage.setItem(
            `quizTimer_${regNum}_${id}`,
            Date.now().toString()
          );
        }
      });
    }

    setReady(true);

    return () => {
      window.localStorage.setItem(
        `quizTimer_${regNum}_${quizId}`,
        Date.now().toString()
      );
    };
  }, [regNum, quizId]);

  const handleComplete = () => {
    setForceQuizSubmit(true);
  };

  return (
    <div tabIndex="0" aria-label="Deadline">
      {ready && (
        <Countdown
          date={Date.now() + (timeDiff - timeDelta)}
          renderer={renderer}
          onComplete={handleComplete}
        />
      )}
    </div>
  );
};

export default Counter;
