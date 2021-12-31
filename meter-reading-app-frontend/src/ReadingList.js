import "./ReadingList.css";
import Reading from "./Reading/Reading";

function ReadingList(props) {
  const classes = "readingList " + props.className;
  
  return (
    <div className={classes}>
      {props.readingList.map((reading) => (
        <Reading
          key={reading.id}
          road={reading.street}
          num={reading.streetNum}
          energy={reading.energy}
        />
      ))}
    </div>
  );
}

export default ReadingList;
