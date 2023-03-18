import { useState } from "react";
import { Formm, Label, Input, Textbox, Button } from "./styles";

const GuestForm = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${name} + ${comment}`);
    setName("");
    setComment("");
  };
  return (
    <>
      <Formm onSubmit={handleSubmit}>
        <Label>Name</Label>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Label>Comment</Label>
        <Textbox
          cols={50}
          rows={3}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></Textbox>
        <Button>Share</Button>
      </Formm>
    </>
  );
};

export default GuestForm;
