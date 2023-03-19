import React, { Component } from 'react'
import Navbar from './component/Navbar'
import Newscomp from './component/Newscomp'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import { Spinner } from './component/Spinner'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Switch>
          <Route exact path="/"><Newscomp  key={"general"} pageSize="21" category="general"/></Route>
          <Route exact path="/business"><Newscomp key={"business"}  pageSize="21" category="business"/></Route>
          <Route exact path="/entertainment"><Newscomp  key={"entertainment"} pageSize="21" category="entertainment"/></Route>
          {/* <R exactoute path="general"><Newscomp pageSize="21" category="general"/></R> */}
          <Route exact path="/health"><Newscomp key={"health"}  pageSize="21" category="health"/></Route>
          <Route exact path="/science"><Newscomp  key={"science"} pageSize="21" category="science"/></Route>
          <Route exact path="/sports"><Newscomp  key={"sports"} pageSize="21" category="sports"/></Route>
          <Route exact path="/technology"><Newscomp  key={"technology"} pageSize="21" category="technology"/></Route>

          </Switch>
          </Router>
         
      </div>
    )
  }
}
