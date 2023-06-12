export function passwordValidator(password) {
  if (!password) return "Este campo no debe estar vacio."
  if (password.length < 5) return 'Contraseña debe de tener más de 5 caracteres'
  return ''
}
