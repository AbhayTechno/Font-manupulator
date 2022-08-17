
difference=0;
rightWristX=0;
leftWristX=0;

function setup() {

    video=createCapture(VIDEO);
    video.size(550, 500);

    canvas= createCanvas(500, 500);
    canvas.position(700, 100);

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}


function modelLoaded() {

    console.log("poseNet is intialized");
}


function gotPoses(results) {

    if (results.length > 0) {

        leftWristX= results[0].pose.leftWrist.x;
        rightWristX= results[0].pose.rightWrist.x;

        difference=floor(leftWristX-rightWristX);
    }
}

function draw() {

    background('aqua');
    document.getElementById("font_size").innerhtml="font size of text will be  = " + difference +"px";
    textSize(difference)
    fill('red');
    text("Abhay", 50,300);

}