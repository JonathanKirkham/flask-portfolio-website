class TypeWriter {
    constructor(txtElement, words, wait) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = !1;
    }

    type() {
        // CURRENT INDEX OF WORD
        const current = this.wordIndex % this.words.length;
        // GET FULL TEXT OF CURRENT WORD
        const fullTxt = this.words[current];

        // CHECK IF IS DELETING 
        this.isDeleting
            ? this.txt = fullTxt.substring(0, this.txt.length - 1) // REMOVE CHARACTER
            : this.txt = fullTxt.substring(0, this.txt.length + 1); // ADD CHARACTER

        // INSERT TXT ELEMENT
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // INITIAL TYPE SPEED
        let typeSpeed = 220;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        // IF THE WORD IS COMPLETE
        if (!this.isDeleting && this.txt === fullTxt) {
            // PAUSE AT THE END
            typeSpeed = this.wait;
            // SET ISDELETING TO 1 OR TRUE
            this.isDeleting = 1;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // MOVE TO NEXT WORD
            this.wordIndex++;
            // PAUSE BEFORE TYPING 
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}


// INIT ON DOM LOAD
document.addEventListener('DOMContentLoaded', init);

// INIT THE TYPEWRITER
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}
// END OF TYPEWRITER

// SCROLL BACK TO TOP OF SCREEN & SCROLL INTO VIEW (ABOUT, SKILLS, PROJECTS, CONTACT)
const links = document.querySelector(".nav-links");
let element;
function scrollUp() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
links.addEventListener("click", () => {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
}),
    document.getElementById("scroll-to-top").addEventListener("click", scrollUp);
// END OF SCROLL FUNCTIONALITY


