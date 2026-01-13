import Card from "./components/Card";

function App() {
  return (
    <div>
      <h1>Product List</h1>

      <Card
        product={{
          title: "AirPods Pro",
          description: "Active Noise Cancellation",
          price: 24999,
        }}
      />
    </div>
  );
}

export default App;
