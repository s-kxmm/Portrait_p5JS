//Sophia S Kim 
//Section C 1:30 
//sophiaki@andrew.cmu.edu
//Project-01-Self Portrait

function setup() {
  createCanvas(500,600); /// width,height
  background(117, 168, 253); ///background reference to RGB (R,G,B)
}

function draw() {
	fill(24, 16, 0); //hair color
	noStroke();
	ellipse(252.5, 251, 343, 328); //top part of hair

	fill(24, 16, 0); //hair color
	noStroke();
	rect(81, 252, 343, 259); //bottom half of hair

	fill(255, 236, 194); //skin color
	noStroke();
	ellipse(250, 283, 256, 300); //head shape

	fill(255, 236, 194);
	noStroke();
	ellipse(126, 304, 59, 80); //left ear 

	fill(255, 236, 194);
	noStroke();
	ellipse(371, 303, 59, 80); //right ear 

	fill(214, 213, 211);
	noStroke();
	ellipse(123, 391, 11, 112); //left earring

	fill(214, 213, 211);
	noStroke();
	ellipse(378, 391, 11, 112); //right earring

	fill(255, 236, 194);
	noStroke();
	rect(185, 383, 131, 101); //neck

	fill(255, 236, 194);
	noStroke();
	rect(130, 477, 245, 124); //chest

	fill(255, 236, 194);
	noStroke();
	ellipse(130, 600, 144, 246); //left arm

	fill(255, 236, 194);
	noStroke();
	ellipse(372, 600, 157, 246); //right arm

	fill(244, 224, 181); // shadow skin color 
	noStroke();
	ellipse(250, 324, 32, 25); // nose shadow

	fill(255, 236, 194); // skin color
	noStroke();
	ellipse(250, 319, 32, 23); // nose

	fill(244, 224, 181);
	noStroke();
	ellipse(250.5, 416, 131, 32); //chin shadow 

	fill(255, 236, 194);
	noStroke();
	ellipse(250.5, 409, 133, 20); // chin

	fill(244, 224, 181); 
	noStroke();
	ellipse(128, 590, 23, 78); //left arm SHADOW

	fill(244, 224, 181); 
	noStroke();
	ellipse(375, 590, 23, 78); //right arm SHADOW

	fill(0); //shirt color
	noStroke();
	rect(130, 477, 15, 126); //shirt strap left

	fill(0);
	noStroke();
	rect(360, 477, 15, 126); // shirt strap right 

	fill(0);
	noStroke();
	rect(138, 553, 226, 47); //tank middle 

	fill(255, 236, 194); 
	noStroke();
	ellipse(252.5, 553, 215.5, 27); // circle skin color to make curve for tank 

	fill(24, 16, 0);
	noStroke();
	ellipse(184, 242, 85, 43); //left eyebrow 

	fill(255, 236, 194); 
	noStroke();
	ellipse(184, 246, 97, 35.5); // makes shape for left eyebrow 

	fill(24, 16, 0);
	noStroke();
	ellipse(318, 243, 85, 43); // right eyebrow

	fill(255, 236, 194);
	noStroke();
	ellipse(318, 248, 97, 35.5); //makes shape for right eyebrow

	fill(0);
	noStroke();
	ellipse(175, 262, 135, 36); // left sun glass frame black

	fill(0, 18, 108);
	noStroke();
	ellipse(175, 262, 121, 19); //blue left frame of sunglasses

	fill(0);
	noStroke();
	rect(236, 258, 26, 6); //middle of sunglasses

	fill(0);
	noStroke();
	ellipse(324, 262, 135, 36); //right sun glass frame black

	fill(0, 18, 108);
	noStroke();
	ellipse(323, 262, 121, 19); //blue right frame of sunglasses
}