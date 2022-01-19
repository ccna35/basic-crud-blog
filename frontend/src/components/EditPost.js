import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const { id } = useParams();

  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState({});
  const [body, setBody] = useState({});
  const [words, setWords] = useState(0);

  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/post/${id}`)
      .then((result) => {
        setTitle(result.data.title);
        setBody(result.data.body);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/post/edit/${id}`, { title, body })
      .then((result) => {
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };

  const handleBody = (e) => {
    setBody(e.target.value);
    const content = e.target.value.trim();
    const arrayOfWords = content.split(" ");
    setWords(arrayOfWords.length);
  };

  return (
    <section className="newPost">
      <div className="container">
        {loading ? (
          "Please wait..."
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea type="text" value={body} onChange={handleBody} />
            <div>
              <input type="submit" value="Update" />
              <label>{words} Words</label>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

export default EditPost;
