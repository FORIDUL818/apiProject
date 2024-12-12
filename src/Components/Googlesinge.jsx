import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Googlesinge = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    let navigate=useNavigate()


  let Google =()=>{
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log(token)
    // The signed-in user info.
    const user = result.user;
    console.log(user)
    // IdP data available using getAdditionalUserInfo(result)
    toast.success("successefull work")
    navigate('/registration/homeLaout/home')
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(error)
  });
  }
    return (
        <div>
           <button onClick={Google}>Google</button>
        </div>
    );
};

export default Googlesinge;