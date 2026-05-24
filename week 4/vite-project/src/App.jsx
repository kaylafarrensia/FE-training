import { useState } from "react";
import Header from "./components/layout/header";
import ProductGrid from "./components/products/productGrid";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Header />
      <ProductGrid searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </div>
  );
}

export default App;
