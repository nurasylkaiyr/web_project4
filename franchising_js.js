// Функция validateForm(event) вызывается при попытке отправки формы.
function validateForm(event) {
  // Получаем элементы формы и сообщения об ошибках для каждого поля.
    var button = document.querySelector('.sub-search button');
    var name = document.getElementById("name").value;
    var phone = document.getElementById("tel").value;
    var email = document.getElementById("email").value;
  
    var nameError = document.getElementById("nameError");
    var phoneError = document.getElementById("phoneError");
    var emailError = document.getElementById("emailError");

    // Очищаем сообщения об ошибках перед валидацией.
    nameError.textContent = "";
    phoneError.textContent = "";
    emailError.textContent = "";
  
    // Проверяем поле "Имя". Если оно пустое, устанавливаем сообщение об ошибке и предотвращаем отправку формы.
    if (name.trim() === "") {
      nameError.textContent = "Name is required";
      event.preventDefault();
    }
    // Проверяем поле "Телефон". Если оно пустое или имеет неверный формат, устанавливаем сообщение об ошибке и предотвращаем отправку формы.
    if (phone.trim() === "") {
      phoneError.textContent = "Phone number is required";
      event.preventDefault();
    } else if (!/^\d{11}$/.test(phone)) {
      phoneError.textContent = "Invalid phone number format (11 digits required)";
      event.preventDefault();
    }
    // Проверяем поле "Электронная почта". Если оно пустое или имеет неверный формат, устанавливаем сообщение об ошибке и предотвращаем отправку формы.
    if (email.trim() === "") {
      emailError.textContent = "Email is required";
      event.preventDefault();
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailError.textContent = "Invalid email address";
      event.preventDefault();
    }
    // Если все поля заполнены корректно, устанавливаем атрибуты для модального окна Bootstrap 
    if (nameError.textContent === "" && phoneError.textContent === "" && emailError.textContent === "") {
        button.setAttribute('data-bs-toggle', 'modal');
        button.setAttribute('data-bs-target', '#staticBackdrop');
        event.preventDefault();
    }
  }
  