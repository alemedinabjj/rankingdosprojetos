import Link from 'next/link'

export function Hero() {
  return (
    <>
      <div className="mt-10 flex flex-1 flex-col py-20 px-6 items-center justify-center gap-4 bg-gradient-to-r from-zinc-900 to-zinc-800 ">
        <span className="text-lg font-semibold text-pink-800 font-alt text-center ">
          import {'{ *'} <span className="italic">as</span>{' '}
          <span className="text-yellow-600">r</span>
          {' }'} from {''}
          <span className="text-yellow-500">&apos;ranking&apos;</span>
        </span>

        <h1 className="text-4xl font-semibold text-gray-200 font-alt mt-6">
          Ranking dos Projetos
        </h1>

        <div className="text-center text-base text-gray-400">
          <p>
            O Ranking dos Projetos é uma plataforma dinâmica e interativa onde
            desenvolvedores podem compartilhar seus projetos e receber o
            reconhecimento da comunidade.
          </p>

          <p>
            Suba seus projetos, obtenha votos e descubra as melhores ideias,
            tecnologias e talentos na área de desenvolvimento.
          </p>

          <p>
            Participe agora e seja parte dessa comunidade colaborativa que
            impulsiona a inovação e o sucesso dos projetos!
          </p>
        </div>

        <div className="flex flex-1 flex-col md:flex-row gap-4">
          <Link
            href="/register"
            className="bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-2 px-4 rounded"
          >
            Cadastre-se
          </Link>
          <Link
            href="/login"
            className="bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  )
}
