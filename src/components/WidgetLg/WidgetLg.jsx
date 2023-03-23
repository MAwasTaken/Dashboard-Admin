import React from "react";
import { transactions } from "../../datas";
import "./WidgetLg.css";

export default function WidgetLg() {
	const Button = ({ type }) => {
		return <button className={`widgetlg-button-${type}`}>{type}</button>;
	};

	return (
		<div className='widgetlg'>
			<h3 className='widgetlg-title'>آخرین معاملات</h3>
			<table className='widgetlg-table'>
				<thead>
					<tr className='widgetlg-tr'>
						<th className='widgetlg-th'>مشتری</th>
						<th className='widgetlg-th'>تاریخ</th>
						<th className='widgetlg-th'>مبلغ</th>
						<th className='widgetlg-th'>وضعیت</th>
					</tr>
				</thead>
				<tbody>
					{transactions.map((transaction) => (
						<tr className='widgetlg-tr' key={transaction.id}>
							<td className='widgetlg-user'>
								<img src='images/profile.jfif' className='widgetlg-img' alt='profile' />
								<span className='widgetlg-name'>{transaction.customer}</span>
							</td>
							<td className='widgetlg-date'>{transaction.date}</td>
							<td className='widgetlg-amount'>{transaction.amount} ﷼</td>
							<td className='widgetlg-status'>
								<Button type={transaction.status} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
