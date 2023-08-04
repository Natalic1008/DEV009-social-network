function registro(navigateTo) {
  const section = document.createElement('section'); /* section se usa en registro y en login */
  const buttonReturn = document.createElement('button');
  const inputName = document.createElement('input');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonRegistro = document.createElement('button');

  inputName.placeholder = 'Nombre de usuario';
  inputEmail.placeholder = 'Correo';
  inputPass.placeholder = 'Contraseña';

  buttonRegistro.textContent = 'registro';

  buttonRegistro.addEventListener('click', () => {
    navigateTo('/principal');
  });

  buttonReturn.textContent = 'back to home';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });
  section.append(inputName, inputEmail, inputPass, buttonRegistro, buttonReturn);
  return section;
}

export default registro;
