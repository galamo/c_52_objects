console.log("Objects?");

// object are collection of functionality and information
// contains avariables and functions

//car
// lp, color, type
// drive, fuel, stop

// const car = {
//   lp: 8728082333,
//   color: "red",
//   tests: [2017, 2018, 2019],
//   type: { manufacturer: "BMW", version: "X5" },
//   KM: 0,
//   drive: function (km) {
//     if (typeof km !== "number") return;
//     this.KM = this.KM + km;
//   },
//   test: function (year) {
//     if (typeof year !== "number" && (year < 2000 || year > 2050)) return;
//     this.tests.push(year);
//   },
// };

// const car2 = {
//   lp: 87282223,
//   color: "black",
//   tests: [2019],
//   doors: 5,
//   type: { manufacturer: "BMW", version: "X3" },
//   drive: function (km) {
//     if (typeof km !== "number") return;
//     this.KM = this.KM + km;
//   },
//   test: function (year) {
//     if (typeof year !== "number" && (year < 2000 || year > 2050)) return;
//     this.tests.push(year);
//   },
// };

function Car(lp, type, color, doors, isCarNew) {
  this.lp = lp;
  this.color = color;
  this.type = type;
  this.doors = doors;
  this.KM = 0;
  this.isCarNew = isCarNew;
  this.drive = function (km) {
    if (typeof km !== "number") return;
    this.KM = this.KM + km;
  };
}

const colors = ["red", "green", "blue"];
const types = ["BMW", "Mazda", "mercds"];

for (let index = 0; index < 10; index++) {
  const lp = Math.floor(Math.random() * 9999);
  const randomColor = colors[Math.floor(Math.random() * 3)];
  const randomType = types[Math.floor(Math.random() * 3)];
  const doors = Math.floor(Math.random() * 5);
  console.log(new Car(lp, randomColor, randomType, doors, true));
}
