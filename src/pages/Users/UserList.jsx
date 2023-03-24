import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { userRows } from "../../datas";
import "./UserList.css";

export default function Users() {
	const [userDatas, setUsersDatas] = useState(userRows);

	const userDelete = (userID) => {
		setUsersDatas(userDatas.filter((user) => user.id !== userID));
	};

	const columns = [
		{
			field: "id",
			headerName: "آیدی",
			width: 90,
		},
		{
			field: "user",
			headerName: "کاربر",
			width: 200,
			renderCell: (params) => {
				return (
					<Link
						to='/'
						className='link'>
						<div className='userlist-user'>
							<img
								src={params.row.avatar}
								alt='profile'
								className='userlist-img'
							/>
							{params.row.username}
						</div>
					</Link>
				);
			},
		},
		{
			field: "email",
			headerName: "ایمیل",
			width: 200,
		},
		{
			field: "status",
			headerName: "وضعیت",
			width: 120,
		},
		{
			field: "transaction",
			headerName: "تراکنش",
			width: 160,
		},
		{
			field: "action",
			headerName: "رخداد",
			width: 120,
			renderCell: (params) => {
				return (
					<div className='userlist-action'>
						<Link to={`/user/${params.row.id}`}>
							<button className='userlist-edit'>ویرایش</button>
						</Link>
						<DeleteOutlineIcon
							className='userlist-delete'
							onClick={() => userDelete(params.row.id)}
						/>
					</div>
				);
			},
		},
	];

	return (
		<div className='userlist'>
			<DataGrid
				rows={userDatas}
				columns={columns}
				disableRowSelectionOnClick
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 4,
						},
					},
				}}
			/>
		</div>
	);
}
