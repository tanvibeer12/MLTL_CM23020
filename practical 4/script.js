let classifier;

const fileInput = document.getElementById("imageInput");
const preview = document.getElementById("previewImage");
const uploadText = document.getElementById("uploadText");
const status = document.getElementById("statusText");
const prediction = document.getElementById("predictionBox");

async function startAI(){

status.innerText = "Loading AI model...";

classifier = await mobilenet.load();

status.innerText = "Model ready. Upload an image.";
}

startAI();

fileInput.addEventListener("change", function(event){

const file = event.target.files[0];
if(!file) return;

const image = new Image();
image.src = URL.createObjectURL(file);

preview.src = image.src;
preview.style.display = "block";
uploadText.style.display = "none";

image.onload = async function(){

if(!classifier){
status.innerText = "Model still loading...";
return;
}

status.innerText = "Analyzing image...";

const predictions = await classifier.classify(image);

prediction.innerHTML =
"Detected Object: " + predictions[0].className +
"<br>Confidence: " + (predictions[0].probability*100).toFixed(2) + "%";

status.innerText = "Analysis complete";
};

});