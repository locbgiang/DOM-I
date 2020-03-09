const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const aSelect = document.querySelectorAll('a');
aSelect[0].textContent = siteContent.nav[`nav-item-1`];
aSelect[1].textContent = siteContent.nav["nav-item-2"];
aSelect[2].textContent = siteContent.nav["nav-item-3"];
aSelect[3].textContent = siteContent.nav["nav-item-4"];
aSelect[4].textContent = siteContent.nav["nav-item-5"];
aSelect[5].textContent = siteContent.nav["nav-item-6"];


let title = document.querySelector('h1');
title.innerHTML = siteContent.cta.h1;

let btn = document.querySelector('button');
btn.textContent = siteContent.cta.button;

let headImg = document.getElementById("cta-img");
headImg.setAttribute('src', siteContent["cta"]["img-src"])

let textTittle = document.querySelectorAll('h4');
textTittle[0].textContent = siteContent["main-content"]["about-h4"];
textTittle[1].textContent = siteContent["main-content"]['features-h4'];
textTittle[2].textContent = siteContent["main-content"]['services-h4'];
textTittle[3].textContent = siteContent["main-content"]['product-h4'];
textTittle[4].textContent = siteContent["main-content"]['vision-h4'];
textTittle[5].textContent = siteContent.contact["contact-h4"];

let textPara = document.querySelectorAll('p');
textPara[0].textContent = siteContent["main-content"]["features-content"];
textPara[1].textContent = siteContent["main-content"]["about-content"];
textPara[2].textContent = siteContent["main-content"]["services-content"];
textPara[3].textContent = siteContent["main-content"]["product-content"];
textPara[4].textContent = siteContent["main-content"]["vision-content"];
textPara[5].innerHTML = `${siteContent.contact.address}</br>${siteContent.contact.phone}</br>${siteContent.contact.email}`;

let midPic = document.getElementById("middle-img");
midPic.setAttribute('src',siteContent["main-content"]['middle-img-src']);
