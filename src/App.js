import React, {Component} from 'react';
import {Route, NavLink, HashRouter} from 'react-router-dom';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import MenuButton from './MenuButton';
import Menu from './Menu';

class App extends Component{
	constructor(){
		super()
		this.state = {
			visible: false
		}
	}
	toggleMenu = ()=>{
		this.setState({visible: !this.state.visible})	
	}
	ButtonClicked = (event)=>{
		this.toggleMenu();
		console.log("Clicked");
		}
	render(){
		return(
			<HashRouter>
			<div>
				<MenuButton onToggle= {this.ButtonClicked} />
				<Menu onToggle= {this.ButtonClicked} menuVisibility={this.state.visible}/>
				<ul className="Header">
					<li><NavLink exact to="/" >About</NavLink></li>
					<li><NavLink to="/skills" >Skills</NavLink></li>
					<li><NavLink to="/contact">Contact</NavLink></li>
				</ul>
				<div className="content">
					<Route exact path="/" component={About} />
					<Route path="/skills" component={Skills} />
					<Route path="/contact" component={Contact }/>
				</div>
			</div>
			</HashRouter>
			)
	}
}

export default App;