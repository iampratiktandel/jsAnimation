const successURL = "https://giphy.com/gifs/workingtitlefilms-mr-bean-rowan-atkinson-beans-holiday-kfRlTZDvhLCPvOEey8";
const failURL    = "https://giphy.com/gifs/fail-sad-pop-jaAXjJcaTngemp4vK8";
const duration = [10000, 20000, 30000];
let numStopped = 0;

const balloons = [
  document.querySelector("#greenBalloon"),
  document.querySelector("#redBalloon"),
  document.querySelector("#yellowBalloon")
]

balloons.forEach((balloon, index) => {
    balloon.animation = balloon.animate([{top: "80vh"}, {top: "5vh"}], {duration: duration[index], fill: "forwards"});
    balloon.animation.onfinish = () => {
      window.location.href = failURL;
    }

    balloon.addEventListener("click", (e) => {
      e.currentTarget.animation.pause();
      numStopped++;

      if(numStopped > 2) {
        window.location.href = successURL;
      }
    })
});