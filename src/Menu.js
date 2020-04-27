import React from 'react'
import './Menu.css';

const Menu = ({onToggle, menuVisibility})=>{
	var visible = 'hide';
	if (menuVisibility){
		visible = 'show';
	}
	return (
			<div id="flyoutMenu" className={visible} onClick={onToggle}>
				<h2>My projects</h2>
				<hr/>
				<p><a href="#nowhere">Project1</a></p><hr/>
				<p><a href="#nowhere">Project2</a></p><hr/>
				<p><a href="#nowhere">Project3</a></p><hr/>
				<p><a href="#nowhere">Project4</a></p><hr/>
				<p><a href="#nowhere">Project5</a></p><hr/>
			</div>
		)
}

export default Menu;