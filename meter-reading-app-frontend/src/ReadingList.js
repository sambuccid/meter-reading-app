import "./ReadingList.css";
import Reading from "./Reading/Reading";
import ReadingFilter from "./ReadingFilter";
import { useState } from "react";

function ReadingList(props) {
  const classes = "readingList " + props.className;
  const [filter, setFilter] = useState({ street: "" });
  // const [filteredList, setFilteredList] = useState(props.readingList);

  let filteredList = props.readingList;

  if (filter.street) {
    filteredList = props.readingList.filter((reading) =>
      reading.street.includes(filter.street)
    );
  }

  function filterChangeHandler(newFilter) {
    setFilter(newFilter);
  }

  return (
    <div className={classes}>
      <ReadingFilter onFilterChange={filterChangeHandler} />
      <div className="list">
        {filteredList.map((reading) => (
          <Reading
            key={reading.id}
            road={reading.street}
            num={reading.streetNum}
            energy={reading.energy}
          />
        ))}
      </div>
    </div>
  );
}

export default ReadingList;
