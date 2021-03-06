export const getData = () => fetch("./data/projects.json", {mode: 'no-cors'})
.then(res => res.json())
.catch(err => console.log("An error occurs when fetching projects", err))

export const getHardSkillsData = () => fetch("./data/hardSkills.json", {mode: 'no-cors'})
.then(res => res.json())
.catch(err => console.log("An error occurs when fetching hard skills", err))