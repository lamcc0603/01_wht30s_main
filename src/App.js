import Banner from "./components/Layout/Banner/Banner";
import BestProduct from "./components/Layout/BestProduct/BestProduct";
import Header from "./components/Layout/Header/Header";

import ProductList from "./components/Layout/Product/ProductList";
import WhatHappenned from "./components/Layout/WhatHappened/WhatHappened";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <WhatHappenned />
      <BestProduct />
      <ProductList />
    </div>
  );
}

export default App;
