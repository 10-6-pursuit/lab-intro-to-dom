const firstSection = document.querySelector("section");
firstSection.classList.add("featured");

console.log(firstSection.innerHTML);

const newArticle = document.createElement("article");

newArticle.innerHTML =`<img
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
</aside>`

// const postsSection = document.querySelector("section.posts");
const element = document.querySelector(".post")
const firstArticle = document.querySelector(".posts article");
firstArticle.remove();

element.appendChild(firstArticle);
element.appendChild(newArticle);

const allPostsLink = document.querySelector("li");
allPostsLink.remove();

const allFirstSpan = document.querySelector("span");
allFirstSpan.remove();

const lastPost = document.querySelectorAll("article")[3];
lastPost.remove();

const allNonFeaturedArticles = document.querySelectorAll(".posts h3");
article.remove();
