import React from "react";
import { Link } from "react-router-dom";
import Chart from "../../components/Chart/Chart";
import { productsData } from "../../datas";
import "./Product.css";

export default function Product() {
	return (
		<div className='product'>
			<div className='product-title-container'>
				<h1 className='profile-title'>محصول</h1>
				<Link to='/newproduct'>
					<button className='product-add-button'>ساخت</button>
				</Link>
			</div>
			<div className='product-top'>
				<div className='product-top-left'>
					<Chart title='فروش در ماه' data={productsData} dataKey='فروش' />
				</div>
				<div className='product-top-right'>
					<div className='product-info-top'>
						<img src='../images/dell.jpg' alt='Dell Laptop' className='product-info-img' />
            <span className="product-name">لپتاپ دل</span>
					</div>
          <div className="product-info-buttom">
            <div className="product-info-item">
              <div className="product-info-key">آیدی: </div>
              <div className="product-info-value">132</div>
            </div>
            <div className="product-info-item">
              <div className="product-info-key">نام محصول: </div>
              <div className="product-info-value">لپتاپ دل</div>
            </div>
            <div className="product-info-item">
              <div className="product-info-key">فروش: </div>
              <div className="product-info-value">90000 ﷼</div>
            </div>
            <div className="product-info-item">
              <div className="product-info-key">فعال: </div>
              <div className="product-info-value">بله</div>
            </div>
            <div className="product-info-item">
              <div className="product-info-key">موجود: </div>
              <div className="product-info-value">خیر</div>
            </div>
          </div>
				</div>
			</div>
		</div>
	);
}
