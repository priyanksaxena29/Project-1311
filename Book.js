Status = "";
Img = "";
canvas = "";

function preload()
{
   Img = loadImage("Book.png") ;
}

function setup ()
{
    canvas = createCanvas(400, 500);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("statusLabel").innerHTML = "Status : Detecting Oblects";
}

function draw()
{
   image(Img, 50, 250, 300, 280 );
}

function modelLoaded ()
{
    console.log("Model ! Loaded");
}

function gotResults (error, results)
{
    console.log("Entered GotResults");
    if(error)
        console.error(error);
    else 
        {
            console.log(results);
            document.getElementById("result").innerHTML = results.text;
        }
}
