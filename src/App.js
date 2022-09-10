import Banner from "./components/Layout/Banner/Banner";
import BestProduct from "./components/Layout/BestProduct/BestProduct";
import BrandStory from "./components/Layout/BrandStory/BrandStory";
import Footer from "./components/Layout/Footer/Footer";
import HappenedIssue from "./components/Layout/HappenedIssue/HappenedIssue";
import Header from "./components/Layout/Header/Header";

import ProductList from "./components/Layout/Product/ProductList";
import WhatHappenned from "./components/Layout/WhatHappened/WhatHappened";
import WhatHappenedBottom from "./components/Layout/WhatHappenedBottom/WhatHappenedBottom";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <WhatHappenned />
      <BestProduct />
      <ProductList />
      <BrandStory />
      <HappenedIssue />
      <WhatHappenedBottom />
      <Footer />
    </div>
  );
}

export default App;
