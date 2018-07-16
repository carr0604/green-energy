// Load your images on page-load
function preloader() {
    const imagesList = [
           "../img/slide-one.jpg",
           "../img/slide-two.JPG",
           "../img/slide-three.JPG"
        ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};
window.addEventListener("load", preloader);


/* 
Get all buttons in a NODE LIST of buttons (array like structure) */


/* 
Complete your resource-object that will store the dynamic content.
Resource object should 3 sub-objects. Give your sub-objects
meaningful names. Every sub-object should have the following
properties headingContent, bodyText, imgUrl and imgAlt. */
const resources = {
    
    buttonone: {
        title: "Green Energy Doesn't Have to be Expensive!",
        url: "./img/slide-one.jpg",
        bodyTxt: "In an age where many people are becoming dependent on technology, it has become more important than ever to observe our ecological footprint. Despite popular belief, it is actually quite easy to cut down on your power use. Be sure to know how much power you are using on a daily/weekly basis and where said energy comes from. By taking note of how much you consume on a weekly basis, it becomes easier to pinpoint ways to cut down your electrical usage."
    },
    
    buttontwo: {
        title: "Finding Energy Alternatives",
        url: "./img/slide-two.JPG",
        bodyTxt: "It has become easier than ever to get access to sustainable power solutions like wind and solar power. A solar generator for example, can be bought for a little as 150$ on Amazon. Adjusting your diet to consume fewer processed and mass-produced food can also help the environment in the long run, the factories that produce these products run on massive amounts of power."
    },
    
    buttonthree: {
        title: "Doing the Research",
        url: "./img/slide-three.JPG",
        bodyTxt: "Having access to renewable energy, resources that replenish quicker than we use them, has become more important than ever. Though these aren’t always easy to access, we live in an age where creative individuals are offering new solutions to live sustainably every day. By continuously researching ways to live a sustainable lifestyle, you too can significantly reduce your ecological footprint. "
    },
}



/* 
Get the reference to your HTML-container
that will be dynamically loaded from the resource-object. */
const container = document.querySelector(".textarea");
const pic = document.querySelector(".pic-area");

/* 
The first button in a NODE LIST of buttons will initially 
have the id: active-button - this will uniquely style 
the active button (CSS rule). 
    
The first content from the
resource-object will be loaded on the page load:
`<h1>${headingContent}</h1>
 <img src="${imgUrl}" alt="${imgAlt}">
 <p>${bodyText}</p>` */

const btns = document.querySelectorAll("button");


container.innerHTML = `<h1>${resources.buttonone.title}</h1>
                       <p>${resources.buttonone.bodyTxt}</p>`;


pic.innerHTML = `<img src='${resources.buttonone.url}'>`;


/* 
Start your handleSelection function here. */
function handleSelection(e) {
    /* 
    Remove the id active-button from the element that
    contains it prior to the click-event. 

    This will require the loop throught the NODE LIST of buttons. 
    Inside the loop, use conditional and the element object method
    hasAttribute() to check if the current button in the loop containes the id.
    If it does, use element-object property removeAttribute()
    to remove the id. */
    for(var i=0; i < btns.length; i++) {    
        if(btns[i].hasAttribute("id") == true) {
           btns[i].removeAttribute("id"); 
        }
    /*
    Use the element-object method setAttribute() to set the id active-button 
    to the currently clicked button. */
        e.target.setAttribute("id","selected");
    }
    
    /* 
    Use conditional and event-object to check which button is clicked
    and based on that, create HTML with the data inside the backticks:
    `<h1>${headingContent}</h1>
     <img src="${imgUrl}" alt="${imgAlt}">
     <p>${bodyText}</p>`
    Assign this content to to your HTML-container that will 
    be dynamically loaded (you already got the reference to 
    this container before you started the function handleSelection) */
    
    if(e.target.textContent === "1"){
        pic.innerHTML = `<img src='${resources.buttonone.url}'>`;
        container.innerHTML = `<h1>${resources.buttonone.title}</h1>
        <p>${resources.buttonone.bodyTxt}</p>`;
   } 
    else if(e.target.textContent === "2"){
        pic.innerHTML = `<img src='${resources.buttontwo.url}'>`;
        container.innerHTML = `<h1>${resources.buttontwo.title}</h1>
        <p>${resources.buttontwo.bodyTxt}</p>`;   
   } 
    else if(e.target.textContent === "3"){
        pic.innerHTML = `<img src='${resources.buttonthree.url}'>`;
        container.innerHTML = `<h1>${resources.buttonthree.title}</h1>
        <p>${resources.buttonthree.bodyTxt}</p>`;  
   }
    /* 
    Close your handleSelection function here. */
}

/* 
Register all buttons to click event. The event-handler handleSelection will listen 
for this event to happen. */

btns[0].addEventListener("click", handleSelection);
btns[1].addEventListener("click", handleSelection);
btns[2].addEventListener("click", handleSelection);
