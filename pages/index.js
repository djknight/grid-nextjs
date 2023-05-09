import GridLayout from "react-grid-layout";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // layout is an array of objects
  const layout = [
    { i: "raceType", x: 0, y: 0, w: 1, h: 2, static: true },
    { i: "raceName", x: 1, y: 0, w: 8, h: 2, minW: 2, maxW: 4 },
    { i: "raceLength", x: 1, y: 0, w: 1, h: 2 },
    { i: "time", x: 4, y: 0, w: 1, h: 2 },
    { i: "weather", x: 1, y: 0, w: 8, h: 2, minW: 2, maxW: 4 },


  ];
  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={30}
      width={1200}
    >
      <div key="raceType">Race 1</div>
      <div key="raceName">YO Thats a level 1 Slime! </div>
      <div key="raceLength">400m</div>
      <div key="time">10:10:10</div>
      <div key="weather">40 Deg</div>


    </GridLayout>
  );
}
