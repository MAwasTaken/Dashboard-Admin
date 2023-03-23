import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import "./Topbar.css";

export default function Topbar() {
	return (
		<div className='topbar'>
			<div className='topbar-wrapper'>
				<div className='top-left'>
					<span className='logo'>MAwasTaken</span>
				</div>
				<div className='top-right'>
					<div className='topbar-icon-container'>
						<NotificationsIcon />
						<span className='top-icon-badge'>2</span>
					</div>
					<div className='topbar-icon-container'>
						<LanguageIcon />
						<span className='top-icon-badge'>2</span>
					</div>
					<div className='topbar-icon-container'>
						<SettingsIcon />
					</div>
					<img className="top-avatar" src='images/profile.jfif' alt="profile" />
				</div>
			</div>
		</div>
	);
}
