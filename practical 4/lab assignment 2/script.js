let model;

async function loadModel(){
model = await mobilenet.load();
console.log("MobileNet Loaded");
}

loadModel();

function setup(input,img,result){

document.getElementById(input).addEventListener("change",async function(e){

const file = e.target.files[0];
const image = document.getElementById(img);

image.src = URL.createObjectURL(file);

image.onload = async function(){

const predictions = await model.classify(image,3);

let output = "<b>Top 3 Predictions</b><br>";

predictions.forEach((p,i)=>{
output += (i+1)+". "+p.className+
" - "+(p.probability*100).toFixed(2)+"%<br>";
});

document.getElementById(result).innerHTML = output;

}

});

}

setup("file1","img1","res1");
setup("file2","img2","res2");
setup("file3","img3","res3");
setup("file4","img4","res4");
setup("file5","img5","res5");