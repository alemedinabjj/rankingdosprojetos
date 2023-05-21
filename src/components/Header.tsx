import { BsDiscord } from 'react-icons/bs'

export function Header() {
  return (
    <header className="flex items-center justify-between flex-wrap bg-neutral-900 p-6 shadow-lg">
      <div className="flex items-center italic flex-shrink-0 text-gray-200 mr-6 font-alt">
        <span className="font-semibold text-xl tracking-tight">
          {'< '}Ranking
        </span>
        <span className="font-semibold text-xl tracking-tight animate-pulse">
          <span className="inline-block">.</span>
        </span>
        <span className="font-semibold text-xl tracking-tight">dos</span>
        <span className="font-semibold text-xl tracking-tight animate-pulse">
          <span className="inline-block">.</span>
        </span>
        <span className="font-semibold text-xl tracking-tight">
          projetos{' />'}
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path
              d="M0 0h20v20H0V0zm2 2h16v16H2V2zm3 5h10v2H5V7zm0 4h10v2H5v-2zm0 4h10v2H5v-2z"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto gap-2">
        <div className="text-sm lg:flex-grow"></div>
        <div>
          {' '}
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white"
          >
            Todos os projetos
          </a>
        </div>
        <div className="h-6 w-[1px] bg-slate-50" />
        <div>
          {' '}
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white"
          >
            Sobre nós
          </a>
        </div>
        <div className="h-6 w-[1px] bg-slate-50" />
        <div>
          {' '}
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white"
          >
            Suporte
          </a>
        </div>
        <div className="h-6 w-[1px] bg-slate-50" />
        <div className="flex gap-1 items-center">
          {' '}
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white"
          >
            Discord
          </a>
          <BsDiscord className="inline-block ml-2 text-gray-400" />
        </div>
      </div>
    </header>
  )
}
