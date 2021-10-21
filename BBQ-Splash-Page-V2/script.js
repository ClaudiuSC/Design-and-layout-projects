const myForm = document.getElementById("form-collector");
let formContent = document.getElementById("form-section");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const myFormData = new FormData(e.target);
  const userName = myFormData.get("fname");
  const emailAddress = myFormData.get("email");
  const newContent = `<h2 class="form-title">Congratulations ${userName}!</h2>
    <p class="form-subtitle">You're on your way to becoming a BBQ Master!</p>
    <small class="form-info">You will get weekly BBQ tips sent to: ${emailAddress}</small>
    `;
  formContent.innerHTML = newContent;
});
