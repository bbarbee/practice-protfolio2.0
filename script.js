
const firstName= document.getElementById('firstName').value;
const lastName= document.getElementById('lastName').value;
const email= document.getElementById('email').value;
const subject= document.getElementById('subject').value;



function submitForm(){
    if (!firstName || !lastName || !eamil || !subject){
        alert('Please fill in all fields');
        return;
    }

}