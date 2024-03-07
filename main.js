// get element by the tag name, in this case we're looking for first section so it's index 0. 
// add a class by using classList.add()
document.getElementsByTagName("section")[0].classList.add("featured");

//Create an article element
const article = document.createElement("article");

//Create an img tag
const img = document.createElement("img");
//Add the source and alt to the img
img.src = "./images/paul-gilmore-unsplash.jpg";
img.alt = "Image of a mountain in front of a lake.";

//add h3 tag
const headerThree = document.createElement("h3");
headerThree.textContent = "Stop Planning";

//add a p tag
const paragraph = document.createElement("p");
// paragraph.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop
// planning so much and instead focusing on relaxing. Taking a break at all is
// so stressful these days; why add to the stress by overworking yourself?";

const aside = document.createElement("aside");
const asidePara = document.createElement("p");


