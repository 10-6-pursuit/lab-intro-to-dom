var sections = document.getElementsByTagName('section');
if(sections){
    sections[0].className = "featured";
}

var postsCollection = document.getElementsByClassName("posts");
var postsSection = postsCollection[0];
if(postsCollection){
    var newArticle = `<article>
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
  </article>`
  postsSection.insertAdjacentHTML('afterend', newArticle);
}

var articles = postsSection.children;
postsSection.prepend(articles[1]);

var allPostsLink = document.getElementsByTagName('a')[0];
allPostsLink.remove();

var spans = document.getElementsByTagName('span');

for(var i=0; i<spans.length; i++){
    if(spans[i].innerText.indexOf('Read') != -1){
        spans[i].remove();
    }
}


var allArticles = document.getElementsByTagName('article');
if(allArticles){
    allArticles[allArticles.length-1].remove();
}

var nonFeaturedTitles = document.getElementsByTagName('h3');

nonFeaturedTitles[0].remove()
nonFeaturedTitles[0].remove();