import { useState } from "react";
import "./Home.css";
import Button from "./Button";
import ReadingList from "../ReadingList";
import NewReading from "../Reading/NewReading";

function Home() {
  const [showReading, setShowReading] = useState(false);
  const [readingList, setReadingList] = useState([]);

  function newReadingClickHandler() {
    setShowReading(true);
  }

  function savedReadingHandler() {
    setShowReading(false);
    //TODO need to update the reading list loading it again from the MeterInterface module
  }

  return (
    <div className="home">
      <div className="menu">
        <Button onClick={newReadingClickHandler}>New Reading</Button>
        <Button>Filter</Button>
      </div>
      <NewReading show={showReading} onSavedReading={savedReadingHandler} />
      <ReadingList className="readingList" readingList={readingList}/>
    </div>
  );
}

export default Home;
