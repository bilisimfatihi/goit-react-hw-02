import { useState } from "react";
import Description from "./components/description/Description";
import Options from "./components/options/OPtions";
import Feedback from "./components/feedback/Feedback";

import "./App.css";

function App() {
  const [feedbacks, setFeedbacks] = useState({ good: 0, neutral: 0, bad: 0 });
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

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} />
      <Feedback feedbacks={feedbacks} />
    </>
  );
}

export default App;
