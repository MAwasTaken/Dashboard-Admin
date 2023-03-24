import React from "react";
import { Link } from "react-router-dom";
import './Product.css'

export default function Product() {
	return (
		<div className='product'>
			<div className='product-title-container'>
				<h1 className='profile-title'>Product</h1>
				<Link to="/newproduct">
					<button className='product-add-button'>Create</button>
				</Link>
			</div>
		</div>
	);
}
