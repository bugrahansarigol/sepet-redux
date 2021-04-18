import "./style/App.css";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
const App = () => {
  return (
    <div className="container">
      <Header />
        <div className='content'>
          <Products />
        </div>
    </div>
  );
};

export default App;
