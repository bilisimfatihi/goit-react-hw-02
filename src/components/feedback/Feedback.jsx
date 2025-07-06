import styles from "./Feedback.module.css";

function Feedback({ feedbacks, totalFeedback, positivePercentage }) {
  return (
    <ul className={styles.list}>
      <li>Good: {feedbacks.good}</li>
      <li>Neutral: {feedbacks.neutral}</li>
      <li>Bad: {feedbacks.bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positivePercentage}%</li>
    </ul>
  );
}

export default Feedback;
