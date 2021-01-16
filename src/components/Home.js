import React, { useContext, useState } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";
import {
  Pane,
  Text,
  Heading,
  Paragraph,
  Button,
  Spinner,
  Link,
} from "evergreen-ui";
import { UserContext } from "./UserContext";
import SignUp from "./SignUp";
import AddPost from "./AddPost";
import Login from "./Login";

const Home = () => {
  const { currentUser, error, handleSignOut, posts, userBio } = useContext(
    UserContext
  );
  const [formShown, setFormShown] = useState("loginForm");

  return (
    <Pane
      display="flex"
      alignItems="flex-start"
      justifyContent="center"
      width="100%"
      background="#fff"
    >
      <Pane display="flex" flexDirection="column">
        <Pane display="flex" flexDirection="row">
          <Pane display="flex" flexDirection="column" width={600}>
            {currentUser && <AddPost />}
            {posts ? (
              posts.map((post, index) => {
                let datePosted = post.postedOn.toDate();

                return (
                  <Pane
                    width={600}
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                    justifyContent="center"
                    padding={24}
                    marginTop={10}
                    marginBottom={16}
                    key={index}
                  >
                    <Heading>{post.title}</Heading>
                    <Text size={300}>
                      {moment(datePosted).format("LL, LT")}
                    </Text>
                    <Bcontent>{post.content}</Bcontent>
                  </Pane>
                );
              })
            ) : (
              <Spinner marginX="auto" marginY={120} />
            )}
          </Pane>

          <Pane width={250} padding={24} display="flex" flexDirection="column">
            {currentUser ? (
              <>
                <Text>Welcome {currentUser && currentUser.email}</Text>
                <Text>{userBio && userBio}</Text>
                <Button onClick={(event) => handleSignOut(event)}>
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                {error && (
                  <Text backgroundColor="yellow" color="red">
                    {error}
                  </Text>
                )}

                <Login />
              </>
            )}
          </Pane>
        </Pane>
      </Pane>
    </Pane>
  );
};

const Bcontent = styled.p`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  line-height: 18px;
  font-size: 12px;
  ::first-letter {
    font-size: 1.5em;
    font-weight: bolder;
  }
`;

export default Home;
