import styles from "../styles/card.module.css";

const IndvCard = (props) => {

  const data = `${props.case}.${props.paper}`;

  return (
      <div>
      <button className={styles.forButton}  style={{'backgroundColor':'white'}}>
        <div className={styles.colFlex2}>
            <img
              className={styles.forImage}
              src={`${data}.template1.photo`}
            />
          <div className={styles.headPtext}>{props.case}</div>
          <p className={styles.pText}>asfbdkjasbdkjas</p>
        </div>
      </button>
    </div>
  );
};

export default IndvCard;
