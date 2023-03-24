import React from "react";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReportIcon from "@mui/icons-material/Report";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
	return (
		<div className='sidebar'>
			<div className='sidebar-wrapper'>
				<div className='sidebar-menu'>
					<h3 className='sidebar-title'>داشبورد</h3>
					<ul className='sidebar-list'>
						<Link
							className='link'
							to='/'>
							<li className='sidebar-list-item'>
								<LineStyleIcon className='sidebar-icon' />
								خانه
							</li>
						</Link>
						<li className='sidebar-list-item'>
							<TimelineIcon className='sidebar-icon' />
							آنالیز
						</li>
						<li className='sidebar-list-item'>
							<TrendingUpIcon className='sidebar-icon' />
							فروش
						</li>
					</ul>
				</div>
				<div className='sidebar-menu'>
					<h3 className='sidebar-title'>دسترسی سریع</h3>
					<ul className='sidebar-list'>
						<Link
							className='link'
							to='/users'>
							<li className='sidebar-list-item'>
								<PermIdentityIcon className='sidebar-icon' />
								کاربران
							</li>
						</Link>
						<Link
							className='link'
							to='/newuser'>
							<li className='sidebar-list-item'>
								<PermIdentityIcon className='sidebar-icon' />
								کاربر جدید
							</li>
						</Link>
						<Link
							className='link'
							to='/products'>
							<li className='sidebar-list-item'>
								<StorefrontIcon className='sidebar-icon' />
								محصولات
							</li>
						</Link>
						<li className='sidebar-list-item'>
							<AttachMoneyIcon className='sidebar-icon' />
							تراکنش ها
						</li>
						<li className='sidebar-list-item'>
							<BarChartIcon className='sidebar-icon' />
							گزارش
						</li>
					</ul>
				</div>
				<div className='sidebar-menu'>
					<h3 className='sidebar-title'>اعلانات</h3>
					<ul className='sidebar-list'>
						<li className='sidebar-list-item'>
							<MailOutlineIcon className='sidebar-icon' />
							پست
						</li>
						<li className='sidebar-list-item'>
							<DynamicFeedIcon className='sidebar-icon' />
							بازخورد
						</li>
						<li className='sidebar-list-item'>
							<ChatBubbleOutlineIcon className='sidebar-icon' />
							پیام ها
						</li>
					</ul>
				</div>
				<div className='sidebar-menu'>
					<h3 className='sidebar-title'>غیره</h3>
					<ul className='sidebar-list'>
						<li className='sidebar-list-item'>
							<WorkOutlineIcon className='sidebar-icon' />
							مدیریت
						</li>
						<li className='sidebar-list-item'>
							<TimelineIcon className='sidebar-icon' />
							آنالیز
						</li>
						<li className='sidebar-list-item'>
							<ReportIcon className='sidebar-icon' />
							گزارشات
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
