/* This would return a node list consisting of all with the class of panel */
const panels = document.querySelectorAll(".panel")

/* To loop through this nodelist */
panels.forEach((panel)=>{
    panel.addEventListener("click",()=>{
        removeActiveClasses();
        panel.classList.add("active") // This adds the active class to whatever panel is clicked
    })
})

/* Adding a function to remove the active class when */

function removeActiveClasses() {
    panels.forEach((panel)=>{
        panel.classList.remove("active")
    })
}