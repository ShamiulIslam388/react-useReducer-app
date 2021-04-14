import "./styles.css";
import { CounterProvider } from "./CounterContext";
import Display from "./Display";
import Counter from "./Counter";

export default function App() {
  return (
    <CounterProvider className="App">
      <Display />
      <Counter />
    </CounterProvider>
  );
}
