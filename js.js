function getValue(id) {
    return document.getElementById(id).value;
}

function validate() {
    const text = getValue("text");
    const email = getValue("email");
    const message = getValue("message");
    if (text === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return false;
    }
    sendEmail();
    alert("Email sent successfully!");
    return true;
}

function sendEmail() {
  emailjs.init({ publicKey: "erfDP2KWcuPuoWMv3" });

  emailjs.send("service_b44j4ps", "template_xqo5j7v",       
  { 
    from_name:  getValue("text"),
    from_email: getValue("email"),
    message:    getValue("message")
  }
);
}