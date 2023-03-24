let xAxisData = [
	{ ماه: "فروردین", فروش: 112_000 },
	{ ماه: "اردیبهشت", فروش: 99_000 },
	{ ماه: "خرداد", فروش: 12_090 },
	{ ماه: "تیر", فروش: 99_000 },
	{ ماه: "مرداد", فروش: 54_000 },
	{ ماه: "شهریور", فروش: 85_000 },
	{ ماه: "مهر", فروش: 34_000 },
	{ ماه: "آبان", فروش: 18_598 },
	{ ماه: "آذر", فروش: 0 },
	{ ماه: "دی", فروش: 73_078 },
	{ ماه: "بهمن", فروش: 12_900 },
	{ ماه: "اسفند", فروش: 97_000 },
];

let newMembers = [
	{ id: 1, username: "محمد امینی", title: "توسعه دهنده وب", img: "images/amin.jpg" },
	{ id: 2, username: "محمد کریمی", title: "هک و امنیت", img: "images/amir.jpg" },
	{ id: 3, username: "محمد سرابی", title: "متخصص کلان داده", img: "images/hamze.jpg" },
	{ id: 4, username: "محمد خداپناه", title: "مهندس استقرار و نگهداری", img: "images/mmd.jpg" },
];

let transactions = [
	{ id: 1, customer: "امین محمدی", date: "12 فروردین 1402", amount: 123_000, status: "declined", img: "images/amin.jpg" },
	{ id: 2, customer: "امین کریمی", date: "28 اردیبهشت 1402", amount: 321_000, status: "declined", img: "images/hamze.jpg" },
	{ id: 3, customer: "امین سرابی", date: "1 خرداد 1402", amount: 213_000, status: "approved", img: "images/mmd.jpg" },
	{ id: 4, customer: "امین خداپناه", date: "5 تیر 1402", amount: 231_000, status: "pending", img: "images/zahra.jpg" },
];

let userRows = [
	{ id: 1, username: "سروش نوری", avatar: "images/profile.jfif", status: "فعال", transaction: "129.52 ﷼", email: 'sn@gmail.com' },
	{ id: 2, username: "سروش مولایی", avatar: "images/mmd.jpg", status: "فعال", transaction: "98.52 ﷼", email: 'sm@gmail.com' },
	{ id: 3, username: "سروش فرقانی", avatar: "images/amir.jpg", status: "فعال", transaction: "259.00 ﷼", email: 'sf@gmail.com' },
	{ id: 4, username: "سروش تبریزی", avatar: "images/qadir.jpg", status: "غیر فعال", transaction: "0 ﷼", email: 'st@gmail.com' },
	{ id: 5, username: "سروش قنبری", avatar: "images/sasan.jpg", status: "غیر فعال", transaction: "10,70 ﷼", email: 'sgh@gmail.com' },
];

let products = [
  {id: 1, title: 'Asus', avatar: 'images/asus.jpeg', price: '890 ﷼'},
  {id: 2, title: 'Acer', avatar: 'images/acer.jpg', price: '999 ﷼'},
  {id: 3, title: 'HP', avatar: 'images/hp.jpg', price: '1300 ﷼'},
  {id: 4, title: 'Dell', avatar: 'images/dell.jpg', price: '554 ﷼'},
]

export { xAxisData, newMembers, transactions, userRows, products };
