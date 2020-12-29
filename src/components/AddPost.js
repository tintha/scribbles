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
    <Pane width={400} display="flex" flexDirection="column" marginBottom={20}>
      <label htmlFor="title">
        <Text>Title</Text>
      </label>
      <TextInput
        width={400}
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
