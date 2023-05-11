import React, { useState } from "react";
import GridLayout from "react-grid-layout";

export default function Home() {
  const [layout, setLayout] = useState([
    { i: "FreeText", x: 0, y: 0, w: 2, h: 2 },
    { i: "time", x: 4, y: 0, w: 3, h: 2 },
    { i: "weather", x: 7, y: 0, w: 3, h: 2 },
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
        margin={[1, 1]} // add margin with a 5px gap
      >
        <div className="FreeText" key="FreeText">
          YO Thats a level 1 Slime!
        </div>

        <div className="time" key="time">
          Time 10:10
        </div>

        <div className="weather" key="weather">
          40℃ 40%h
        </div>
      </GridLayout>
    </div>
  );
}
