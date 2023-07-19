

export default function Validatation(user){
const errors = {}

const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]{2,28}$/;
// const password_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8}$/;

if(user.Username===""){
    errors.Username='Name is required'
}
if(user.email===""){
    errors.email='Email is required'
}
else if(email_pattern.test(user.email)){
    errors.email='Email is not correct'
}

if(user.password===""){
    errors.password='Password required'
}
// else if(password_pattern.test(user.password)){
//     errors.email='password is not correct'
// }
 else if(user.password.length <8){
     errors.password='Password should not be less than 8'
}
return errors;

}