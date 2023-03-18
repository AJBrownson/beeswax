import { useState } from "react";
import { Formm, Label, Input, Textbox, Button } from "./styles";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${name} and ${email} and ${message}`);
    setName("");
    setEmail("");
    setMessage("");
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

        <Label>Email</Label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Label>Message</Label>
        <Textbox
          cols={50}
          rows={10}
          value={message}
          onChange={(e) => setMessage(e.target.value)}>
        </Textbox>
        <Button>Send</Button>
      </Formm>
    </>
  );
};

export default ContactForm;