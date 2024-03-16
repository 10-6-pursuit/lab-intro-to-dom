//Add a class of "featured" to the first section element on the page.

const firstSection = document.querySelector("section");

firstSection.classList.add("featured");


//----------------------------------------------------------------------

//Create the following article element with JavaScript 
//and add at the end of the section.posts element.

const sectionPosts = document.querySelector(".posts");

const article = document.createElement("article");

const image = document.createElement("img");
image.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
image.setAttribute("alt", "Image of a mountain in front of a lake.");

const postTitle = document.createElement("h3");
postTitle.innerText = "Stop Planning";

const paragraph = document.createElement("p");
paragraph.innerText = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all is
so stressful these days; why add to the stress by overworking yourself?`

const aside = document.createElement("aside");

const paragraph2 = document.createElement("p");

const span = document.createElement("span");

const strong = document.createElement("strong");
strong.innerText = "Read Time: ";

span.innerText = " 4 minutes ";

const anchor = document.createElement("a");
anchor.setAttribute("href", "#");
anchor.innerText = "Read more..."

//----------------------------------------------------------------------

//Move the first article from inside the section.posts element 
//to become the second article and move the second article so that it is the first article.

const postsSection = document.querySelector(".posts")

const firstArticle = document.querySelector(".posts article");
firstArticle.remove();

postsSection.append(firstArticle);

//----------------------------------------------------------------------


//Remove the "All Posts" link from the header.

const allPosts = document.querySelector("li");
allPosts.remove();

//----------------------------------------------------------------------

//Remove the span element that contains the "Read Time" in the featured post. The featured post is the first post on the page.

const firstSpan = document.querySelector("span");
firstSpan.remove();

//----------------------------------------------------------------------

//i have to append all this elements in order to delete them later

 sectionPosts.appendChild(article);
 article.append(image, postTitle, paragraph, aside);
 aside.appendChild(paragraph2);
 paragraph2.append(strong, span);
 span.append(anchor);

//----------------------------------------------------------------------


//Remove the last post from the page, titled "Stop Planning".

const lastPost = document.querySelectorAll("article")[3];
lastPost.remove();

//----------------------------------------------------------------------

//Remove all titles from all non-featured posts.

const titleArticles = document.querySelectorAll(".posts h3");
for(let title of titleArticles ) title.remove();