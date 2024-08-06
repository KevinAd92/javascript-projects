// Write your JavaScript code here.

window.addEventListener("load", function() {   
    let takeOffButton = document.getElementById("takeoff");
    
    takeOffButton.addEventListener("click", function(event){
        let answer = window.confirm("Confirm that the shuttle is ready for takeoff.")
        if (answer) {
            document.getElementById("flightStatus").innerHTML = "Shuttle in Flight";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            document.getElementById("spaceShuttleHeight").innerHTML = 10000;
        } 
    }); 

    let landButton = document.getElementById("landing");
        landButton.addEventListener("click", function(event){
         window.alert("The shuttle is landing, Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = "Shuttle has landed";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = 0;
    });

    let abortButton = document.getElementById("missionAbort");
    abortButton.addEventListener("click", function(event){
        let answer = window.confirm("Confirm that you want to abort the mission.")
            if (answer) {
            document.getElementById("flightStatus").innerHTML = "Misson Aborted";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = 0;
            }
    });
    let rocketImage = getElementById("rocket")

    let upButton = document.getElementById("up");
        upButton.addEventListener("click", function(event) {
            let tempNumber = Number(document.getElementById("spaceShuttleHeight").innerHTML);
            tempNumber += 10000;
            document.getElementById("spaceShuttleHeight").innerHTML = tempNumber;
        });
        
    let downButton = document.getElementById("down");
    downButton.addEventListener("click", function(event) {
        document.getElementById("spaceShuttleHeight").innerHTML ;
    });
    let rightButton = document.getElementById("right");
    rightButton.addEventListener("click", function(event) {
        movement = parseInt(rocketImage.style.right) 
        rocketImage.style.right = movement;
    });
    let leftButton = document.getElementById("left");
    leftButton.addEventListener("click", function(event) {
        
    });
});

// Remember to pay attention to page loading!
