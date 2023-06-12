export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "Este campo no puede estar vacio"
  if (!re.test(email)) return 'Necesitamos un correo valido'
  return ''
}
