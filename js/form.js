// email
const email = document.getElementById("email");
const emailLabel = document.getElementById("email-label");

// company
const company = document.getElementById("company");
const companyLabel = document.getElementById("company-label");

// message 
const message = document.getElementById("message");
const messageLabel = document.getElementById("message-label");

// submit
const btn = document.getElementById("sendEmail");

// email animation
email.addEventListener("focus", (e) => {
    // e.preventDefault();
    if (email.nodeValue !== "") {
        emailLabel.classList.add("active");
    } else {
        email.classList.remove("active");
        email.classList.add("inactive");
    }
})

//company
company.addEventListener("focus", (e) => {
    // e.preventDefault();
    if (email.nodeValue !== "") {
        companyLabel.classList.add("active");
    } else {
        companyLabel.classList.remove("active");
        companyLabel.classList.add("inactive");
    }
})

// message
message.addEventListener("focus", (e) => {
    e.preventDefault();
    if (message.nodeValue !== "") {
        messageLabel.classList.add("active");
    } else {
        messageLabel.classList.remove("active");
        messageLabel.classList.add("inactive");
    }
})

// Send email

btn.addEventListener("click", () => {
    Email.send({
        Host: "smtp.mailtrap.io",
        Username: "723e70f6cb9a14",
        Password: "e37cc7ca3beb93",
        To: 'mateusz.mamica18@gmail.com',
        From: email.value,
        Subject: `${company.value} send practice offert for u!    `,
        Body: message.value,
    })
        .then(function () {
            alert("mail sent successfully");
        });
})