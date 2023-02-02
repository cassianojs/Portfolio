import sudoku from "./assets/sudoku.png"
import headshot from "./assets/thumbs-up2.png"
import comingSoon from "./assets/coming-soon.png"

export default [
    {
        id: 1,
        title: "This Website!",
        description: "I created this website from scratch using React (and obviously HTML, CSS and JavaScript)",
        img: headshot,
        liveLink: "https://cjsantos.me/",
        sourceCode: "https://github.com",
    },
    {
        id: 2,
        title: "Sudoku Solver",
        description: "This app will return the solution for any Sudoku board that has a valid solution",
        img: sudoku,
        liveLink: "https://cjsantos.me/Sudoku-Solver",
        sourceCode: "https://github.com/cassianojs/Sudoku_Solver",
    },
    {
        id: 3,
        title: "Coming Soon",
        description: "Working on something quickly to add here",
        img: comingSoon,
        liveLink: "https://cjsantos.me/project3",
        sourceCode: "https://github.com",
    }
]