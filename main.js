noseX = ""
noseY = ""
function preload(){
SamsungGalaxyPhone = loadImage("https://i.postimg.cc/T17MKPp3/Clown-Nose-PNG-Image.png")
} 
function setup(){
NoMyCanvas =  createCanvas(500, 400)
NoMyCanvas.position(365, 150)

thing = createCapture(VIDEO)
thing.hide()
stuff = ml5.poseNet(thing, modelLoadedhopefully)
stuff.on("pose", noitcnuf)
}
function modelLoadedhopefully(){
    console.log ("Model has loaded. Initiating the code. Finished.")
}
function draw(){
image(thing, 0, 0, 500, 400)
// circle(noseX, noseY, 20)
image(SamsungGalaxyPhone, noseX -100, noseY-60, 70, 70)
}
function takePic(){
    save("ItsMe!.png")
}
function noitcnuf(results){
    if (results.length > 0){
        console.log(results)
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        
    }
}