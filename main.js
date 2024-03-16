document.querySelector("section").classList.add("featured");
const article = document.createElement("article");


article.innerHTML = `<img
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

const post = document.querySelector(".posts");

post.appendChild(article);
post.querySelector("article").nextSibling.nextSibling.after(post.querySelector("article"));

post.lastChild.remove();

const postTitleCollection = document.querySelectorAll("h3");

for (let postTitle of postTitleCollection) {
    postTitle.remove();
}

const firstAsideP = document.querySelector("aside > p");

const firstSpan = document.querySelector("span");

firstAsideP.removeChild(firstSpan);

const allPostLinks = document.querySelector("li");
allPostLinks.remove();