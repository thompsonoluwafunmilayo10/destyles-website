let brandName = "DeStyles"
console.log(brandName)
const contactForm.addEventListener("submit",function(event)){
    event.preventDefault()
}

const name = document.getElementById("name"). value;
const email = document.getElementById("email"). value;
const subject = document.getElementById("subject"). value;
const message = document.getElementById("message"). value;
if (name === " " || email=== " " || subject === " " message === " " ){
    alert("please fill in all fields.");
} else {
    alert (
        "Thank you for contacting DeStyles!"
    );
    contactForm.reset();
}
