import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="container">
      <h1>Dark Mode Toggle</h1>
      <ThemeToggle />

      <div className="card">
        <p>This app uses Context API for global theme state.</p>
        <p>Click the button to switch themes.</p>
      </div>
    </div>
  );
}

export default App;
