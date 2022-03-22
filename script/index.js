import {ProjectCard} from './factory/ProjectClass.js';
import {getData} from './factory/getData.js';


  async function displayData(projects) {
    const photographersSection = document.querySelector(".last_projects");

    projects.forEach((project) => {
        let projectName = project.name;
        let projectImg = project.img;
        let projectLanguage = project.language;
        let projectCode= project.code;
        let projectDescription= project.description;

        const photographerModel = new ProjectCard(projectName,projectImg,projectLanguage,projectCode,projectDescription);
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