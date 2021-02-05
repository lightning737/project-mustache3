var nose_x=0;
var nose_y=0;

function preload(){
    mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

function setup(){
    Canvas=createCanvas(300,300);
    Canvas.center();
    video=createCapture(VIDEO);
    video.size(300 , 300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on("pose",gotPoses)
}

function modelLoaded(){
    console.log("poseNet has struck")
}

function take_the_snapshot(){
    save("musthavestacheFilterSnapshot.jpg");
}

function draw(){
    image(video, 0 ,0 ,300 ,300 );
    fill(255,0,0);
    stroke(255,0,0);
    image(mustache,nose_x-15,nose_y+5,30,30)
}

function gotPoses(results){
 if(results.length > 0){ 
    console.log(results);
    console.log("nose_x=" + results[0].pose.nose.x );
    console.log("nose_y=" + results[0].pose.nose.y );    
    nose_x= + results[0].pose.nose.x;
    nose_y= + results[0].pose.nose.y;
}
}