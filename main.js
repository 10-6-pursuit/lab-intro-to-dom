const section = document.querySelector("section");

section.classList.add("featured");

const newArticle = document.createElement("article");

const newImage = document.createElement("img");

newImage.setAttribute(
    "src",
    "./images/paul-gilmore-unsplash.jpg"
)

newImage.setAttribute(
    "alt",
    "Image of a mountain in front of a lake."
)

newArticle.append(newImage)

const newH3 = document.createElement("h3")

newArticle.append(newH3)

newH3.innerText = "Stop Planning"

const newP = document.createElement("p")

newP.innerText = "You -- yes you! You're an over-planner, I can tell.  It's time to stop planning so much and instead focusing on relaxing.  Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"

newArticle.append(newP)

const newAside = document.createElement("aside")

const asideP = document.createElement("p")

const asidePSpan = document.createElement("span")

const asidePA = document.createElement("a")

asidePA.innerText = "Read more..."

asidePA.setAttribute(
    "href",
    "#"
)

const asidePSpanStrong = document.createElement("strong")

asidePSpanStrong.innerText = "Read Time:"

asidePSpan.append(asidePSpanStrong)

asidePSpan.append(" 4 Minutes")

asideP.append(asidePSpan)

asideP.append(asidePA)

newAside.append(asideP)

newArticle.append(newAside)

const sectionPosts = document.querySelector("section.posts")

sectionPosts.append(newArticle)

const firstPost = document.querySelector("section.posts article")

newArticle.before(firstPost)

const firstUl = document.querySelector("ul")

const firstLi = document.querySelector("li")

firstUl.removeChild(firstLi)

const firstSpan = document.querySelector("span")

const firstAsideP = document.querySelector("aside > p")

firstAsideP.removeChild(firstSpan)

sectionPosts.removeChild(newArticle)

const allPostsArticles = document.querySelectorAll("section.posts article")

for (let articles of allPostsArticles) {
    const postsTitles = document.querySelector("section.posts h3")
    articles.removeChild(postsTitles)
}
