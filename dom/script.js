let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let body = document.querySelector("body");
let div = document.querySelector("div");
let btn = document.querySelector("button");
let arr = [
  {
    team: "CSK",
    primaryColor: "#ffd000",
    secondarycolor: "#205ea9",
    fullName: "Chennai Super Kings",
    trophy: "5",
    captain: "Ruturaj Gaikwad",
  },
  {
    team: "DC",
    primaryColor: "#004c93",
    secondaryColor: "#ef1b23",
    fullName: "Delhi Capitals",
    trophy: "0",
    captain: "Axar Patel",
  },
  {
    team: "GT",
    primaryColor: "#1C2C5B",
    secondarycolor: "#C8A34D",
    fullName: "Gujarat Titans",
    trophy: "1",
    captain: "Shubman Gill",
  },
  {
    team: "KKR",
    primaryColor: "#3A225D",
    secondaryColor: "#D4AF37",
    fullName: "Kolkata Knight Riders",
    trophy: "3",
    captain: "Ajinkya Rahane",
  },
  {
    team: "LSG",
    primaryColor: "#00AEEF",
    secondaryColor: "#F47C20",
    fullName: "Lucknow Super Giants",
    trophy: "0",
    captain: "Rishabh Pant",
  },
  {
    team: "MI",
    primaryColor: "#005DAA",
    secondaryColor: "#D1A04B",
    fullName: "Mumbai Indians",
    trophy: "5",
    captain: "Hardik Pandya",
  },
  {
    team: "PBKS",
    primaryColor: "#D71920",
    secondaryColor: "#C8A34D",
    fullName: "Punjab Kings",
    trophy: "0",
    captain: "Shreyas Iyer",
  },
  {
    team: "RR",
    primaryColor: "#EA1A85",
    secondaryColor: "#254AA5",
    fullName: "Rajasthan Royals",
    trophy: "1",
    captain: "Riyan Parag",
  },
  {
    team: "RCB",
    primaryColor: "#EC1C24",
    secondaryColor: "#000000",
    fullName: "Royal Challengers Bengaluru",
    trophy: "2",
    captain: "Rajat Patidar",
  },
  {
    team: "SRH",
    primaryColor: "#F26522",
    secondaryColor: "#000000",
    fullName: "Sunrisers Hyderabad",
    trophy: "1",
    captain: "Pat Cummins",
  },
];

btn.addEventListener("click", function () {
  let winner = arr[Math.floor(Math.random() * arr.length)];

  body.style.backgroundColor = winner.primaryColor;
  div.style.backgroundColor = winner.secondaryColor;
  h1.innerHTML = winner.team;
  p.innerHTML = `fullName : ${winner.fullName} <br> captain : ${winner.captain} <br> trophy : ${winner.trophy}`;

  console.log(winner);
});
