document.addEventListener("DOMContentLoaded", function () {
    const donorList = document.getElementById("donor-list");
    const registerForm = document.getElementById("donor-register-form");
    
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("donor-name").value;
        const phone = document.getElementById("donor-phone").value;
        const group = document.getElementById("donor-blood-group").value;
        const location = document.getElementById("donor-location").value;
        
        if (name && phone && group && location) {
            const donorItem = document.createElement("li");
            donorItem.textContent = `${name} - ${group} - ${phone} - ${location}`;
            donorList.appendChild(donorItem);
            registerForm.reset();
        } else {
            alert("সব তথ্য সঠিকভাবে পূরণ করুন!");
        }
    });
});