prediction1 = "";
prediction2 = "";

Webcam.set({
  width:400,
  height:200,
  image_format:'png',
  png_quality:90
});
Webcam.attach(document.getElementById("camera"));

function capturepicturenow(){
    Webcam.snap(function(data_uri){
document.getElementById("picture").innerHTML = '<img id = "imgharry" src = "'+ data_uri +'"/>';

    });
    
}
console.log(ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/AsbKFC6c-/model.json', modelLoaded);
function modelLoaded(){
    console.log(modelLoaded);

}

function check(){
store = document.getElementById("picture");
classifier.classify(store, gotResult);
}

function gotResult(error, results){

    if(error){
    console.error(error);
    }else{
    console.log(results);
    document.getElementById("p1").innerHTML = results[0].label;
    
    gesture = results[0].label;

    toSpeak
    
    if(gesture == "Normal"){
        document.getElementById("p4").innerHTML = "&#128557;";
    }
    if(gesture == "Ball"){
        document.getElementById("p4").innerHTML = "&#128522;";
    }
    if(gesture == "No Nose"){
        document.getElementById("p4").innerHTML = "&#128528;";
    }
    speak();
    
    
    
    }
}

function speak(){
   var snowman = window.speechSynthesis;

   speak_data = toSpeak; 

   var utterThis = new SpeechSynthesisUtterance(speak_data);

   snowman.speak(utterThis);
}
