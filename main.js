
rightWristX = 0;
leftWristX = 0;
difference = 0;

function setup() {

video = createCapture(VIDEO);
video.size(550, 500)

canvas = createCanvas(550, 550);
canvas.position(600, 150);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded() {

console.log("Posenet has worked");

}

function gotPoses(results) {

    if(results.length > 0){
    
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x
        leftWristX = results[0].pose.leftWrist.x

        difference = Math.floor(rightWristX - leftWristX);
    
        console.log("rightwristx = "+rightWristX, "leftwristx = " +leftWristX, "difference = " + difference);
        
        }

    }


function draw() {

background("#4281ad");

textSize(difference);
text('Satty', 200, 200);
fill(0, 0, 10);



}