const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function validate(userData){
    let errors = {}
    if(!userData.username){
      errors.username = 'Se requiere un usuario'
    }else if(userData.username.length > 35){
        errors.username = 'Debe ser menor a 35 caracteres'
    }else if(!regexEmail.test(userData.username)){
        errors.username = 'Debe ser un correo válido'
    }
    

    if(!userData.password){
        errors.password = 'Se requiere contraseña'
    }else if(!(userData.password.length >= 6 && userData.password.length <= 10)){
        errors.password = 'Debe tener entre 6 y 10 caracteres'
    }else if(!/\d/.test(userData.password)){
        errors.password = 'La contraseña debe contener al menos un número'
    }
  
    return errors
  
  }