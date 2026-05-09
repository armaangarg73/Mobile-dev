import { useState } from "react";
import "./App.css";

const App = () => {
  // Controlled
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    alert("Form Submitted Successfully!");

    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="container">
      <form className="form-card" onSubmit={handleSubmit}>
        <h1>Controlled Form</h1>
        <input
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="Submit">Submit</button>
      </form>
    </div>
  );

  // Uncontrolled

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.elements.name.value);
  // };

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <input name="name" />
  //     <button type="submit">Submit</button>
  //   </form>
  // );
};

export default App;
