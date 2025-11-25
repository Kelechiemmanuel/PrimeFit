const form = document.getElementById("myForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const market = document.getElementById("market");
const service = document.getElementById("service");

// error handling var
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const marketError = document.getElementById("marketError");
const serviceError = document.getElementById("serviceError");


// success message
const successMessage = document.getElementById("successful");

form.addEventListener("submit", function (event) {
    event.preventDefault();



    let valid = true;
    dataArray = [];

    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    marketError.textContent = "";
    serviceError.textContent = "";

    successMessage.textContent = "";

    if (name.value.trim() === "") {
        valid = false;
        nameError.textContent = "please fill in your Name";
        setInterval(() => {
            nameError.textContent = "";
        }, 3000);
    } else {
        dataArray.push({ name: name.value });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value.trim())) {
        valid = false;
        emailError.textContent = "Invalid Email Format";
        setInterval(() => {
            emailError.textContent = "";
        }, 3000);
        dataArray.push({ email: email.value.trim() });
    }

    let cleanPhone = phone.value.trim().replace(/\s+/g, "");
    const phonePattern = /^\+?[0-9]{7,15}$/;

    if (!phonePattern.test(cleanPhone)) {
        valid = false;
        phoneError.textContent = "Enter a valid phone number";
        setInterval(() => {
            phoneError.textContent = "";
        }, 3000);
    } else {
        dataArray.push({ phone: cleanPhone });
    }


    if (market.value.trim() === "") {
        valid = false;
        marketError.textContent = "How can we help you";
        setInterval(() => {
            marketError.textContent = "";
        }, 3000);
    } else {
        dataArray.push({ market: market.value });
    }

    if (service.value.trim() === "") {
        valid = false;
        serviceError.textContent = "Select your option";
        setInterval(() => {
            serviceError.textContent = "";
        }, 3000);
    } else {
        dataArray.push({ service: service.value });
    }
    if (valid) {
             successMessage.textContent = "Form submitted successfully!";
        setInterval(() => {
            successMessage.textContent = "";
        }, 3000);
        console.log(dataArray);
        form.reset()
    }
})

function hideIconsOnInput(inputId, iconId) {
    const input = document.getElementById(inputId);
    const icon = document.getElementById(iconId);

    input.addEventListener("input", () => {
        icon.style.opacity = input.value.trim() ? "0" : "1";
    });
}

hideIconsOnInput("name", "iconName");
hideIconsOnInput("email", "iconEmail");
hideIconsOnInput("phone", "iconPhone");
// hideIconsOnInput("market", "iconMarket");
