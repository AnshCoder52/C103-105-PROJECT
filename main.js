Webcam.set({
height : 250,
width : 250,
image_format : "png",
png_quality : 90

});

cam = document.getElementById('camera');
Webcam.attach('#camera');

function getimg() {

Webcam.snap(function(data_uri){
document.getElementById('objectp').innerHTML = "<img id='objectpic' src=" +data_uri+ " >"

})
}

console.log(" ml5 version is ", ml5.version);
Classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/CsLaH8RfX/model.json", modelLoaded)

function modelLoaded() {
console.log("Model is loaded!");

}
function check() {
img = document.getElementById('objectpic');
Classifier.classify(img, gotResult)
}

function gotResult(error, results) {
if(error){
console.error(error);

}
else {
console.log(results);
document.getElementById('objname').innerHTML = results[0].label;
document.getElementById('objacc').innerHTML = results[0].confidence.toFixed(3);
}
}