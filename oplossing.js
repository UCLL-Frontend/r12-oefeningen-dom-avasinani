/* oef 1 */
const button = document.getElementById('changeTitle');
const title = document.getElementById('title');

button.addEventListener('click', function() {
    title.textContent = "JavaScript is geweldig!";
});

/* oef 2 */
const paragraph = document.getElementById('paragraph');
const tekstButton = document.getElementById('addText');

tekstButton.addEventListener('click', () => {
   paragraph.textContent += "Hier is extra tekst";
});

/* oef 3 */
const kleurButton = document.getElementById('changeColor');
const achtergrondKleur = document.getElementById('colorBox');

kleurButton.addEventListener('click', () => {
    const rood = Math.round(Math.random() * 255);
    const groen = Math.round(Math.random() * 255);
    const blauw = Math.round(Math.random() * 255);
    colorBox.style.backgroundColor = `rgb(${rood},${groen},${blauw})`;
});

/* oef 4 */
const verbergButton = document.getElementById('hideText');
const verbergTekst = document.getElementById('text');

verbergButton.addEventListener('click', () => {
    text.style.display = 'none';
});

/* oef 5 */

