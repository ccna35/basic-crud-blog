import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddPost() {
  const [title, setTitle] = useState({});
  const [body, setBody] = useState({});
  const [words, setWords] = useState(0);

  let navigate = useNavigate();

  const handleBody = (e) => {
    setBody(e.target.value);
    const content = e.target.value.trim();
    const arrayOfWords = content.split(" ");
    setWords(arrayOfWords.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/add-post", { title, body })
      .then((result) => {
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <section className="newPost">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter the title here..."
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            type="text"
            placeholder="Enter the body here..."
            onChange={handleBody}
          />
          <div>
            <input type="submit" value="Submit" />
            <label>{words} Words</label>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddPost;
