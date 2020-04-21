console.log("Objects?");

// object are collection of functionality and information
// contains avariables and functions

//car
// lp, color, type
// drive, fuel, stop

const car = {
  lp: 8728082333,
  color: "red",
  tests: [2017, 2018, 2019],
  type: { manufacturer: "BMW", version: "X5" },
  KM: 0,
  drive: function (km) {
    if (typeof km !== "number") return;
    this.KM = this.KM + km;
  },
  
};

const car2 = {
  lp: 87282223,
  color: "black",
  tests: [2019],
  type: { manufacturer: "BMW", version: "X3" },
};
