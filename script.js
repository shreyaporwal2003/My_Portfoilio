function showContent(section) {
    var skillsContent = document.getElementById('skills-content');
    var internshipsContent = document.getElementById('internships-content');

    if (section === 'skills') {
        skillsContent.style.display = 'block';
        internshipsContent.style.display = 'none';
    } else if (section === 'internships') {
        skillsContent.style.display = 'none';
        internshipsContent.style.display = 'block';
    }
}
var sidemeu = document.getElementById("sidemenu");
function openmenu() {
    sidemeu.style.right = "0";

}
function closemenu() {
    sidemeu.style.right = "-200px";

}
const scriptURL = 'https://script.google.com/macros/s/AKfycbwmj-I5XmT03rlxNxWA--EMsefPC2jeeKY_qJdypYpebdEtzRbbqm7ghpANpZCDMLaT/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})