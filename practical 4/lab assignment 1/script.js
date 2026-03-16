let model;

async function load(){
  model = await mobilenet.load();
  console.log("MobileNet Loaded");
}
load();

document.getElementById("upload").addEventListener("change", async function(e){

  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = async function(){

    const img = document.getElementById("img");
    const text = document.getElementById("text");

    img.src = reader.result;
    text.style.display="none";

    img.onload = async function(){

      const predictions = await model.classify(img,3);

      let html="<h3>Top 3 Predictions</h3>";

      predictions.forEach((p,i)=>{
        html+=`
        <div class="prediction">
        <b>${i+1}. ${p.className}</b><br>
        Confidence: ${(p.probability*100).toFixed(2)}%
        </div>`;
      });

      document.getElementById("output").innerHTML=html;

    }

  };

  reader.readAsDataURL(file);

});