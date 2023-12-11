export const validateSignIn=(email,password)=>{
    // eslint-disable-next-line
    const isValidEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email); // eslint-disable-next-line
    const isValidPassw=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password); // eslint-disable-next-line
    if(!isValidEmail){
        return "Enter Valid Email."
    }
    if(!isValidPassw){
        return "Enter Valid Password."
    }
    return null;
}
export const validateSignUp=(email,password,name)=>{
    // eslint-disable-next-line
    const isValidEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email); // eslint-disable-next-line
    const isValidPassw=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password); // eslint-disable-next-line
    const isValidName=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name); // eslint-disable-next-line
    if(!isValidEmail){
        return "Enter Valid Email."
    }
    if(!isValidPassw){
        return "Enter Valid Password."
    }
    if(!isValidName){
        return "Enter Valid Name."
    }
    return null;
}