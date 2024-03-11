let section=document.querySelector(`section`)

section.classList.add(`featured`);
let article=document.createElement(`article`);
article.classList.add(`new`)

// let a=document.querySelector(`.new`)



let image=document.createElement(`img`)

image.setAttribute(`src`,"./images/paul-gilmore-unsplash.jpg")
image.setAttribute(`alt`,"Image of a mountain in front of a lake.")

let firstH3=document.createElement(`h3`)
 firstH3.textContent=`Stop Planning`;
 let firstP=document.createElement(`p`);
 firstP.textContent=`You -- yes you! You're an over-planner, I can tell. It's time to stop
 planning so much and instead focusing on relaxing. Taking a break at all is
 so stressful these days; why add to the stress by overworking yourself?`;

article.append(image)


article.append(firstH3)
article.append(firstP)


 let aside=document.createElement(`aside`)
 let secondP=document.createElement(`p`)
 let span=document.createElement(`span`)
 let strong=document.createElement(`strong`)
 strong.textContent=`Read Time:`
span.textContent=` 4 Minutes`
span.prepend(strong)
//  span.textContent=strong
 let a=document.createElement(`a`)
 a.textContent=`Read more`
 a.setAttribute(`href`,`#`)
 secondP.append(span)
 secondP.append(a)
 aside.append(secondP)
 article.append(aside)

 let posts=document.querySelector(`.posts`)

 posts.append(article)
let art=document.querySelector(`.posts article`)

posts.appendChild(art)

let link=document.querySelector(`header li`)

link.textContent=``
let sp=document.querySelector(`.featured span`)

sp.textContent=``
//  const ul=document.querySelector(`ul`)

//  const li=document.querySelector(`li`)

//  ul.removeChild(li)
firstH3.textContent=`` 
firstP.textContent=``
 
 


 
 


