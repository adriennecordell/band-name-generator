import inquirer from 'inquirer';
import { generateSlug } from 'random-word-slugs'
import chalkAnimation from "chalk-animation"


inquirer.prompt([
    {
        type: "number",
        name: "length",
        message: "How long should the band name be?",
        default: 3
    },
    {
        type: "list",
        name: "animationName",
        question: "Which animation would you like to use?",
        default: "rainbow",
        choices: ["rainbow", "pulse", "neon", "glitch", "radar" ]
    }
])
    .then((answers) => {
        console.log(answers)

        const bandName = generateSlug(answers.length, {format: "title"})

        chalkAnimation.rainbow(bandName)

        if (answers.animationName === 'pulse') {
            chalkAnimation.pulse(bandName)
        } else if (answers.animationName === 'neon') {
            chalkAnimation.neon(bandName) 
        } else if (answers.animationName === 'rainbow') {
            chalkAnimation.rainbow(bandName) 
        } else if (answers.animationName === 'glitch') {
            chalkAnimation.glitch(bandName) 
        } else if (answers.animationName === 'radar') {
            chalkAnimation.radar(bandName) 
        }

        
    })
    .catch(error => console.log(error))