mapboxgl.accessToken = 'pk.eyJ1IjoiYmVuaWFzMTA0IiwiYSI6ImNscWIyM2c1ZjFmbGEycm54MnZlcGxxaGwifQ._vysB-hxbUH8LHtugRcnCA';
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/benias104/clqb1uiyz008v01o39l2ccs6d',
center: [16.920,52.427] ,// starting position [lng, lat]
zoom: 17 // starting zoom
});
const CommentOutput = document.querySelector('.output-container');
CommentOutput.style.display = 'none'
function submitComment() {
    const nameInput = document.getElementById("nameInput").value;
    const commentInput = document.getElementById("commentInput").value;
    CommentOutput.style.display = 'block';

    // Display the inputs in the output container
    document.getElementById("nameOutput").textContent = "User: " + nameInput;
    document.getElementById("commentOutput").textContent = "Said: " + commentInput;

}
//loading all the elements properly onto the site
document.addEventListener("DOMContentLoaded", () => {
    var images = document.getElementById("images");
    var prevbtn = document.getElementById("prev");
    var nextbtn = document.getElementById("next");
    var wrapperDiv = document.querySelector(".wrapper");
    var img = wrapperDiv.getElementsByTagName("img"); 
// line 26: IMPORTANT (thanks to it I only target specific
// images as opposed to every image on the site)
    var position = 0;
// function changeImage with the help of eventlisteners from lines
//43 and 48 makes the photos change as they're put in a line
//and this function simply changes their position by the width
//of the carousel (600px)
    function changeImage() {
        if (position > img.length - 1) {
            position = 0;
        } else if (position < 0) {
            position = img.length - 1;
        }
        images.style.transform = `translateX(${-position * 600}px)`;
    }

    nextbtn.addEventListener("click", () => {
        position++;
        changeImage();
    });

    prevbtn.addEventListener("click", () => {
        position--;
        changeImage();
    });
});