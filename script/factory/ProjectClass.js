export class ProjectCard {

    constructor(name, img, language,code,description) {
        this.name = name;
        this.img = img;
        this.language = language;
        this.code = code;
        this.description = description;
    }
    display() {
        const card = document.createElement("last_projects_box");
        card.innerHTML= `<div class="project_box">
            <div class="project_txt">
                <h3>${this.name}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta, tortor in cursus ullamcorper, ante risus convallis ipsum, ac molestie lectus arcu at risus. Phasellus a arcu scelerisque, laoreet nulla non, ultricies enim. Mauris ultricies erat sed lacus placerat, vitae pellentesque lacus blandit. Nullam id nisi eu libero consequat posuere ut at eros. Curabitur non lacus fermentum nisl lacinia suscipit vel eget ex. Phasellus ultrices metus vitae leo efficitur, vel ultrices purus pharetra. Fusce efficitur, justo eget rhoncus sodales, neque nisi lacinia neque, quis luctus lacus ligula quis purus. Proin massa arcu, fermentum nec felis eget, mattis lobortis orci. Praesent et quam a nulla varius facilisis.</p>
                <h4>Languages utilisés: JS , HTML , CSS</h4>
                <h5>Code Source</h5>
            </div>
            <div class="project_img">
                <img src="/img/qualite-de-vie-equilibre.png" alt="">
            </div>
        </div>`
        return card;
    }    
}