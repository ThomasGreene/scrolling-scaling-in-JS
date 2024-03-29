const audrey = document.getElementById("audrey")

const container = document.querySelector("#container")

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
document.addEventListener("scroll", function (event) {
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */
    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
audrey.style.height = window.scrollY / 4 + "px"
audrey.style.width = window.scrollY / 3 + "px"

    console.log(window.scrollY);
})
    