leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

function setup()
{
    Canvas = createCanvas(600,500);
    Canvas.center();
    video = createCapture(VIDEO);
    video.hide()

    poseNet = ml5.poseNet(video, modelReady);
    poseNet.on("pose", gotposes);

}

function draw()
{
    image(video, 0, 0, 600, 500)
}

function preload()
{
    song1 = loadSound("WSV.mp3");
    song2= loadSound("topgun.mp3");
}

function play()
{
    song2.play();
}

function stop()
{
    song2.stop();
}

function modelReady()
{
    console.log("model is ready");
}

function gotposes(results)
{
    if(results.length > 0)
    {
    console.log("results")

    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;

    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    }
}