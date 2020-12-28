import React, { useContext } from "react";
import { Button, TextInput, Textarea, Text, Pane } from "evergreen-ui";
import { UserContext } from "./UserContext";

const AddPostTest = () => {
  const { addBlogPost, onChangeHandler, title, content } = useContext(
    UserContext
  );
  console.log(title);
  console.log(content);
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
        placeholder="title"
        value={title}
        onChange={(event) => onChangeHandler(event)}
      />
      <label htmlFor="content">
        <Text>Blog content</Text>
      </label>
      <Textarea
        placeholder="content"
        name="content"
        value={content}
        onChange={(event) => onChangeHandler(event)}
      />
      <Button
        width={100}
        onClick={(e) => addBlogPost(e, title, content, "test")}
      >
        Submit post
      </Button>
    </Pane>
  );
};

export default AddPostTest;
