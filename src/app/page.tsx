// fake data de projetos pessoais

import { Hero } from '@/components/Hero'
import { Participate } from '@/components/Participate'

const fakeData = [
  {
    title: 'Projeto 1',
    description: 'Descrição do projeto 1',
    image: 'https://picsum.photos/200/300',
    link: 'https://google.com',
  },
  {
    title: 'Projeto 2',
    description: 'Descrição do projeto 2',
    image: 'https://picsum.photos/200/300',
    link: 'https://google.com',
  },
  {
    title: 'Projeto 3',
    description: 'Descrição do projeto 3',
    image: 'https://picsum.photos/200/300',
    link: 'https://google.com',
  },
]

export default function Home() {
  return (
    <div>
      <Hero />
      <Participate />

      <div className="text-center mt-10 bg-gradient-to-t from-zinc-900 to-zinc-800  py-20 px-6">
        <span className="text-lg font-semibold text-pink-800 font-alt text-center mt-10">
          import {'{ *'} <span className="italic">as</span>{' '}
          <span className="text-yellow-600">p</span>
          {' }'} from {''}
          <span className="text-yellow-500">&apos;projects&apos;</span>
        </span>
        <h1 className="text-4xl font-semibold text-gray-200 font-alt text-center mt-10">
          Projetos em destaque
        </h1>
        <p className="text-center text-base text-gray-400 mt-5">
          Descubra os projetos em destaque: as criações mais votadas e admiradas{' '}
          <br />
          pela comunidade de desenvolvedores no Ranking dos Projetos. Seja{' '}
          <br />
          inspirado e vote nos seus favoritos!
        </p>

        <div className="lg:grid lg:grid-cols-4 mt-10 gap-10">
          {fakeData.map((project, index) => (
            <div
              className={`bg-gradient-to-${
                index % 2 === 0 ? 'r' : 'l'
              } from-neutral-900 to-neutral-800 text-gray-200 shadow-lg rounded overflow-hidden hover:-translate-y-5 hover:shadow-black transition-all ${
                index === 0
                  ? 'col-span-4'
                  : index === 1
                  ? 'col-span-2'
                  : index === 2
                  ? 'col-span-2'
                  : ''
              }`}
              key={index}
            >
              <img
                className="w-full h-56 object-cover object-center"
                src={project.image}
                alt="avatar"
              />
              <div className="py-5 px-6">
                <h1 className="text-2xl font-semibold text-gray-200">
                  {project.title}
                </h1>
                <p className="py-2 text-lg text-gray-200">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="block text-left text-blue-600"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
