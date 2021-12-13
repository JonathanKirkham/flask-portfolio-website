// GET & DISPLAY CURRENT YEAR
let currentYear = new Date().getFullYear(),
    currentDate = `&copy; Copyright ${currentYear} Jonathan Kirkham`;
document.getElementById("copyright").innerHTML = currentDate;
// END OF GET & DISPLAY CURRENT YEAR