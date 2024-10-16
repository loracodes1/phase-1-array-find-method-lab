// code your solution here
const record = [
    { year: "2016", result: "W" },
    { year: "2015", result: "L" },
    { year: "2014", result: "N/A" },
  ];
  
  function superbowlWin(record) {
    const win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
  }
  