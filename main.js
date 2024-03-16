const postsSection = document.querySelector("section.posts");
const firstArticle = document.querySelector(".posts article");
firstArticle.remove();

postsSection.append(firstArticle);
postsSection.append(newArticle);

const allPostsLink = document.querySelector("li");

const allFirstSpan = document.querySelector("span");
allFirstSpan.remove();

const lastPost = document.querySelectorAll("article")[3];
lastPost.remove();

const allNonFeaturedArticles = document.querySelectorAll(".posts h3");
article.remove();
