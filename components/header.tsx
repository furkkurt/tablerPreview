import { Squash as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faBox, faCheckSquare, faStar, faBoxes, faGhost, faEnvelopeOpen, faLifeRing } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={'bg-white py-4 border-2'}>
            <div className={'mx-2 mt-4 flex justify-between md:mx-16'}>
                <div className={'md:hidden'}>
                    <Hamburger onToggle={() => setIsOpen((prev) => !prev)}/>
                </div>
                <img src={'logo.svg'} className={'h-8'}/>
                <div className={'flex space-x-4 h-10 place-items-center hidden md:flex'}>
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
                <img src={'me.jpg'} className={'h-8 rounded block md:hidden'}/>
            </div>
            <div className={'hidden md:flex mx-2'}>
                <div className={'flex w-full mt-4 gap-4'}>
                    <button className={'flex space-x-2 pt-1'}>
                        <FontAwesomeIcon className={'pt-1 text-slate-500 hidden lg:block'} icon={faHome}/>
                        <p className={'font-ubuntu text-slate-500'}>
                            Home
                        </p>
                    </button>
                    <button className={'flex space-x-2 pt-1'}>
                        <FontAwesomeIcon className={'pt-1 text-slate-500 hidden lg:block'} icon={faBox}/>
                        <p className={'font-ubuntu text-slate-500'}>
                            Interface
                        </p>
                    </button>
                    <button className={'flex space-x-2 pt-1'}>
                        <FontAwesomeIcon className={'pt-1 text-slate-500 hidden lg:block'} icon={faCheckSquare}/>
                        <p className={'font-ubuntu text-slate-500'}>
                            Form elements
                        </p>
                    </button>
                    <button className={'flex space-x-2 pt-1'}>
                        <FontAwesomeIcon className={'pt-1 text-slate-500 hidden lg:block'} icon={faStar}/>
                        <p className={'font-ubuntu text-slate-500'}>
                            Extra
                        </p>
                    </button>
                    <button className={'flex space-x-2 pt-1'}>
                        <FontAwesomeIcon className={'pt-1 text-slate-500 hidden lg:block'} icon={faBoxes}/>
                        <p className={'font-ubuntu text-slate-500'}>
                            Layout
                        </p>
                    </button>
                    <button className={'flex space-x-2 pt-1'}>
                        <FontAwesomeIcon className={'pt-1 text-slate-500 hidden lg:block'} icon={faGhost}/>
                        <p className={'font-ubuntu text-slate-500'}>
                            4637 icons
                        </p>
                    </button>
                    <button className={'flex space-x-2 pt-1'}>
                        <FontAwesomeIcon className={'pt-1 text-slate-500 hidden lg:block'} icon={faEnvelopeOpen}/>
                        <p className={'font-ubuntu text-slate-500'}>
                            Email templates
                        </p>
                    </button>
                    <button className={'flex space-x-2 pt-1'}>
                        <FontAwesomeIcon className={'pt-1 text-slate-500 hidden lg:block'} icon={faLifeRing}/>
                        <p className={'font-ubuntu text-slate-500'}>
                            Help
                        </p>
                    </button>
                    <div className={'ml-auto flex space-x-2 border rounded h-8 hidden xl:flex'}>
                        <FontAwesomeIcon className={'p-2 text-slate-500'} icon={faSearch}/>
                        <input className={'pt-1 bg-transparent'} placeholder={'Search...'}/>
                    </div>
                </div>
            </div>
            <div className={'space-x-2 border rounded h-8 w-1/4 hidden md:flex xl:hidden mx-2 mt-2'}>
                <FontAwesomeIcon className={'p-2 text-slate-500'} icon={faSearch}/>
                <input className={'pt-1 bg-transparent'} placeholder={'Search...'}/>
            </div>
            {isOpen &&
                <div className={'flex flex-col w-full mt-4 gap-4 md:hidden'}>
                    <div className={'flex space-x-2 border rounded h-8'}>
                        <FontAwesomeIcon className={'p-2 text-slate-500'} icon={faSearch}/>
                        <input className={'pt-1 w-full bg-transparent'} placeholder={'Search...'}/>
                    </div>
                    <button className={'flex space-x-2'}>
                        <FontAwesomeIcon className={'pt-1 text-slate-500'} icon={faHome}/>
                        <p className={'font-ubuntu text-slate-500'}>
                            Home
                        </p>
                    </button>
                    <button className={'flex space-x-2'}>
                        <FontAwesomeIcon className={'pt-1 text-slate-500'} icon={faBox}/>
                        <p className={'font-ubuntu text-slate-500'}>
                            Interface
                        </p>
                    </button>
                    <button className={'flex space-x-2'}>
                        <FontAwesomeIcon className={'pt-1 text-slate-500'} icon={faCheckSquare}/>
                        <p className={'font-ubuntu text-slate-500'}>
                            Form elements
                        </p>
                    </button>
                    <button className={'flex space-x-2'}>
                        <FontAwesomeIcon className={'pt-1 text-slate-500'} icon={faStar}/>
                        <p className={'font-ubuntu text-slate-500'}>
                            Extra
                        </p>
                    </button>
                    <button className={'flex space-x-2'}>
                        <FontAwesomeIcon className={'pt-1 text-slate-500'} icon={faBoxes}/>
                        <p className={'font-ubuntu text-slate-500'}>
                            Layout
                        </p>
                    </button>
                    <button className={'flex space-x-2'}>
                        <FontAwesomeIcon className={'pt-1 text-slate-500'} icon={faGhost}/>
                        <p className={'font-ubuntu text-slate-500'}>
                            4637 icons
                        </p>
                    </button>
                    <button className={'flex space-x-2'}>
                        <FontAwesomeIcon className={'pt-1 text-slate-500'} icon={faEnvelopeOpen}/>
                        <p className={'font-ubuntu text-slate-500'}>
                            Email templates
                        </p>
                    </button>
                    <button className={'flex space-x-2'}>
                        <FontAwesomeIcon className={'pt-1 text-slate-500'} icon={faLifeRing}/>
                        <p className={'font-ubuntu text-slate-500'}>
                            Help
                        </p>
                    </button>
                </div>
            }
        </div>
    )
}