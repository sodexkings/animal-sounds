
navigator.mediaDevices.getUserMedia({audio:true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/XyxdO4FFd/',modelReady)

}

function modelReady()
{
classifier.classify(gotResults);
}