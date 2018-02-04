import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";

clock.granularity = "seconds";

const normal_time = document.getElementById("normal_time");
const internet_time = document.getElementById("internet_time");
const date = document.getElementById("date");

clock.ontick = (evt) => {
  //Normal Time
  let today = evt.date;
  let hours = today.getHours();
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  let mins = util.zeroPad(today.getMinutes());
  let secs = util.zeroPad(today.getSeconds());
  normal_time.text = `${hours}:${mins}:${secs}`;
  
  //Internet Time
  var seconds = today.getSeconds() + (today.getMinutes() * 60) + (today.getHours() * 3600);
  console.log(seconds);
  var beats = Math.round(seconds / 86.4);
  
  internet_time.text = "@" + beats;
  
  //Date
  date.text = util.zeroPad(today.getDate()) + "." + util.zeroPad(today.getMonth()+1) + "." + today.getFullYear();
}
