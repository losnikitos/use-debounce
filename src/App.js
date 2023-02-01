import "./styles.css";
import { useState } from "react";

function Input({ value, onChange }) {
  const [text, setText] = useState(value);
  const onEdit = (val) => {
    setText(val);
    setTimeout(() => onChange(val), 1000);
  };
  return <input value={text} onChange={(e) => onEdit(e.target.value)} />;
}

export default function App() {
  const [text, setText] = useState("Hello");

  return (
    <div>
      <Input value={text} onChange={setText} />
      <p>Value: {text}</p>
    </div>
  );
}
