import React, { useState } from "react";
import GridLayout from "react-grid-layout";

export default function Home() {
  const [layout, setLayout] = useState([
    { i: "raceType", x: 0, y: 0, w: 2, h: 2 },
    { i: "raceName", x: 2, y: 0, w: 11, h: 2 },
    { i: "raceLength", x: 14, y: 0, w: 2, h: 2 },
    { i: "time", x: 4, y: 0, w: 3, h: 2 },
    { i: "timeOfRace", x: 0, y: 0, w: 2, h: 2 },
    { i: "weather", x: 7, y: 0, w: 3, h: 2 },
    { i: "image", x: 15, y: 0, w: 3, h: 3 },
  ]);

  const handleLayoutChange = (newLayout) => {
    setLayout(newLayout);
    // updated layout to your backend or local storage ??? on layout

    // or do i make it save button?
    //do i remake the settings page into - this?
    // do i make it able to add a layout then save then ask or select {freeText}{announce}{Race}{sectional's?}
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
        margin={[5, 5]} // add margin with a 5px gap
      >
        <div className="raceType" key="raceType">
          Race 1
        </div>
        <div className="raceName" key="raceName">
          YO Thats a level 1 Slime!
        </div>
        <div className="raceLength" key="raceLength">
          400m
        </div>
        <div className="time" key="time">
          Time 10:10
        </div>
        <div className="timeOfRace" key="timeOfRace">
          10:50
        </div>
        <div className="weather" key="weather">
          40℃ 40%h
        </div>
        <div className="img" key="image">
          <div style={{ width: "100%", height: "100%" }}>
            <img
              src="/ComAV_trans.png"
              alt="Race Image"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
        </div>
      </GridLayout>
    </div>
  );
}
