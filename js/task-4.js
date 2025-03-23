function handleSubmit(event) {
  event.preventDefault();

  const emailValue = document.forms["login-form"]["email"].value.trim();
  const passwordValue = document.forms["login-form"]["password"].value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);

  document.forms["login-form"].reset();
}
