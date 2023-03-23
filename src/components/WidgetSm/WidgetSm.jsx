import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { newMembers } from "../../datas";
import "./WidgetSm.css";

export default function WidgetSm() {
	return (
		<div className='widgetsm'>
			<span className='widgetsm-title'>کاربران تازه ملحق شده</span>
			<ul className='widgetsm-list'>
				{newMembers.map((user) => (
					<li key={user.id} className='widgetsm-list-item'>
						<img src={user.img} alt='profile' className='widgetsm-img' />
						<div className='widgetsm-user'>
							<span className='widgetsm-username'>{user.username}</span>
							<span className='widgetsm-usertitle'>{user.title}</span>
						</div>
						<button className='widgetsm-button'>
							<VisibilityIcon className='widgetsm-icon' />
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
