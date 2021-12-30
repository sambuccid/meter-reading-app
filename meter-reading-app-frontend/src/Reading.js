import './Reading.css'

function Reading(props) {
  return (
    <div className="reading">
      <div>{props.road}</div>
      <div>{props.num}</div>
      <div>{props.energy}kj</div>
    </div>
  );
}

export default Reading;
