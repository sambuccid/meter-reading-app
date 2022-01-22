import "./ReadingFilter.css";

const emptyFilter = {
  postCode: ""
};

function ReadingFilter(props) {
  function postCodeChangeHandler(event) {
    props.onFilterChange({
      postCode: event.target.value
    });
  }

  return (
    <div className="reading-filter">
      <label>Post Code</label>
      <input onChange={postCodeChangeHandler}></input>
    </div>
  );
}

export { ReadingFilter as default, emptyFilter };
