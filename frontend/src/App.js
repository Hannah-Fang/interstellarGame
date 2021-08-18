import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Homepage from './pages/Homepage'
import About from './pages/About'
import ReservationIndex from './pages/reservations/ReservationIndex'
import ItemIndex from './pages/items/ItemIndex'
import MessageIndex from './pages/message/MessageIndex'
import GameIndex from './pages/game/GameIndex'
import MemberIndex from './pages/member/MemberIndex'
import MemberEdit from './pages/member/MemberEdit'
import MemberFavList from './pages/member/MemberFavList'
import MemberOrder from './pages/member/MemberOrder'
import MemberCoupon from './pages/member/MemberCoupon'
import MemberPwdEdit from './pages/member/MemberPwdEdit'
import LoginIndex from './pages/login/LoginIndex'
import Register from './pages/login/Register'
import ForgetPwd from './pages/login/ForgetPwd'
import Shoppingcart4 from './pages/Cart/Shoppingcart4'
import Shoppingcart1 from './pages/Cart/Shoppingcart1'
import Shoppingcart2 from './pages/Cart/Shoppingcart2'
import Shoppingcart3 from './pages/Cart/Shoppingcart3'
// import CartIndex from './pages/cart/CartIndex'
//Hannah

const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop>
        <Switch>
          {/* <MemberIndex /> */}
          {/* Hannah */}
          <Route path="/login">
            <LoginIndex />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/forgetPwd">
            <ForgetPwd />
          </Route>
          <Route path="/member/memberPwdEdit">
            <MemberPwdEdit />
          </Route>
          <Route path="/member/memberCoupon">
            <MemberCoupon />
          </Route>
          <Route path="/member/memberOrder">
            <MemberOrder />
          </Route>
          <Route path="/member/memberEdit">
            <MemberEdit />
          </Route>
          <Route path="/member/memberFavList">
            <MemberFavList />
          </Route>
          <Route path="/member">
            <MemberIndex />
          </Route>
          <Route path="/Shoppingcart1">
            <Shoppingcart1 />
          </Route>
          <Route path="/Shoppingcart2">
            <Shoppingcart2 />
          </Route>
          <Route path="/Shoppingcart3">
            <Shoppingcart3 />
          </Route>
          <Route path="/Shoppingcart4">
            <Shoppingcart4 />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Homepage">
            <Homepage />
          </Route>
          <Router path="/messageboard">
            <MessageIndex />
          </Router>
          <Router path="/Game">
            <GameIndex />
          </Router>
          <ReservationIndex />
          <ItemIndex />
          {/* <Route path="/booking/steps">
            <ReservationIndex />
          </Route> */}
          {/* <ItemIndex />
        <CartIndex />
        <MessageIndex/> */}
        </Switch>
      </ScrollToTop>
      <Footer />
    </Router>
  )
}

export default App
