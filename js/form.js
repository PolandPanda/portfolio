const email = document.getElementById("email");
const emailLabel = document.getElementById("email-label");
const company = document.getElementById("company");
const companyLabel = document.getElementById("company-label");
const message = document.getElementById("message");
const messageLabel = document.getElementById("message-label");

// email animation
email.addEventListener("change", (e) => {
    // e.preventDefault();
    if (email.nodeValue !== "") {
        emailLabel.classList.add("active");
    } else {
        email.classList.remove("active");
        email.classList.add("inactive");
    }
})

//company
company.addEventListener("change", (e) => {
    // e.preventDefault();
    if (email.nodeValue !== "") {
        companyLabel.classList.add("active");
    } else {
        companyLabel.classList.remove("active");
        companyLabel.classList.add("inactive");
    }
})

// message
message.addEventListener("change", (e) => {
    e.preventDefault();
    if (message.nodeValue !== "") {
        messageLabel.classList.add("active");
    } else {
        messageLabel.classList.remove("active");
        messageLabel.classList.add("inactive");
    }
})