Webcam.set({
    height:350,
    width:300,
    image_format:'png',
    png_quality:90,

    constraints:{
        facingMode:"environment"
    }
});
Webcam.attach("#camera");

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'">';
    });
}

console.log("ml5 version is -",ml5.version);

classifier=ml5.imageClassifier("MobileNet",modelloaded);
    
function modelloaded(){
    console.log("model is loaded");
} 

function check(){
    img=document.getElementById("capture_image");
    classifier.classify(img,gotresults);
}

function gotresults(error,results){
    if(error){
        console.log(error);
    }
    else{  
        console.log(results);
        document.getElementById("Object_name").innerHTML=results[0].label;
    }
}