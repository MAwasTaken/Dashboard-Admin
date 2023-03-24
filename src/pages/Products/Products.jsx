import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { products } from "../../datas";
import "./Products.css";

export default function Users() {
	const [productsDatas, setProductsDatas] = useState(products);

	const productDelete = (productID) => {
		setProductsDatas(productsDatas.filter((user) => user.id !== productID));
	};

	const columns = [
		{
			field: "id",
			headerName: "آیدی",
			width: 90,
		},
		{
			field: "title",
			headerName: "نام محصول",
			width: 200,
			renderCell: (params) => {
				return (
					<Link
						to={`/product/${params.row.id}`}
						className='link'>
						<div className='userlist-user'>
							<img
								src={params.row.avatar}
								alt='profile'
								className='userlist-img'
							/>
							{params.row.title}
						</div>
					</Link>
				);
			},
		},
		{
			field: 'price',
			headerName: "قیمت",
			width: 120,
		},
		{
			field: "action",
			headerName: "رخداد",
			width: 120,
			renderCell: (params) => {
				return (
					<div className='userlist-action'>
						<Link to={`/product/${params.row.id}`}>
							<button className='userlist-edit'>ویرایش</button>
						</Link>
						<DeleteOutlineIcon
							className='userlist-delete'
							onClick={() => productDelete(params.row.id)}
						/>
					</div>
				);
			},
		},
	];

	return (
		<div className='userlist'>
			<DataGrid
				rows={productsDatas}
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
