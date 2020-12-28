import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { TextInput, Button, Text } from "evergreen-ui";

const SignUp = () => {
  const {
    displayName,
    email,
    password,
    signUpHandler,
    onChangeHandler,
    bio,
  } = useContext(UserContext);
  return (
    <div>
      <label htmlFor="displayName">
        <Text>Display Name</Text>
      </label>
      <TextInput
        width={200}
        name="displayName"
        placeholder="displayName"
        onChange={(event) => onChangeHandler(event)}
      />
      <label htmlFor="email">
        <Text>Email/Username</Text>
      </label>
      <TextInput
        width={200}
        name="email"
        placeholder="email"
        onChange={(event) => onChangeHandler(event)}
      />
      <label htmlFor="password">
        <Text>Password</Text>
      </label>
      <TextInput
        width={200}
        type="password"
        name="password"
        placeholder="password"
        onChange={(event) => onChangeHandler(event)}
      />
      <label htmlFor="bio">
        <Text>Bio</Text>
      </label>
      <TextInput
        width={200}
        name="bio"
        placeholder="bio"
        onChange={(event) => onChangeHandler(event)}
      />
      <Button
        onClick={(e) => signUpHandler(e, displayName, email, password, bio)}
      >
        Sign Up
      </Button>
    </div>
  );
};

export default SignUp;
