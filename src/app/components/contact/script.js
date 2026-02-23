// emailjs.init("68z0uBlWRfsJZ27os");

function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_smleevn","template_tfp5wtk", parms).then(alert("Email Sent!!!"));
}