export class HardSkillsCard {

    constructor(name, viewBox,path) {
        this.name = name;
        this.viewBox = viewBox;
        this.path = path;
    }
    displayHardSkills() {
        const hardSkillsCard = document.createElement("div");
        hardSkillsCard.classList.add('hard_skills_items')
        hardSkillsCard.innerHTML= `<div class="hard_skills_items">
        <div class="hard_skills_circle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="${this.viewBox}"><path d="${this.path}"/></svg>
        </div>
        <h3>${this.name}</h3>
    </div>`

        return hardSkillsCard;
    }    
}