/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let random1 = who[Math.floor(Math.random() * who.length)];
  let random2 = action[Math.floor(Math.random() * action.length)];
  let random3 = what[Math.floor(Math.random() * what.length)];
  let random4 = when[Math.floor(Math.random() * when.length)];
  let randomFinish = random1 + random2 + random3 + random4;
  document.getElementById("excuse").innerHTML = randomFinish;
  console.log("Hello Rigo from the console!");
};
