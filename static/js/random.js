// GET, RANDOMIZE & DISPLAY BACKGROUND IMAGE IN THE HERO AREA
const randomizeImage = () => {
    let imageArray = [
        "../static/hero/forest.jpg",
        "../static/hero/bridge.jpg",
        "../static/hero/railway.jpg",
        "../static/hero/laptop.jpg",
        "../static/hero/seeking.jpg",
        "../static/hero/space-trees.jpg",
        "../static/hero/galaxy.jpg"
    ],
        randomize = (document.getElementById("hero").style.backgroundImage, Math.floor(Math.random() * imageArray.length));
    document.getElementById("hero").style.backgroundImage = "url(" + imageArray[randomize] + ")";
};
window.onload = randomizeImage;
// END OF GET, RANDOMIZE & DISPLAY BACKGROUND IMAGE IN THE HERO AREA
