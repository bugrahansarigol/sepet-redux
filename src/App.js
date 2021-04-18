import "./style/App.css";
import Products from "./Components/Products";
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
