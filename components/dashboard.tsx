import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faArrowDown } from '@fortawesome/free-solid-svg-icons'
export default function Dashboard() {
    return (
        <div className={'p-8 flex'}>
            <div>
                <p className={'text-xs font-ubuntu text-slate-500'}>OVERVIEW</p>
                <p className={'font-ubuntu text-2xl'}>Dashboard</p>
            </div>

            <div className={'flex ml-auto space-x-4'}>
                <button className={'h-10 border bg-white px-4 py-2 rounded-lg font-ubuntu'}>
                    New view
                </button>
                <button className={'h-10 flex border bg-blue-700 text-white px-4 py-2 rounded-lg font-ubuntu space-x-4'}>
                    <FontAwesomeIcon className={'pt-1'} icon={faPlus}/>
                    <p>
                        Create new report
                    </p>
                </button>
            </div>
        </div>
    )
}
