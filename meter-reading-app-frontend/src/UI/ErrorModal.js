import style from "./ErrorModal.module.css";
import Button from "./Button";

const ErrorModal = (props) => {
  function clickHandler() {
    props.onAccept();
  }
  return (
    <>
      <div className={style.coverElement}></div>
      <div className={style.errorModal}>
        <header>
          <h2>{props.title}</h2>
        </header>
        <div>{props.message}</div>
        <footer>
          <Button onClick={clickHandler}>Accept</Button>
        </footer>
      </div>
    </>
  );
};

export default ErrorModal;
