import styles from "./Description.module.css";

function Description() {
  return (
    <>
      <div className={styles.desc}>
        <h1>Sip Happens Cafe</h1>
        <p>
          Please leave your feedback about our service by selecting one of the
          options below.
        </p>
      </div>
    </>
  );
}

export default Description;
