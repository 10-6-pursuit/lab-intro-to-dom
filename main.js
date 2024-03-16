document.querySelector("section").classList.add("featured");

const sectionArticle = document.createElement("article");

document.querySelector(".posts").appendChild(sectionArticle);

sectionArticle.innerHTML = `<img
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

const firstArticle = document.querySelector(".posts article");
firstArticle.remove();

const postsSection = document.querySelector("section.posts");
postsSection.append(firstArticle);

const linkAP = document.querySelector("li");
linkAP.remove();

const firstSpan = document.querySelector("span");
firstSpan.remove();

const lastPost = document.querySelectorAll("article")[2];
lastPost.remove();

const allNonFeaturedArticles = document.querySelectorAll(".posts h3");
for (const article of allNonFeaturedArticles) {
    article.remove();
}