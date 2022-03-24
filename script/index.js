import {ProjectCard} from './factory/ProjectClass.js';
import {getData} from './factory/getData.js';

  async function displayData(projects) {
    const photographersSection = document.querySelector(".last_projects");

    projects.forEach((project) => {
        let projectName = project.name;
        let projectImg = project.img;
        let projectLanguage = project.language;
        let projectCode= project.code;
        let projectSite= project.site;
        let projectDescription= project.description;

        const photographerModel = new ProjectCard(projectName,projectImg,projectLanguage,projectCode,projectSite,projectDescription);
        const userCardDOM = photographerModel.display();
        photographersSection.appendChild(userCardDOM);
    });
}

// RETOURNER L'AFFICHAGE
const init = async () => {
    const { projects } = await getData();
    displayData(projects);
};
init();


// SMOOTH SCROLLING 
const links = document.querySelectorAll(".li-links");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");

    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
    });
}

// INTERSECTION OBSERVER API

const threshold = .1
const options = {
	root:null,
	rootMargin:'0px',//a partir de combien de marges faut il depasser pour etre visible
	threshold//a partir de 10% d'element on commence a faire apparaitre lelement
}

const handleIntersect = function (entries, observer) {
	entries.forEach(function (entry) {
	  if (entry.intersectionRatio > threshold) {
			entry.target.classList.add('reveal-visible');
			observer.unobserve(entry.target);
		} 
	});
}
const observer = new IntersectionObserver(handleIntersect ,options)
document.querySelectorAll('.reveal').forEach(function(r){
	observer.observe(r)
})
