import React, { useContext } from "react";
import { Button, TextInput, Textarea, Text, Pane } from "evergreen-ui";
import { UserContext } from "./UserContext";

const AddPost = () => {
  const {
    currentUser,
    addBlogPost,
    onChangeHandler,
    title,
    content,
  } = useContext(UserContext);

  return (
    <Pane
      width={600}
      display="flex"
      flexDirection="column"
      padding={20}
      background="tint1"
      border="default"
      marginBottom={20}
    >
      <label htmlFor="title">
        <Text>Title</Text>
      </label>
      <TextInput
        width={560}
        name="title"
        value={title}
        onChange={(event) => onChangeHandler(event)}
      />
      <label htmlFor="content">
        <Text>Blog content</Text>
      </label>
      <Textarea
        value={content}
        name="content"
        onChange={(event) => onChangeHandler(event)}
      />
      <Button
        width={100}
        onClick={(e) => addBlogPost(e, title, content, currentUser.uid)}
      >
        Submit post
      </Button>
    </Pane>
  );
};

export default AddPost;
