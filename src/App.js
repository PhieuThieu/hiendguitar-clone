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
import {auth, db} from "./FireBase/firebase";
import SearchScreen from "./Screen/SearchScreen/SearchScreen";
import {setProduct} from "./reduxSlice/productSlice";
import { selectGuitar} from "./reduxSlice/reselect";
import FooterDesktop from "./Screen/ProductScreen/FooterDesktop/FooterDesktop";
import {doc, getDoc} from "firebase/firestore";

function App() {
  const user = useSelector(selectUser)
  const product = useSelector(selectGuitar)
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

    const getData = async () => {

      const docRef = doc(db, "guitar","pDeMSLxxO7PXv0yrDRPP");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        dispatch(setProduct(docSnap.data().guitar))
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
   return getData()

  }, [dispatch]);


  return (<div className="App relative ">
    <Router>
      <Routes>
        <Route
          path='/'
          element={<>
            <HomeScreen user={user} data={product} />
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
