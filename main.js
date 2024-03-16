const firstSection = document.querySelector("section");
firstSection.classList.add("featured");

console.log(firstSection.innerHTML);



const newArticle = document.createElement("article");
newArticle.innerHTML =  `<img
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

const postSection = document.querySelector("section.posts");
const firstArticle = document.querySelector(".post article");
firstArticle.remove();

postSection.append(firstArticle);

const allPostLink = document.querySelector("li");
allPostLink.remove();

const firstSpan = document.querySelector("span");
firstSpan.remove();
