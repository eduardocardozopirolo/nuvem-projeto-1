import { useEffect, useState } from "react";

function App() {
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    fetch("http://localhost:25000/hello")
      .then((res) => res.text())
      .then((data) => setMensagem(data));
  }, []);

  return (
    <div>
      <h1>Front-end React</h1>
      <p className="backend-message">Mensagem do back-end: {mensagem}</p>
    </div>
  );
}

export default App;