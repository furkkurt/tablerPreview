import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
export default function Body1() {
    return (
        <div className={'p-8 flex justify-between grid gap-4 grid-cols-2 lg:flex'}>
            <div className={'px-4 py-6 border-2 rounded-lg bg-white'}>
                <div className={'flex space-x-24'}>
                    <div>
                        <p className={'text-xs font-ubuntu text-slate-500'}>SALES</p>
                        <p className={'font-ubuntu text-2xl'}>75%</p>
                    </div>
                    <div className={'flex space-x-2'}>
                        <p className={'text-sm font-ubuntu text-slate-500 ml-auto'}>Last 7 days</p>
                        <FontAwesomeIcon className={'h-3 text-slate-500 pt-1'} icon={faArrowDown}/>
                    </div>
                </div>
                <div className={'flex mt-4'}>
                    <p className={'text-slate-700'}>Conversion rate</p>
                    <div className={'flex space-x-2 ml-auto'}>
                        <p className={'text-green-500'}>7%</p>
                        <FontAwesomeIcon className={'h-3 text-green-500 pt-1'} icon={faArrowTrendUp}/>
                    </div>
                </div>
                <div className={'h-1 w-full bg-slate-300 rounded-xl'}>
                    <div className={'h-1 w-3/4 bg-blue-700 rounded-xl'}/>
                </div>
            </div>
            <div className={'px-4 py-6 border-2 rounded-lg bg-white'}>
                <div className={'flex space-x-24'}>
                    <div>
                        <p className={'text-xs font-ubuntu text-slate-500'}>SALES</p>
                        <p className={'font-ubuntu text-2xl'}>75%</p>
                    </div>
                    <div className={'flex space-x-2'}>
                        <p className={'text-sm font-ubuntu text-slate-500 ml-auto'}>Last 7 days</p>
                        <FontAwesomeIcon className={'h-3 text-slate-500 pt-1'} icon={faArrowDown}/>
                    </div>
                </div>
                <div className={'flex mt-4'}>
                    <p className={'text-slate-700'}>Conversion rate</p>
                    <div className={'flex space-x-2 ml-auto'}>
                        <p className={'text-green-500'}>7%</p>
                        <FontAwesomeIcon className={'h-3 text-green-500 pt-1'} icon={faArrowTrendUp}/>
                    </div>
                </div>
                <div className={'h-1 w-full bg-slate-300 rounded-xl'}>
                    <div className={'h-1 w-3/4 bg-blue-700 rounded-xl'}/>
                </div>
            </div>
            <div className={'px-4 py-6 border-2 rounded-lg bg-white'}>
                <div className={'flex space-x-24'}>
                    <div>
                        <p className={'text-xs font-ubuntu text-slate-500'}>SALES</p>
                        <p className={'font-ubuntu text-2xl'}>75%</p>
                    </div>
                    <div className={'flex space-x-2'}>
                        <p className={'text-sm font-ubuntu text-slate-500 ml-auto'}>Last 7 days</p>
                        <FontAwesomeIcon className={'h-3 text-slate-500 pt-1'} icon={faArrowDown}/>
                    </div>
                </div>
                <div className={'flex mt-4'}>
                    <p className={'text-slate-700'}>Conversion rate</p>
                    <div className={'flex space-x-2 ml-auto'}>
                        <p className={'text-green-500'}>7%</p>
                        <FontAwesomeIcon className={'h-3 text-green-500 pt-1'} icon={faArrowTrendUp}/>
                    </div>
                </div>
                <div className={'h-1 w-full bg-slate-300 rounded-xl'}>
                    <div className={'h-1 w-3/4 bg-blue-700 rounded-xl'}/>
                </div>
            </div>
            <div className={'px-4 py-6 border-2 rounded-lg bg-white'}>
                <div className={'flex space-x-24'}>
                    <div>
                        <p className={'text-xs font-ubuntu text-slate-500'}>SALES</p>
                        <p className={'font-ubuntu text-2xl'}>75%</p>
                    </div>
                    <div className={'flex space-x-2'}>
                        <p className={'text-sm font-ubuntu text-slate-500 ml-auto'}>Last 7 days</p>
                        <FontAwesomeIcon className={'h-3 text-slate-500 pt-1'} icon={faArrowDown}/>
                    </div>
                </div>
                <div className={'flex mt-4'}>
                    <p className={'text-slate-700'}>Conversion rate</p>
                    <div className={'flex space-x-2 ml-auto'}>
                        <p className={'text-green-500'}>7%</p>
                        <FontAwesomeIcon className={'h-3 text-green-500 pt-1'} icon={faArrowTrendUp}/>
                    </div>
                </div>
                <div className={'h-1 w-full bg-slate-300 rounded-xl'}>
                    <div className={'h-1 w-3/4 bg-blue-700 rounded-xl'}/>
                </div>
            </div>
        </div>
    )
}
