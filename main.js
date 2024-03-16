const featured = document.querySelector("section").classList.add("featured");

const post = document.createElement("article");
post.innerHTML = `<img
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
const element = document.querySelector(".posts");

const firstArticle = document.querySelector(".posts article");
firstArticle.remove();
element.appendChild(firstArticle);
element.appendChild(post);

const allPosts = document.querySelector("li");
allPosts.remove();

const readTime = document.querySelector("span");
readTime.remove();

const lastPost = document.querySelectorAll("article")[3];
lastPost.remove();

const titles = document.querySelectorAll("h3");
for (let tite of titles) {
    tite.remove();
} 