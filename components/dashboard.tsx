import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faArrowDown } from '@fortawesome/free-solid-svg-icons'
export default function Dashboard() {
	return (
		<div className={'p-2 pt-4 flex'}>
			<div>
				<p className={'text-xs font-inter font-bold text-slate-500'}>OVERVIEW</p>
				<p className={'font-inter font-bold text-xl'}>Dashboard</p>
			</div>

			<div className={'flex ml-auto space-x-4'}>
				<button className={'h-10 border bg-white px-4 py-2 rounded-lg font-ubuntu'}>New view</button>
				<button className={'h-10 flex border bg-darkBlue text-white px-4 py-2 rounded-lg font-inter space-x-4'}>
					<FontAwesomeIcon className={'pt-1'} icon={faPlus} />
					<p>Create new report</p>
				</button>
			</div>
		</div>
	)
}
