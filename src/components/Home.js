import React, { useContext, useState } from "react";
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
    >
      <Pane display="flex" flexDirection="column">
        <Pane marginBottom={10}>
          <Heading size={700}>Mini blog</Heading>
        </Pane>
        <Pane display="flex" flexDirection="row">
          <Pane display="flex" flexDirection="column" width={600}>
            {currentUser && <AddPost />}
            {posts ? (
              posts.map((post, index) => {
                let datePosted = post.postedOn.toDate().toLocaleDateString();
                return (
                  <Pane
                    elevation={0}
                    width={600}
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                    justifyContent="center"
                    border="default"
                    background="tint1"
                    padding={24}
                    marginBottom={16}
                    key={index}
                  >
                    <Heading>{post.title}</Heading>
                    <Text size={300}>Posted on {datePosted}</Text>
                    <Paragraph size={300} marginTop="default">
                      {post.content}
                    </Paragraph>
                  </Pane>
                );
              })
            ) : (
              <Spinner marginX="auto" marginY={120} />
            )}
          </Pane>

          <Pane
            elevation={0}
            width={250}
            padding={24}
            display="flex"
            flexDirection="column"
            marginLeft={20}
          >
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
                {formShown === "loginForm" ? (
                  <>
                    <Login />
                    <Link
                      href="#"
                      marginRight={12}
                      onClick={() => setFormShown("signUpForm")}
                    >
                      Sign Up
                    </Link>
                  </>
                ) : (
                  <>
                    <SignUp />
                    <Link
                      href="#"
                      marginRight={12}
                      onClick={() => setFormShown("loginForm")}
                    >
                      Login
                    </Link>
                  </>
                )}
              </>
            )}
          </Pane>
        </Pane>
      </Pane>
    </Pane>
  );
};

export default Home;
