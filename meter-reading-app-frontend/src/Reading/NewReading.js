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
  const [street, setStreet] = useState("");
  const [streetNum, setStreetNum] = useState("");
  const [energy, setEnergy] = useState("");
  const [error, setError] = useState(null);

  function submitHandler(event) {
    event.preventDefault();
    const meter = {
      //TODO these variable names are not correct, we are putting those for now but they needs changing
      street,
      streetNum,
      energy,};
    const validationError = validate(meter);
    if(validationError){
      setError(validationError);
      return;
    }
    setStreet("");
    setStreetNum("");
    setEnergy("");
    saveMeter(meter);
    props.onSavedReading();
  }
  function cancelHandler() {
    props.onCancel();
  }
 

  function streetChangeHandler(event) {
    setStreet(event.target.value);
  }
  function streetNumChangeHandler(event) {
    setStreetNum(event.target.value);
  }
  function energyChangeHandler(event) {
    setEnergy(event.target.value);
  }

function errorAcceptHandler(){
  setError(null);
}

  return (
    <div>
      <form className="new-reading" onSubmit={submitHandler}>
        <div className="street-name">
          <label>Street Name</label>
          <input value={street} type="text" onChange={streetChangeHandler} />
        </div>
        <div className="street-num">
          <label>House Number</label>
          <input
            type="text"
            value={streetNum}
            onChange={streetNumChangeHandler}
          />
        </div>
        <div className="street-energy">
          <label>Energy</label>
          <input
            type="number"
            value={energy}
            onChange={energyChangeHandler}
            step="1"
          />
        </div>
        <div className="buttons">
          <button onClick={cancelHandler}>Cancel</button>
          <button type="submit">Save</button>
        </div>
      </form>
      {error && <ErrorModal title={error.title} description={error.description} onAccept={errorAcceptHandler}/>}
    </div>
  );
};

export default NewReading;
