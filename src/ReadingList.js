import "./ReadingList.css";
import Reading from "./Reading/Reading";
import ReadingFilter, { emptyFilter } from "./ReadingFilter";
import { useState } from "react";

function ReadingList(props) {
  const classes = "readingList " + props.className;
  const [filter, setFilter] = useState(emptyFilter);

  let filteredList = props.readingList;

  if (filter.postCode) {
    filteredList = props.readingList.filter((reading) =>
      reading.postCode.includes(filter.postCode)
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
            postCode={reading.postCode}
            streetNum={reading.streetNum}
            energy={reading.energy}
          />
        ))}
      </div>
    </div>
  );
}

export default ReadingList;
