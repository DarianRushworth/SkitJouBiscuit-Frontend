export const contentValidator = (data) => {
    if(!data){
        return "Oops, this field cannot be blank. Please fill in Info."
    }
}

export const lengthValidator = (data) => {
    if(data && data.length < 6) {
        return "Password can contain anything, but must be 6 characters or more."
    }
}

export const validateField = (validators, value) => {
    let error = ""

    validators.forEach((validator) => {
      const validationError = validator(value)
      if (validationError) {
        error = validationError
      }

    })
    return error
}

export const validateFields = (fields, values) => {
    const errors = {}
    const fieldKeys = Object.keys(fields)

    fieldKeys.forEach((key) => {
      const field = fields[key]
      const validators = field.validators
      const value = values[key]

      if (validators && validators.length > 0) {
        const error = validateField(validators, value)
  
        if (error) {
          errors[key] = error
        }
      }
    })
  
    return errors
}

export const hasValidationError = (errors) => {
    return Object.values(errors).find((error) => error.length > 0)
}