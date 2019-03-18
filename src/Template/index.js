import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import logo from '../assets/logo.jpg';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Home from '../components/Home'

export default class Template extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuOption: 0,
      classMenu: 'normalmenu'
    }
  }

  componentDidMount() {
    window.onscroll = () => this.handleAnimation();
  };

  handleMenu = (option) => {
    this.setState({
      menuOption: option
    });
  }

  handleAnimation = () => {
    if (document.documentElement.scrollTop > 100) {
     this.setState({ classMenu: 'scrollmenu' });
   } else {
     this.setState({ classMenu: 'normalmenu' });
   }
  }

  render() {
    return (
        <Router>
            <div>
            <Header logo={logo} classHeader={this.state.classMenu} option={this.state.menuOption} handleMenu={this.handleMenu}/>
            <div >
              <Route exact path="/" component={Home} test={'HOLA'}/>
              <Route path="/conocenos" component={this.About} />
              <Route path="/inmuebles" component={this.About} />
              <Route path="/contactanos" component={this.About} />
            </div>
            <Footer logo={logo} handleMenu={this.handleMenu}/>
            </div>
        </Router>
    );
  }
}
