import Home from "./pages/Home";
import { useRef } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const inputRef = useRef();

  const hSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("avatar", inputRef.current.files[0]);
    axios.post("http://localhost:5000/api/avatar", formData)
  };

  return (
    <div className="App">
      {/* <Home /> */}
      <p>coucou</p>

      <form enctype="multipart/form-data" onSubmit={hSubmit}>
        <input type="file" name="monfichier" ref={inputRef} />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default App;
