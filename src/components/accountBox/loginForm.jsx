import React, { useContext, useState, useRef } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
//import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Marginer } from "../marginer";
import { AccountContext } from "../accountBox/accountContext";
import { useAuth } from '../context/AuthContexts'
//import { useNavigate } from 'react-router-dom'
//import { auth } from "../../firebase-config";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import { GoogleLogin } from '@react-oauth/google';
// import { FcGoogle } from "react-icons/fc";
//loginform

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  //const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError(' ')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)

    }
    catch {
      setError('Failed to log in')
    }
    setLoading(false)

  }
  // const pass=(googledata)=>{
  //   console.log("googledata")
  // }
  // const fail=(result)=>{
  //   console.log("result")
  // }


  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

  const logout = () => {

  }
  return (
    <BoxContainer>
      <FormContainer >
        <Input type="email" placeholder="Email" style={{ color: 'black' }}
          onChange={e => setLoginEmail(e.target.value)} required />
        <Input type="password" placeholder="Password"
          onChange={e => setLoginPassword(e.target.value)} required />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="../accountBox/ForgotPassword.jsx">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton onClick={handleSubmit} type="button">{!loading ? "Signin" : "loading"}</SubmitButton>

      {/* <GoogleOAuthProvider >
            
              <GoogleLogin
                
                render={(renderProps) => (
                  <button
                    type="button"
                    className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <FcGoogle className="mr-4" /> Sign in with your Google 
                    Sign in with your Google
                    Account
                  </button>
                )}
                onSuccess={()=>{}}
                onFailure={()=>{}}
                cookiePolicy="single_host_origin"
              />
           
            
          </GoogleOAuthProvider> */}
      {/* <button type="button" style={{}}> sign in with google 
          </button> */}
      <SubmitButton type="submit" style={{ background: 'white', color: 'black' }}>continue with google</SubmitButton>
      <SubmitButton type="submit" style={{ background: 'white', color: 'black' }}>signin with phone number</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
