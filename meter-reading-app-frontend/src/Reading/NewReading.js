import { useRef, useState } from "react";
import "./NewReading.css";
import { saveMeter } from "../ServerInterface/MeterInterface";

const NewReading = (props) => {
  const [street, setStreet] = useState("");
  const [streetNum, setStreetNum] = useState("");
  const [energy, setEnergy] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    setStreet("");
    setStreetNum("");
    setEnergy("");
    saveMeter({
      //TODO these variable names are not correct, we are putting those for now but they needs changing
      street,
      streetNum,
      energy,
    });
    props.onSavedReading();
  }
  function cancelHandler(){
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

  return (
    <form className="new-reading" onSubmit={submitHandler}>
      <div className="street-name">
        <label>Street Name</label>
        <input value={street} type="text" onChange={streetChangeHandler} />
      </div>
      <div className="street-num">
        <label>Street Number</label>
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
      <div class="buttons">
        <button onClick={cancelHandler}>Cancel</button>
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default NewReading;
