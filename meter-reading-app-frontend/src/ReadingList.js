import "./ReadingList.css";
import Reading from "./Reading/Reading";

function ReadingList(props) {
  const classes = "readingList " + props.className;

    //TODO we need to load the reading list from the props: props.readingList and display that one

  return (
    <div className={classes}>
      <Reading road="Clift Road" num={12} energy={32} />
      <Reading road="Clift Road" num={13} energy={46} />
      <Reading road="Down Road" num={13} energy={48} />
    </div>
  );
}

export default ReadingList;
