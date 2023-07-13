import React, { useContext, useState } from "react";
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
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../../firebase-config";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPasswordl] = useState("")

  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const regsiter = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword


      )
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Full Name" />
        <Input type="email" placeholder="Email" style={{ color: 'black' }}
          onChange={e => setRegisterEmail(e.target.value)} />
        <Input type="password" placeholder="Password"
          onChange={e => setRegisterPasswordl(e.target.value)} />
        <Input type="password" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Signup</SubmitButton>
      <SubmitButton type="submit" style={{ background: 'white', color: 'black' }}>continue with google</SubmitButton>
      <SubmitButton type="submit" style={{ background: 'white', color: 'black' }}>signup with phone number</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
