import "./ReadingFilter.css";

function ReadingFilter(props) {
  function streetChangeHandler(event) {
    props.onFilterChange({
      street: event.target.value,
    });
  }

  return (
    <div className="reading-filter">
      <label>Street</label>
      <input onChange={streetChangeHandler}></input>
    </div>
  );
}

export default ReadingFilter;
