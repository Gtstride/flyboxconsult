import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import AboutUs from "./pages/aboutUs/AboutUs"
import ContactUs from "./pages/contact-us/ContactUs"
// import sample from "./pages/admin/sample"

// Study Routes
import StudyInUk from "./pages/education/StudyInUk"
import StudyInUs from "./pages/education/StudyInUs"
import StudyInAustralia from "./pages/education/StudyInAustralia"
import StudyInCanada from "./pages/education/StudyInCanada"

// Work Route
import WorkInLithuania from "./pages/Work/WorkInLith"
// import WorkInGermany from "./pages/Work/WorkInGermany"

// import AdminLoginPage from "./components/auth/admin/AdminLoginPage"
// import DashBoard from './pages/dash-board/DashBoard'
import Unauthorized from "./not-found/NotFound"

const Routes = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/study_in_uk" component={StudyInUk} />
          <Route exact path="/study_in_us" component={StudyInUs} />
          <Route exact path="/study_in_australia" component={StudyInAustralia} />
          <Route exact path="/study_in_canada" component={StudyInCanada} />
          <Route exact path="/work_in_lithuania" component={WorkInLithuania} />
          {/* <Route exact path="/work_in_germany" component={WorkInGermany} /> */}
          <Route exact path="/contact-us" component={ContactUs} />
          {/* <Route exact path="http://localhost:3000/" component={AdminLoginPage} /> */}
          {/* <Route exact path="/admin-dash_board" component={DashBoard} /> */}
          <Route exact path="*" component={Unauthorized} />
        </Switch>
      </Router>
    </>
  )
}

export default Routes;