Webcam.set({
    Width:310,
    Height:300,
    ImageFormat:'png',
    PngQuality:90,
    Constraints: {
        FacingMode: "Environment"
    }
});

Camera = document.getElementById("Camera");
Webcam.attach("Camera");

function Snap() {
    Webcam.snap(function(DataURL) {
        document.getElementById("Snapshot").innerHTML = "<img id='CapturedImage' src='" + DataURL + "'>";
    });
}

console.log("ML5 Version", ml5.version);

Classifier = ml5.imageClassifier("MobileNet", ModelLoaded);

function ModelLoaded() {
    console.log("Model Loaded!");
}

function Identify() {
    IMG = document.getElementById("CapturedImage");
    Classifier.classify(IMG, GetResult);
}

function GetResult(Error, Results) {
    if (Error) {
        console.error(Error);
    } else {
        console.log(Results);
        document.getElementById("ObjectName").innerHTML = Results[0].label;
    }
}