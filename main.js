difference = 0;
leftWX = 0;
rightWX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Initialised");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);

        leftWX = results[0].pose.leftWrist.x;
        rightWX = results[0].pose.rightWrist.x;
        difference = floor(leftWX - rightWX);

        console.log("RightWristX = " + rightWX + ", LeftWristX = " + leftWX + ", Difference = " + difference);
    }
}

function draw(){
    background('#34dbeb');
    textSize(difference);
    fill('#f5cb42');
    text('Madhusudhan', 0, 400);
}