import { useEffect, useState } from "react";
import Description from "./components/description/Description";
import Options from "./components/options/Options";
import Feedback from "./components/feedback/Feedback";
import Notification from "./components/notification/Notification";

import "./App.css";

function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const data = localStorage.getItem("feedbackData");
    return data ? JSON.parse(data) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("feedbackData", JSON.stringify(feedbacks));
  }, [feedbacks]);
  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      setFeedbacks({ good: 0, neutral: 0, bad: 0 });
    } else {
      setFeedbacks({
        ...feedbacks,
        [feedbackType]: feedbacks[feedbackType] + 1,
      });
    }
  };
  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const positivePercentage =
    totalFeedback > 0 ? Math.round((feedbacks.good / totalFeedback) * 100) : 0;
  return (
    <>
      <Description />

      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />

      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          feedbacks={feedbacks}
          totalFeedback={totalFeedback}
          positivePercentage={positivePercentage}
        />
      )}
    </>
  );
}

export default App;
