import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { TextInput, Button, Text } from "evergreen-ui";

const Login = () => {
  const {
    email,
    password,
    signInWithEmailAndPasswordHandler,
    onChangeHandler,
  } = useContext(UserContext);
  return (
    <div>
      <label htmlFor="email">
        <Text>Email:</Text>
      </label>
      <TextInput
        width={200}
        name="email"
        placeholder="your@email.com"
        onChange={(event) => onChangeHandler(event)}
      ></TextInput>
      <label htmlFor="password">
        <Text>Password</Text>
      </label>
      <TextInput
        type="password"
        width={200}
        name="password"
        placeholder="password"
        onChange={(event) => onChangeHandler(event)}
      ></TextInput>
      <Button
        marginTop={10}
        appearance="default"
        onClick={(event) => {
          signInWithEmailAndPasswordHandler(event, email, password);
        }}
      >
        Login
      </Button>
    </div>
  );
};

export default Login;
