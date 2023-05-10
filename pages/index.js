import GridLayout from "react-grid-layout";



export default function Home() {
  // layout is an array of objects x is position
  const layout = [
    { i: "raceType", x: 0, y: 0, w: 2, h: 2 },
    { i: "raceName", x: 2, y: 0, w: 11, h: 2 },
    { i: "raceLength", x: 14, y: 0, w: 2, h: 2 },
    { i: "time", x: 5, y: 0, w: 2, h: 2 },
    { i: "timeOfRace", x: 0, y: 0, w: 2, h: 2 },
    { i: "weather", x: 7, y: 0, w: 2, h: 2 },
    
  ];
  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={15}
      rowHeight={30}
      width={1900}
    >
      <div className="raceType" key="raceType">Race 1</div>
      <div key="raceName">YO Thats a level 1 Slime! </div>
      <div key="raceLength">400m</div>
      <div key="time"> Time 10:10</div>
      <div key="timeOfRace">Time Of the Race 10:50</div>

      <div key="weather">40 Deg</div>
    </GridLayout>
  );
}
