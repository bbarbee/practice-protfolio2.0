
const firstName= document.getElementById('firstName').value;
const lastName= document.getElementById('lastName').value;
const email= document.getElementById('email').value;
const subject= document.getElementById('subject').value;



function submitForm(){
    if (!firstName || !lastName || !email || !subject){
        alert('Please fill in all fields');
        return;
    }

    const emailBody= `Name: ${firstName} ${lastName}\nEmail: ${email}\nSubject: ${subject}`;

    alert(emailBody, 'Form submitted sucessfully');

    document.getElementById('contactForm').reset();

}

function navBar() {
    let navigation = document.getElementById("topNav");
    if (navigation.className === "navbar") {
        navigation.className += "responsive";
    } else {
        navigation.className = "navbar";
    }
}