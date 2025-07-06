function Feedback({ feedbacks }) {
  const total = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const positivePercentage =
    total > 0 ? Math.round((feedbacks.good / total) * 100) : 0;
  return (
    <>
      <p>Good: {feedbacks.good}</p>
      <p>Neutral: {feedbacks.neutral}</p>
      <p>Bad: {feedbacks.bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positivePercentage}%</p>
    </>
  );
}

export default Feedback;
