// 1 ----------------------------------------------------------
const section1 = document.querySelector("section");
section1.classList.add("featured");

//2  ----------------------------------------------------------
const sectionPost = document.querySelector(".posts");
const article = document.createElement("article");
article.innerHTML = `
<img
src="./images/paul-gilmore-unsplash.jpg"
alt="Image of a mountain in front of a lake."
/>
<h3>Stop Planning</h3>
<p>
You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all is
so stressful these days; why add to the stress by overworking yourself?
</p>
<aside>
<p>
  <span><strong>Read Time:</strong> 4 Minutes</span
  ><a href="#">Read more...</a>
</p>
</aside>`;
sectionPost.append(article);

// 3----------------------------------------------------------
const firstEle = sectionPost.children[0];
const secondEle = sectionPost.children[1];
sectionPost.insertBefore(secondEle, firstEle);

// 4----------------------------------------------------------
const linkList = document.querySelector("ul");
linkList.children[0].remove();

//5 ----------------------------------------------------------
const readTimeSpan = section1.querySelector("span");
readTimeSpan.remove();
//6 ----------------------------------------------------------
article.remove();
// 7----------------------------------------------------------
const sectionPostList = sectionPost.querySelectorAll("article");
sectionPostList.forEach((ele) => ele.querySelector("h3").remove());

