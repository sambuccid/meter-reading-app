import { useState } from "react";
import "./Home.css";
import Button from "./Button";
import ReadingList from "../ReadingList";
import NewReading from "../Reading/NewReading";
import * as meterInterface from "../ServerInterface/MeterInterface";

function Home() {
  const [showReading, setShowReading] = useState(false);
  const [readingList, setReadingList] = useState([]); //TODO this is wrong, needs to fix it to ansycronously read initial data

  function loadReadingList(callback) {
    meterInterface.allMeters(callback);
  }

  function newReadingClickHandler() {
    setShowReading(true);
  }

  function savedReadingHandler() {
    setShowReading(false);
    loadReadingList(setReadingList);
  }

  return (
    <div className="home">
      <div className="menu">
        <Button onClick={newReadingClickHandler}>New Reading</Button>
        <Button>Filter</Button>
      </div>
      <NewReading show={showReading} onSavedReading={savedReadingHandler} />
      <ReadingList className="readingList" readingList={readingList} />
    </div>
  );
}

export default Home;
