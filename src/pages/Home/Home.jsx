import React from "react";
import Features from "../../components/Features/Features";
import Chart from "../../components/Chart/Chart";
import { xAxisData } from "../../datas";
import "./Home.css";

export default function Home() {
	return (
		<div className='home'>
			<Features />
			<Chart grid title="فروش ماهانه" data={xAxisData} dataKey="فروش" />
		</div>
	);
}
