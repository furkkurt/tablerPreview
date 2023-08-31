export default function Body2() {
	return (
		<div className={'flex justify-between py-2 px-8 gap-4'}>
			<div className={'flex space-x-4 place-items-center bg-white border rounded p-4 w-full h-16'}>
				<div className={'bg-darkBlue w-10 h-10 rounded flex'}>
					<img className={'svgWhite w-6 mx-auto'} src={'tabler-icon-currency-dollar.svg'} />
				</div>
				<div className={'flex flex-col'}>
					<p className={'font-inter'}>132 Sales</p>
					<p className={'text-slate-500 font-inter'}>12 waiting payments</p>
				</div>
			</div>
			<div className={'flex space-x-4 place-items-center bg-white border rounded p-4 w-full h-16'}>
				<div className={'bg-shoppingGreen w-10 h-10 rounded flex'}>
					<img className={'svgWhite w-6 mx-auto'} src={'tabler-icon-shopping-cart.svg'} />
				</div>
				<div className={'flex flex-col'}>
					<p className={'font-inter'}>78 Orders</p>
					<p className={'text-slate-500 font-inter'}>32 shipped</p>
				</div>
			</div>
			<div className={'flex space-x-4 place-items-center bg-white border rounded p-4 w-full h-16'}>
				<div className={'bg-twitterBlue w-10 h-10 rounded flex'}>
					<img className={'svgWhite w-6 mx-auto'} src={'tabler-icon-brand-twitter.svg'} />
				</div>
				<div className={'flex flex-col'}>
					<p className={'font-inter'}>623 Shares</p>
					<p className={'text-slate-500 font-inter'}>16 today</p>
				</div>
			</div>
			<div className={'flex space-x-4 place-items-center bg-white border rounded p-4 w-full h-16'}>
				<div className={'bg-facebookBlue w-10 h-10 rounded flex'}>
					<img className={'svgWhite w-6 mx-auto'} src={'tabler-icon-brand-facebook.svg'} />
				</div>
				<div className={'flex flex-col'}>
					<p className={'font-inter'}>132 Likes</p>
					<p className={'text-slate-500 font-inter'}>21 today</p>
				</div>
			</div>
		</div>
	)
}
