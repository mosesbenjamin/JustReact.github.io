import React from 'react'
import './MenuButton.css';

const MenuButton = ({onToggle, menuVisibility})=>{
	var visible = 'hide';
	if (menuVisibility){
		visible = 'show';
	}
	return (
			<div>
				<button 
				className = {menuVisibility}
				id ="squareButton"  
				onClick={onToggle}></button> 
			</div>
		)
}

export default MenuButton;