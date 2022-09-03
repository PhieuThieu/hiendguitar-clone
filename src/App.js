import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomeScreen from "./Screen/HomeScreen/HomeScreen";
import SearchBar from "./Component/SearchBar/SearchBar";
import TaskBar from "./Component/TaskBar/TaskBar";
import ProductScreen from "./Screen/ProductScreen/ProductScreen";
import Heading from "./Component/Heading/Heading";
import CartScreen from "./Screen/CartScreen/CartScreen";
import CheckOutScreen from "./Screen/CheckOutScreen/CheckOutScreen";
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
import {getProduct} from "./reduxSlice/productSlice";
import { selectGuitar, selectQuantityGuitar} from "./reduxSlice/reselect";
import FooterDesktop from "./Screen/ProductScreen/FooterDesktop/FooterDesktop";

function App() {
  const user = useSelector(selectUser)

  const product = useSelector(selectGuitar)
  const itemQuantity = useSelector(selectQuantityGuitar)
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
  }, [dispatch]);


  return (<div className="App relative ">
    <Router>
      <Routes>
        <Route
          path='/'
          element={<>
            <HomeScreen user={user} data={product} itemQuantity={itemQuantity}/>
            <TaskBar user={user}/>
            <FooterDesktop/>
          </>}
        />
        <Route
          path='product'
          element={<>
            <Heading title='Product'/>
            <ProductScreen/>
            <FooterDesktop/>
          </>}
        />
        <Route
          path='cart'
          element={<>
            <Heading title='Your Cart'/>
            <CartScreen/>
            <FooterDesktop/>
          </>}
        />
        <Route
          path='checkout'
          element={<>
            <Heading title='Check Out'/>
            <CheckOutScreen user={user}/>
            <FooterDesktop/>
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
          element={<>
            <AccountScreen user={user}/>
            <FooterDesktop/>
          </>}
        />
        <Route
          path='account/sign-in'
          element={<>
            <LoginScreen/>
            <FooterDesktop/>
          </>}
        />
        <Route
          path='account/sign-up'
          element={<>
            <SignUpScreen/>
            <FooterDesktop/>
          </>}
        />
      </Routes>
    </Router>
  </div>);
}

export default App;
