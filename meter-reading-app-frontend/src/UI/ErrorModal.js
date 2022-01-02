import style from "./ErrorModal.module.css";
import ReactDOM from "react-dom";
import Button from "./Button";

const CoverElement = () => {
  return <div className={style.coverElement}></div>;
};

const Modal = (props) => {
  function clickHandler() {
    props.onAccept();
  }
  return (
    <div className={style.errorModal}>
      <header>
        <h2>{props.title}</h2>
      </header>
      <div>{props.message}</div>
      <footer>
        <Button onClick={clickHandler}>Accept</Button>
      </footer>
    </div>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <CoverElement />,
        document.getElementById("cover-element-root")
      )}
      {ReactDOM.createPortal(
        <Modal onAccept={props.onAccept} title={props.title} message={props.message}/>,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default ErrorModal;
