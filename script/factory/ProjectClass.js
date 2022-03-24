export class ProjectCard {

    constructor(name, img, language,code,site,description) {
        this.name = name;
        this.img = img;
        this.language = language;
        this.code = code;
        this.site = site;
        this.description = description;
    }
    display() {
        const card = document.createElement("last_projects_box");
        card.innerHTML= `<div class="project_box">
            <div class="project_txt">
                <h3>${this.name}</h3>
                <p>${this.description}</p>
                <h4>Languages utilisés : ${this.language}</h4>
                <a href="${this.code}"><h5>Code Source</h5></a>

            </div>
            <div class="project_img">
                <img src="/img/projects/${this.img}" alt="${this.name}">
                <div class="middle">
                    <a href="${this.site}"> <div class="text">Voir le site</div></a>
                </div>
            </div>
        </div>
        <div class="half_line"></div>`

        return card;
    }    
}