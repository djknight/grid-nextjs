import React, { useState } from "react";
import GridLayout from "react-grid-layout";

export default function Home() {
  const [layout, setLayout] = useState([
    { i: "raceOutcome", x: 0, y: 0, w: 2, h: 2 },
    { i: "positionLabels", x: 2, y: 0, w: 11, h: 2 },
    { i: "raceType", x: 0, y: 0, w: 2, h: 2 },
    { i: "RacePositions", x: 2, y: 0, w: 11, h: 2 },
    { i: "RaceSectionals", x: 2, y: 0, w: 11, h: 2 },
    { i: "RaceTimeOfficial", x: 15, y: 0, w: 2, h: 2 },
    { i: "RaceMargins", x: 2, y: 0, w: 11, h: 2 },
    // { i: "raceName", x: 2, y: 0, w: 11, h: 2 },
    { i: "raceLength", x: 0, y: 0, w: 2, h: 2 },
    // { i: "time", x: 4, y: 0, w: 3, h: 2 },
    // { i: "timeOfRace", x: 0, y: 0, w: 2, h: 2 },
    // { i: "weather", x: 7, y: 0, w: 3, h: 2 },
    { i: "image", x: 15, y: 0, w: 2, h: 6 },
  ]);

  const handleLayoutChange = (newLayout) => {
    setLayout(newLayout);
    // updated layout to your backend or local storage ??? on layout
    // or do i make it save button?
    //do i remake the settings page into - this?
    // do i make it able to add a layout then save then ask or select {freeText}{announce}{Race}{sectional's?}
    // note do i replace the raceName to positions or positionLabels
    // or keep positionLabels and use the raceName with positions
    // or do i create each one?  then how would i delete and replace and repair them?

    // merge like the positions and 1st 2nd type positions on top of the other? instead of an extra colum
  };

  return (
    // for a bottom only fix  <div style={{ position: "fixed", bottom: 0, width: "100%" }}>

    <div>
      <GridLayout
        className="layout"
        layout={layout}
        cols={15}
        rowHeight={30}
        width={1900} //screen width
        onLayoutChange={handleLayoutChange} // event handler
        verticalCompact={false}
        margin={[1, 1]} // add margin with a 5px gap
      >
        <div className="raceOutcome" key="raceOutcome">
          "ALL CLEAR"
        </div>
        <div className="positionLabels" key="positionLabels">
          "1st", "2nd", "3rd", "4th", "5th"
        </div>

        <div className="raceType" key="raceType">
          Race 1
        </div>
        <div className="RacePositions" key="RacePositions">
          RacePositions
        </div>

        <div className="RaceMargins" key="RaceMargins">
          noes X head + E=MC2
        </div>

        <div className="RaceSectionals" key="RaceSectionals">
          S1 S2 S3
        </div>

        {/* <div className="raceName" key="raceName">
          YO Thats a level 1 Slime!
        </div> */}

        <div className="RaceTimeOfficial" key="RaceTimeOfficial">
          RTO 10:10
        </div>

        <div className="raceLength" key="raceLength">
          400m
        </div>

        {/* <div className="time" key="time">
          Time 10:10
        </div> */}

        {/* <div className="timeOfRace" key="timeOfRace">
          10:50
        </div> */}

        {/* <div className="weather" key="weather">
          40℃ 40%h
        </div> */}

        <div className="image" key="image">
          <div style={{ width: "100%", height: "100%" }}>
            <img
              src="/ComAV_trans.png"
              alt="Race image"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
        </div>
      </GridLayout>
    </div>
  );
}
