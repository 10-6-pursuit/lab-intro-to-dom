let article = document.createElement("article");

let sectionPost = document.querySelector("section.posts");

let h3 = document.createElement("h3");
let img = document.createElement("img");
let p = document.createElement("p");
let aside = document.createElement("aside");
let p2 = document.createElement("p");
let span = document.createElement("span");
let strong = document.createElement("strong");
let a = document.createElement("a");

img.setAttribute("src","./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt","Image of a mountain in front of a lake.");

h3.innerText = "Stop Planning";

p.innerText = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all is
so stressful these days; why add to the stress by overworking yourself?`

strong.innerText = "Read Time:";

a.setAttribute("href","#");
a.innerText = "Read more...";

sectionPost.append(article);

article.append(img);
article.append(h3);
article.append(p);
article.append(aside);
aside.append(p2);
span.append(strong);
p2.append(span);
span.append(" 4 Minutes");
p2.append(a);

