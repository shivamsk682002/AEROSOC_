import React from "react";

function sendMail(){
    let parms={
        name : document.getElementById("name").value,
        Email: document.getElementById("Email").value,
        subject: document.getElementById("subject").value,
        message:document.getElementById("message").value,
    }
    emailjs.send("service_h3iev0h","template_x17zjcc",parms).then(alert("Enailsent"))
}