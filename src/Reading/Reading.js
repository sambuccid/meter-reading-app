import "./Reading.css";

function Reading(props) {
  return (
    <div className="reading">
      <div>{props.postCode}</div>
      <div>{props.streetNum}</div>
      <div>{props.energy}kj</div>
    </div>
  );
}

export default Reading;
