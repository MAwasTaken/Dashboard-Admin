import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "./Features.css";

export default function Features() {
	return (
		<div className='features'>
			<div className='feature-item'>
				<span className='feature-title'>درآمد</span>
				<div className='feature-container'>
					<span className='feature-money'>2,415 ﷼</span>
					<span className='feature-rate'>
						-11.4 <ArrowDownwardIcon className='feature-icon negative' />
					</span>
				</div>
				<span className='feature-sub'>در مقایسه با ماه قبل</span>
			</div>
			<div className='feature-item'>
				<span className='feature-title'>فروش</span>
				<div className='feature-container'>
					<span className='feature-money'>2,415 ﷼</span>
					<span className='feature-rate'>
						-1.4 <ArrowDownwardIcon className='feature-icon negative' />
					</span>
				</div>
				<span className='feature-sub'>در مقایسه با ماه قبل</span>
			</div>
			<div className='feature-item'>
				<span className='feature-title'>دارایی</span>
				<div className='feature-container'>
					<span className='feature-money'>2,415 ﷼</span>
					<span className='feature-rate'>
						+2.4 <ArrowUpwardIcon className='feature-icon' />
					</span>
				</div>
				<span className='feature-sub'>در مقایسه با ماه قبل</span>
			</div>
		</div>
	);
}
