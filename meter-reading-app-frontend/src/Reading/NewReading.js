import { useRef, useState } from "react";
import "./NewReading.css";
import { saveMeter } from "../ServerInterface/MeterInterface";
import ErrorModal from '../UI/ErrorModal';


function validate(meter){
  if(meter.street.length <=0){
    return error("Street mandatory", "The field Street is mandatory");
  }
  if(meter.streetNum.length <=0){
    return error("House Number mandatory", "The House Number field is mandatory");
  }
  if(meter.energy.length <=0){
    return error("Energy mandatory", "The field Energy is mandatory");
  }
}
function error(title, message){
  return {title, message};
}

const NewReading = (props) => {
  const streetRef = useRef();
  const streetNumRef = useRef();
  const energyRef = useRef();
  const [error, setError] = useState(null);

  function submitHandler(event) {
    event.preventDefault();
    const meter = {
      //TODO these variable names are not correct, we are putting those for now but they needs changing
      street: streetRef.current.value,
      streetNum: streetNumRef.current.value,
      energy: energyRef.current.value};
    const validationError = validate(meter);
    if(validationError){
      setError(validationError);
      return;
    }

    streetRef.current.value="";
    streetNumRef.current.value="";
    energyRef.current.value="";

    saveMeter(meter);
    props.onSavedReading();
  }
  function cancelHandler() {
    props.onCancel();
  }

function errorAcceptHandler(){
  setError(null);
}

  return (
    <>
      <form className="new-reading" onSubmit={submitHandler}>
        <div className="street-name">
          <label>Street Name</label>
          <input ref={streetRef} type="text"/>
        </div>
        <div className="street-num">
          <label>House Number</label>
          <input
            type="text"
            ref={streetNumRef}
          />
        </div>
        <div className="street-energy">
          <label>Energy</label>
          <input
            type="number"
            step="1"
            ref={energyRef}
          />
        </div>
        <div className="buttons">
          <button onClick={cancelHandler}>Cancel</button>
          <button type="submit">Save</button>
        </div>
      </form>
      {error && <ErrorModal title={error.title} message={error.message} onAccept={errorAcceptHandler}/>}
    </>
  );
};

export default NewReading;
