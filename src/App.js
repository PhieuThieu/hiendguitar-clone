import './App.css';
import {BrowserRouter as Router, Routes , Route, Navigate} from 'react-router-dom'
import HomeScreen from "./Screen/HomeScreen/HomeScreen";
import SearchBar from "./Component/SearchBar/SearchBar";
import TaskBar from "./Component/TaskBar/TaskBar";
import ProductScreen from "./Screen/ProductScreen/ProductScreen";
import ProductFooter from "./Screen/FooterScreen/ProductFooter";
import Heading from "./Component/Heading/Heading";
import CartScreen from "./Screen/CartScreen/CartScreen";
import CartFooter from "./Screen/FooterScreen/CartFooter";

function App() {
  return (
    <div className="App relative ">
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <SearchBar/>
                <HomeScreen/>
                <TaskBar/>
              </>
            }
          />
          <Route
            path='/product'
            element={<>
              <ProductScreen/>
              <ProductFooter/>
            </>}
          />
          <Route
            path='/cart'
            element={<>
              <Heading title='Your Cart'/>
              <CartScreen/>
              <CartFooter/>
            </>}
          />
          <Route
            path='/checkout'
            element={<>
              <Heading title='Check Out'/>
              {/*<CheckOutScreen/>*/}
              {/*<CheckOutFooter/>*/}
            </>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
