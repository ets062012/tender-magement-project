import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import { GoogleLogin } from '@react-oauth/google';
// import { FcGoogle } from "react-icons/fc";
//loginform
export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
// const pass=(googledata)=>{
//   console.log("googledata")
// }
// const fail=(result)=>{
//   console.log("result")
// }
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" style={{color:'black'}}/>
        <Input type="password" placeholder="Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">Signin</SubmitButton>
             
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
          <SubmitButton type="submit" style={{background:'white',color:'black'}}>continue with google</SubmitButton>
          <SubmitButton type="submit" style={{background:'white',color:'black'}}>signin with phone number</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
