import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomeScreen from "./Screen/HomeScreen/HomeScreen";
import SearchBar from "./Component/SearchBar/SearchBar";
import TaskBar from "./Component/TaskBar/TaskBar";
import ProductScreen from "./Screen/ProductScreen/ProductScreen";
import ProductFooter from "./Screen/FooterScreen/ProductFooter";
import Heading from "./Component/Heading/Heading";
import CartScreen from "./Screen/CartScreen/CartScreen";
import CartFooter from "./Screen/FooterScreen/CartFooter";
import CheckOutScreen from "./Screen/CheckOutScreen/CheckOutScreen";
import CheckOutFooter from "./Screen/FooterScreen/CheckOutFooter";
import LoginScreen from "./Screen/LoginScreen/LoginScreen";
import SignUpScreen from "./Screen/SignUpScreen/SignUpScreen";
import AccountScreen from "./Screen/accountScreen/AccountScreen";
import {useDispatch, useSelector} from "react-redux";
import {login, logout, selectUser} from "./reduxSlice/userSlice";
import {useEffect} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth, database} from "./FireBase/firebase";
import SearchScreen from "./Screen/SearchScreen/SearchScreen";
import {child, get, ref} from "firebase/database";
import {getProduct, selectProduct} from "./reduxSlice/productSlice";

function App() {
  const user = useSelector(selectUser)
  const product = useSelector(selectProduct)

  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, userAuth => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email, uid: userAuth.uid, displayName: userAuth.displayName,
        }))
      } else {
        dispatch(logout())
      }
    })

    get(child(ref(database), `guitar`))
      .then((snapshot) => {
        let data = snapshot.val()
        if (snapshot.exists()) {
          dispatch(getProduct(data))
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
      console.error(error);
    });
  }, []);


  return (<div className="App relative ">
    <Router>
      <Routes>
        <Route
          path='/'
          element={<>
            <HomeScreen data={product}/>
            <TaskBar user={user}/>
          </>}
        />
        <Route
          path='product'
          element={<>
            <Heading title='Product'/>
            <ProductScreen/>
            <ProductFooter/>
          </>}
        />
        <Route
          path='cart'
          element={<>
            <Heading title='Your Cart'/>
            <CartScreen/>
            <CartFooter/>
          </>}
        />
        <Route
          path='checkout'
          element={<>
            <Heading title='Check Out'/>
            <CheckOutScreen/>
            <CheckOutFooter/>
          </>}
        />
        <Route
          path='search'
          element={
            <>
              <Heading child={<SearchBar/>}/>
              <SearchScreen/>
            </>
          }
        />
        <Route
          path='account'
          element={<AccountScreen/>}
        />
        <Route
          path='account/sign-in'
          element={<LoginScreen/>}
        />
        <Route
          path='account/sign-up'
          element={<SignUpScreen/>}
        />
      </Routes>
    </Router>
  </div>);
}

export default App;
