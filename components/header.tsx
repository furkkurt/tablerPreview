import { Squash as Hamburger } from 'hamburger-react'
import { useState } from 'react'

export default function Header() {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div className={'bg-white pb-2 px-20 border-2 mx-auto'}>
			<div className={'xl:w-4/5 mx-auto'}>
				<div className={'mx-2 mt-4 flex justify-between'}>
					<div className={'md:hidden'}>
						<Hamburger onToggle={() => setIsOpen((prev) => !prev)} />
					</div>
					<img src={'logo.svg'} className={'h-8 md:mr-auto'} />
					<div className={'flex space-x-4 h-10 place-items-center hidden md:flex'}>
						<div className={'border-2 rounded p-1 flex place-items-center space-x-2'}>
							<img src={'tabler-icon-brand-github.svg'} className={'h-4'} />
							<p className={'font-ubuntu'}>Source code</p>
						</div>
						<div className={'border-2 rounded p-1 flex place-items-center space-x-2'}>
							<img src={'tabler-icon-heart.svg'} className={'h-4'} />
							<p className={'font-ubuntu'}>Sponsor</p>
						</div>
						<img src={'tabler-icon-moon.svg'} className={'h-6'} />
						<img src={'tabler-icon-bell.svg'} className={'h-6'} />
						<div className={'p-1 flex place-items-center space-x-2'}>
							<img src={'me.jpg'} className={'h-8 rounded'} />
							<div className={'font-inter text-sm'}>
								<p>Furkan Kurt</p>
								<p className={'text-slate-500 text-xs'}>UI Designer</p>
							</div>
						</div>
					</div>
					<img src={'me.jpg'} className={'h-8 rounded block md:hidden'} />
				</div>
				<hr className={'w-screen absolute left-0'} />
				<div className={'hidden md:flex mx-6'}>
					<div className={'flex w-full mt-4 gap-4'}>
						<button className={'flex space-x-2 pt-1'}>
							<img src={'tabler-icon-home.svg'} className={'pt-1 text-slate-500 hidden lg:block'} />
							<p className={'font-inter text-slate-500 pt-1'}>Home</p>
						</button>
						<button className={'flex space-x-2 pt-1'}>
							<img src={'tabler-icon-package.svg'} className={'pt-1 text-slate-500 hidden lg:block'} />
							<p className={'font-inter text-slate-500 pt-1'}>Interface</p>
						</button>
						<button className={'flex space-x-2 pt-1'}>
							<img src={'tabler-icon-checkbox.svg'} className={'pt-1 text-slate-500 hidden lg:block'} />
							<p className={'font-inter text-slate-500 pt-1'}>Form elements</p>
						</button>
						<button className={'flex space-x-2 pt-1'}>
							<img src={'tabler-icon-star.svg'} className={'pt-1 text-slate-500 hidden lg:block'} />
							<p className={'font-inter text-slate-500 pt-1'}>Extra</p>
						</button>
						<button className={'flex space-x-2 pt-1'}>
							<img src={'tabler-icon-layout-2.svg'} className={'pt-1 text-slate-500 hidden lg:block'} />
							<p className={'font-inter text-slate-500 pt-1'}>Layout</p>
						</button>
						<button className={'flex space-x-2 pt-1'}>
							<img src={'tabler-icon-ghost.svg'} className={'pt-1 text-slate-500 hidden lg:block'} />
							<p className={'font-inter text-slate-500 pt-1'}>4637 icons</p>
						</button>
						<button className={'flex space-x-2 pt-1'}>
							<img src={'tabler-icon-mail-opened.svg'} className={'pt-1 text-slate-500 hidden lg:block'} />
							<p className={'font-inter text-slate-500 pt-1'}>Email templates</p>
						</button>
						<button className={'flex space-x-2 pt-1'}>
							<img src={'tabler-icon-lifebuoy.svg'} className={'pt-1 text-slate-500 hidden lg:block'} />
							<p className={'font-inter text-slate-500 pt-1'}>Help</p>
						</button>
						<div className={'ml-auto flex space-x-2 border rounded h-8 hidden xxl:flex'}>
							<img src={'tabler-icon-search.svg'} className={'p-2 text-slate-500'} />
							<input className={'pt-1 bg-transparent'} placeholder={'Search...'} />
						</div>
					</div>
				</div>
				<div className={'space-x-2 border rounded h-8 w-1/4 hidden md:flex xxl:hidden mx-2 mt-2'}>
					<img src={'tabler-icon-search.svg'} className={'p-2 text-slate-500'} />
					<input className={'pt-1 bg-transparent'} placeholder={'Search...'} />
				</div>
				{isOpen && (
					<div className={'flex flex-col w-full mt-4 gap-4 md:hidden'}>
						<div className={'flex space-x-2 border rounded h-8'}>
							<img src={'tabler-icon-search.svg'} className={'p-2 text-slate-500'} />
							<input className={'pt-1 w-full bg-transparent'} placeholder={'Search...'} />
						</div>
						<button className={'flex space-x-2'}>
							<img src={'tabler-icon-home.svg'} className={'pt-1 text-slate-500'} />
							<p className={'font-inter text-slate-500'}>Home</p>
						</button>
						<button className={'flex space-x-2'}>
							<img src={'tabler-icon-package.svg'} className={'pt-1 text-slate-500'} />
							<p className={'font-inter text-slate-500'}>Interface</p>
						</button>
						<button className={'flex space-x-2'}>
							<img src={'tabler-icon-checkbox.svg'} className={'pt-1 text-slate-500'} />
							<p className={'font-inter text-slate-500'}>Form elements</p>
						</button>
						<button className={'flex space-x-2'}>
							<img src={'tabler-icon-star.svg'} className={'pt-1 text-slate-500'} />
							<p className={'font-inter text-slate-500'}>Extra</p>
						</button>
						<button className={'flex space-x-2'}>
							<img src={'tabler-icon-layout-2.svg'} className={'pt-1 text-slate-500'} />
							<p className={'font-inter text-slate-500'}>Layout</p>
						</button>
						<button className={'flex space-x-2'}>
							<img src={'tabler-icon-ghost.svg'} className={'pt-1 text-slate-500'} />
							<p className={'font-inter text-slate-500'}>4637 icons</p>
						</button>
						<button className={'flex space-x-2'}>
							<img src={'tabler-icon-mail-opened.svg'} className={'pt-1 text-slate-500'} />
							<p className={'font-inter text-slate-500'}>Email templates</p>
						</button>
						<button className={'flex space-x-2'}>
							<img src={'tabler-icon-lifebuoy.svg'} className={'text-slate-500'} />
							<p className={'font-inter text-slate-500'}>Help</p>
						</button>
					</div>
				)}
			</div>
		</div>
	)
}
