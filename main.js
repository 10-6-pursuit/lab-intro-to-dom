// Add a class of "featured" to the first section element on the page.
const section = document.querySelector('section');
section.classList.add('featured');

// Create new article and add at the end of the section.posts element
const newArticle = document.createElement('article');
document.querySelector('.posts').appendChild(newArticle);

// Add article content (img, h3, p, aside)
const img = document.createElement('img');
img.src =
  'https://media.istockphoto.com/id/1136634629/photo/young-traveler-planning-vacation-trip-and-searching-information-or-booking-hotel-on-laptop.jpg?s=612x612&w=0&k=20&c=TVaSa0RQroAVXf2vt5chIeckxj03H5KtZYdCI_85hjg=';
img.alt = 'Planning a trip.';
newArticle.appendChild(img);

const h3 = document.createElement('h3');
h3.innerText = 'Stop Planning';
newArticle.appendChild(h3);

const p = document.createElement('p');
p.innerText =
  "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
newArticle.appendChild(p);

const aside = document.createElement('aside');
newArticle.appendChild(aside);

const asideP = document.createElement('p');
aside.appendChild(asideP);

const span = document.createElement('span');
asideP.appendChild(span);
span.innerHTML = '<strong>Read Time:</strong>';

const a = document.createElement('a');
asideP.appendChild(a);
a.href = '#';
a.innerHTML = 'Read more...';

// Move the first article from inside the section.posts element to become the second article and move the second article so that it is the first article.
const articles = document.querySelectorAll('section.posts article');
const articleParent = document.querySelector('section.posts');
const firstArticle = articles[0];

firstArticle.remove();
articleParent.append(firstArticle);

// Remove the "All Posts" link from the header
const allPosts = document.querySelector('a');
allPosts.remove();

// Remove the span element that contains the "Read Time" in the featured post. The featured post is the first post on the page
const featuredArticle = document.querySelector('.featured');
const readTimeSpan = featuredArticle.querySelector('span');
readTimeSpan.remove();

// Remove the last post from the page, titled "Stop Planning".
newArticle.remove();

// Remove all titles from all non-featured posts.
const titles = document.querySelectorAll('h3');

for (const title of titles) {
  title.remove();
}
