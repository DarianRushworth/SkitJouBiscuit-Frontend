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