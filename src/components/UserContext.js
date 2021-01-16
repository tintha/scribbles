import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";

export const UserContext = React.createContext(null);

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState(null);
  const [bio, setBio] = useState("");
  const [userBio, setUserBio] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userBlogPosts, setUserBlogPosts] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      setCurrentUser(userAuth);
    });
  });

  useEffect(() => {
    if (currentUser) {
      db.collection("users")
        .doc(currentUser.uid)
        .get()
        .then((querySnapshot) => {
          if (!querySnapshot.exists) {
            return;
          } else {
            querySnapshot.data().bio && setUserBio(querySnapshot.data().bio);
          }
        });
    }
  }, [currentUser]);

  useEffect(() => {
    const unsubscribe = db
      .collection("posts")
      .orderBy("postedOn", "desc")
      .onSnapshot((querySnapshot) => {
        const postsArray = querySnapshot.docs.map((doc) => {
          const user = doc.data().userID;
          const infos = doc.data();
          let postedBy;
          db.collection("users")
            .doc(user)
            .get()
            .then((querySnapshot) => {
              postedBy = querySnapshot.data().displayName;
            });
          return { ...infos, postedBy };
        });

        setPosts([...postsArray]);
        console.log(postsArray);
      });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    db.collection("users")
      .doc("KMMDt3EfkXN8p5pQIeCc98V5SEm1")
      .get()
      .then((querySnapshot) => {
        console.log(querySnapshot.data().displayName);
      });
  }, []);

  const signInWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try {
      const user = await auth.signInWithEmailAndPassword(email, password);
      console.log(user);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const signUpHandler = async (event, displayName, email, password, bio) => {
    event.preventDefault();
    try {
      const user = await auth.createUserWithEmailAndPassword(email, password);
      const useruid = await user.user.uid;
      db.collection("users").doc(useruid).set({
        bio,
        email,
        displayName,
      });
      setError(null);
      setDisplayName("");
      setBio("");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignOut = async (event) => {
    event.preventDefault();
    auth
      .signOut()
      .then(function () {
        // Sign-out successful.
        setEmail("");
        setPassword("");
        setUserBio("");
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  const addBlogPost = (event, title, content, userID) => {
    event.preventDefault();
    db.collection("posts")
      .add({
        title: title,
        content: content,
        userID: userID,
        postedOn: new Date(),
      })
      .then(() => {
        setTitle("");
        setContent("");
      });
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "bio") {
      setBio(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    } else if (name === "title") {
      setTitle(value);
    } else if (name === "content") {
      setContent(value);
    }
  };

  return (
    <UserContext.Provider
      value={{
        currentUser,
        email,
        password,
        error,
        setError,
        signInWithEmailAndPasswordHandler,
        handleSignOut,
        onChangeHandler,
        signUpHandler,
        posts,
        bio,
        setBio,
        userBio,
        displayName,
        addBlogPost,
        title,
        content,
        userBlogPosts,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
