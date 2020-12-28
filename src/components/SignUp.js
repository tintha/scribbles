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
        value={displayName}
        placeholder="display name"
        onChange={(event) => onChangeHandler(event)}
      />
      <label htmlFor="email">
        <Text>Email</Text>
      </label>
      <TextInput
        width={200}
        name="email"
        value={email}
        placeholder="your@email.com"
        onChange={(event) => onChangeHandler(event)}
      />
      <label htmlFor="password">
        <Text>Password</Text>
      </label>
      <TextInput
        width={200}
        type="password"
        name="password"
        value={password}
        placeholder="password"
        onChange={(event) => onChangeHandler(event)}
      />
      <label htmlFor="bio">
        <Text>Bio</Text>
      </label>
      <TextInput
        width={200}
        name="bio"
        value={bio}
        placeholder="Short biography"
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
