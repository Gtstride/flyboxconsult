import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from "./pages/home/Home"
import Header from "./components/Header/Header"
import AboutUs from "./pages/aboutUs/AboutUs"
import ContactUs from "./pages/contact-us/ContactUs"


// import PopularCourse from "./views/popular-course/PopularCourse"

// Study Routes
import StudyInUk from "./pages/education/StudyInUk"
import StudyInUs from "./pages/education/StudyInUs"
import StudyInAustralia from "./pages/education/StudyInAustralia"
import StudyInCanada from "./pages/education/StudyInCanada"

// Work Route
import WorkInLithuania from "./pages/work/WorkInLith"
import WorkInGermany from "./pages/work/WorkInGermany"

const Routes = () => {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/study_in_uk" component={StudyInUk} />
          <Route exact path="/study_in_us" component={StudyInUs} />
          <Route exact path="/study_in_australia" component={StudyInAustralia} />
          <Route exact path="/study_in_canada" component={StudyInCanada} />
          <Route exact path="/work_in_lithuania" component={WorkInLithuania} />
          <Route exact path="/work_in_germany" component={WorkInGermany} />
          <Route exact path="/contact-us" component={ContactUs} />
          {/* <Route exact path="/work" component={PopularCourse} /> */}
        </Switch>
      </Router>

    </>
  )
}

export default Routes;