import { MemoryProvider } from "./context/MemoryContext.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
  return (
    <MemoryProvider>
      <HomePage />
    </MemoryProvider>
  );
}

export default App;
