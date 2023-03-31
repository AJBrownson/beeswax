import { useState } from "react";
import "./styles.css"


const AboutForm = () => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${name} + ${image}`);
    setName("");
    setBio("");
    setImage("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Bio</label>
        <textarea value={bio} cols={50} rows={3}></textarea>
        <label>Image</label>
        <input
          value={image}
          type="file"
          onChange={(e) => setImage(e.target.value)}
        />
        <button>Publish</button>
      </form>
    </>
  );
};

export default AboutForm;