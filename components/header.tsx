export default function Header() {
    return (
        <div className={'mx-16 mt-4 flex justify-between'}>
            <img src={'logo.svg'} className={'h-8'}/>

            <div className={'flex space-x-4 h-10 place-items-center'}>
                <div className={'border-2 rounded p-1 flex place-items-center space-x-2'}>
                    <img src={'github.png'} className={'h-4'}/>
                    <p className={'font-ubuntu'}>
                        Source code
                    </p>
                </div>
                <div className={'border-2 rounded p-1 flex place-items-center space-x-2'}>
                    <img src={'heart.svg'} className={'h-4'}/>
                    <p className={'font-ubuntu'}>
                        Sponsor
                    </p>
                </div>
                <img src={'moon.svg'} className={'h-6'}/>
                <img src={'bell.png'} className={'h-6'}/>
                <div className={'p-1 flex place-items-center space-x-2'}>
                    <img src={'me.jpg'} className={'h-8 rounded'}/>
                    <div className={'font-ubuntu text-sm'}>
                        <p>
                            Furkan Kurt
                        </p>
                        <p className={'text-slate-500 text-xs'}>
                            UI Designer
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}