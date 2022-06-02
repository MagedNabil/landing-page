
/**
 * Define sections & navigationBar .
 * sections ==> array of all sections .
 * navigationBar ==> unorderdList to contain listItems .
*/


const sections = [...document.querySelectorAll('section')];
const navigationBar = document.getElementById('navbar__list');



/**
 * Define craetListItem function .
 * craetListItem function ==> use to creat listItems debending on number of sections in sections array .
*/

function craetListItem() {

    const Defrag = document.createDocumentFragment();

    for (const section of sections) {

        const listItem = document.createElement('li');
        const anchorLink = section.getAttribute('id');
        const anchorDataNav = section.getAttribute('data-nav');
        listItem.innerHTML = `<a href=" #${anchorLink}" class="menu__link" id="${anchorDataNav}" data-nav="${anchorDataNav}" >${anchorDataNav} </a>`;
        Defrag.appendChild(listItem);
    }
    navigationBar.appendChild(Defrag);
}
craetListItem();


/**
 * now we define and use links to move between sections smoothly .
 * links as an array of all anchors in the ul .
*/


const links = [...document.querySelectorAll('a')];

links.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // donot move .
        const active = document.querySelector(this.getAttribute('href'));   //get the active link .
        active.scrollIntoView({ behavior: 'smooth' });     // move in smooth way .
    });
});



/**
 * check which section is on the screen right now while scrolling and give it the active class "your-active-class" .
 * using getBoundingClientRect().top  checking if the section in the topside from 0 to 250 .
*/



function setActiveClasses() {

    sections.forEach(section => {

        const secDataNav = section.getAttribute('data-nav');
        const activeLink = document.getElementById(`${secDataNav}`);  // because we gived the link id equals to section attribute " data-nav " value .
        const secTop = section.getBoundingClientRect().top; // check if the section is on the screen "active" .

        if (secTop >= 0 && secTop <= 250) { // checking from 0 to 250 .
            section.classList.add("your-active-class");  //add the active class to the active section .
            activeLink.classList.add("active_Link");   //add active_link class to the active link .
        } else {
            section.classList.remove("your-active-class");   //remove the active class from the un active section .
            activeLink.classList.remove("active_Link");   //remove active_link class from the unactive link .
        }
    })

}

window.addEventListener("scroll", setActiveClasses);





