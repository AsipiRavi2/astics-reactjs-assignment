
import creds from '../../data/creds.json';

export default function checkCredentials(userCredentails){
    try {
        if (creds[userCredentails.username].username === userCredentails.username && creds[userCredentails.username].password === userCredentails.password){
            console.log("Login Successful")
            return true
        } 
        else{
            console.log("password not matched")
            return false
        }
    }
    catch(error){
        console.log("user does not exist")
        return false
    }

}