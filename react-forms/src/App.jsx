import { useState } from "react";

const App = () => {
  // Controlled
  // const [name, setName] = useState("");

  // return (
  //   <>
  //     <input
  //       value={name}
  //       placeholder="Enter your name"
  //       onChange={(e) => setName(e.target.value)}
  //     />
  //     <p>Hello {name}</p>
  //   </>
  // );

  // Uncontrolled

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements.name.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
