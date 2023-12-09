export const validateSignIn=(email,password)=>{
    const isValidEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isValidPassw=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!isValidEmail){
        return "Enter Valid Email."
    }
    if(!isValidPassw){
        return "Enter Valid Password."
    }
    return null;
}
export const validateSignUp=(email,password,name)=>{
    const isValidEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isValidPassw=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isValidName=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
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