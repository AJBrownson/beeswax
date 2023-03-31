import { useState } from "react";
import "./styles.css"


const HomeForm = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${name} + ${image}`);
    setName("");
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

export default HomeForm;