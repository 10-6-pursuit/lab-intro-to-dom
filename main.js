//Note to reader: When I first learned about DOM I tried to create each element and then append, which took forever. After some research I have learned to do this a little more effectively and cleaner. Learned about other various topics like: DOMContentLoaded, and creating my own variables for faster and easier code implementation. Next step is Browser Routing & History API


window.addEventListener("DOMContentLoaded", () => {
  //Creating global variable, so I don't have to call querySelector all the time, much faster and cleaner for me. 
  //For global selection
  const $ = function(args) { 
    return document.querySelector(args);
  }

  const $$ = function(args) { 
    return document.querySelectorAll(args);
  }

  //for element selection
    HTMLElement.prototype.$ = function(s) {
    return this.querySelector(s);
  };

  HTMLElement.prototype.$$ = function(s) {
    return this.querySelectorAll(s);
  };

  //Add class of "featured" to first section
  const section = $("section")
  section.classList.add("featured");

  //Create article element with following children.
  //Append to section.posts
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
</aside>
</article>
  `
  //appended article to section.posts
  const post = $(".posts");
  post.appendChild(article);

  //Swapping first and second article in sections.posts
  const articles = post.$$("article");
  post.insertBefore(articles[1], articles[0]);

  //Removing "All Posts" link from the header
  $("header a").remove();

  //Remove the span element on first post
  section.$("span").remove();

  //Remove last post titled "Stop".
  //We created it above, so just remove that variable
  article.remove();

  //Remove titles from non-featured posts.
  //That is all the posts under class="posts"
  const titles = post.$$("h3")
  titles.forEach((e) => {
    e.remove();
  })
})

