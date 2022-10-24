var marks = [56, 100, 24, 60];
var sum = 0;
var avg = 0;

function setup() 
{
  createCanvas(400,400);
  average();
}

function draw() 
{
background(51);

}

function average()
{
  sum = marks[0] +marks[1]+marks[2] + marks[3];
  avg = sum/marks.length;
  console.log ("the average is " +avg);
}