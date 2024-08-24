
let watch = (function(){
    let timer = document.getElementById("timer");
    let start = document.getElementById("start"); 
    let stop = document.getElementById("stop");
    let reset = document.getElementById("reset");
    let lap = document.getElementById("lap");
    let laps = document.getElementById("laps");

    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    let t;        // hold the ID of the interval timer, which is used to start and stop the stopwatch.

    function buildTimer() {     //function check the condition and increment time

        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }
        timer.textContent = 
            (hours < 10 ? "0" + hours : hours) + ":" +      //it checks if value is less thaat 10 then add "0" before eg."0"+"9"="09
            (minutes < 10 ? "0" + minutes : minutes) + ":" +       //else dispaly hours as it is
            (seconds < 10 ? "0" + seconds : seconds);
    }

    function stopTimer() {
        stop.addEventListener("click", function(){
            clearInterval(t);             //clearInterval is javascript method  specifically used to stop an interval that was started by setInterval.
        });
    }

    function startTimer() {
        start.addEventListener("click", function(){
            clearInterval(t);
            t = setInterval(buildTimer, 1000); // Run the buildTimer every 1000 ms (1 second)
        });
    }

    function resetTimer() {
        reset.addEventListener("click", function(){
            clearInterval(t);
            seconds = 0;
            minutes = 0;
            hours = 0;
            timer.textContent = "00:00:00";
            laps.innerHTML = ""; // Clear all lap times
        });
    }

    function recordLap() {
        lap.addEventListener("click", function(){
            let lapTime = document.createElement("li");
            lapTime.textContent = timer.textContent;
            laps.appendChild(lapTime);  // Add the lap time to the list
        });
    }

    return {
        start: startTimer,
        stop: stopTimer,
        reset: resetTimer,
        lap: recordLap
    };
})();

watch.start();
watch.stop();
watch.reset();
watch.lap();
