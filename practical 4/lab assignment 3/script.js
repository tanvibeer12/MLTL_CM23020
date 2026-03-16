let mobilenetModel;
let cocoModel;
let img = document.getElementById("image");

async function loadModels(){

mobilenetModel = await mobilenet.load();
cocoModel = await cocoSsd.load();

console.log("Models Loaded");

}

loadModels();

document.getElementById("upload").addEventListener("change",function(e){

const file = e.target.files[0];
img.src = URL.createObjectURL(file);

});

async function predict(){

if(!img.src){
alert("Upload an image first");
return;
}

// MobileNet classification
const mobilePred = await mobilenetModel.classify(img,3);

let mobileHTML="";

mobilePred.forEach((p,i)=>{
mobileHTML += (i+1)+". "+p.className+
"<br>"+(p.probability*100).toFixed(2)+"%<br><br>";
});

document.getElementById("mobilenetResult").innerHTML = mobileHTML;


// COCO SSD detection
const cocoPred = await cocoModel.detect(img);

let cocoHTML="";

cocoPred.slice(0,3).forEach((p,i)=>{
cocoHTML += (i+1)+". "+p.class+
"<br>"+(p.score*100).toFixed(2)+"%<br><br>";
});

document.getElementById("cocoResult").innerHTML = cocoHTML;

}