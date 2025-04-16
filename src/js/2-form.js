let formData = {
  email: "",
  message: "",
}

const form = document.querySelector(".feedback-form");
form.addEventListener("input", function () {
  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value;
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
})

const savedData = localStorage.getItem("feedback-form-state");
const parsedData = JSON.parse(savedData);

form.elements.email.value = parsedData.email;
form.elements.message.value = parsedData.message;