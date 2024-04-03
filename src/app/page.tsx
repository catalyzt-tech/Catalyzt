import Navibar from "./components/Navibar";
import Image from "next/image";
import { ArrowTrendingUpIcon, ChatBubbleLeftRightIcon, LightBulbIcon, GlobeAmericasIcon, ChartBarSquareIcon } from '@heroicons/react/20/solid'
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Footer from "./components/Footer";
import Link from "next/link";



const features = [
  {
    name: 'Builders Community.',
    description:
      'We build a community of builders to create a feadback loop for their projects. Also, providing important resources to help them get started.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Impact Analysis.',
    description: 'Measure the impact of contributions and get rewarded from the chain for your work.',
    icon: ChartBarSquareIcon,
  },
  {
    name: 'Ideas List.',
    description: 'As a medium, we provided builders with ideas from the governance to accererate your ecosystem.',
    icon: LightBulbIcon,
  }
]

const goals = [
  {
    name: 'Embrace Collaborations',
    description:
      'We know that building a DAO alone is tough, we are here to create a collaboration in the ecosystem.',
    icon: GlobeAmericasIcon,
  },
  {
    name: 'Grow From Contributions',
    description: 'We believe that the more you contribute, the more you grow. We provide a platform for you to grow.',
    icon: ArrowTrendingUpIcon,
  },

]

const people = [
  {
    name: 'Billy191.eth',
    role: 'Founder',
    imageUrl:
      '/assets/team/billy191.jpg',
    contact: 'https://twitter.com/billy191',
  },
  {
    name: 'wit03.eth',
    role: 'Co-Founder / CPO',
    imageUrl:
      '/assets/team/wit03.png',
    contact: 'https://twitter.com/witjarukit',
  },
  {
    name: 'TGRZiminiar',
    role: 'Software Engineer',
    imageUrl:
      '/assets/team/tgr.jpeg',
    contact: '#'
  },

]

export default function Home() {

  return (
    <div className="bg-white">

      <header className="sticky inset-x-0 top-0 z-50 flex justify-center">
        <div className="absolute">
          <Navibar />
        </div>
      </header>

      <div className="relative isolate">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <section className="mx-auto max-w-2xl px-6 lg:px-8 min-h-screen flex flex-col justify-center items-center">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our latest launch with Optimism.{' '}
              <a href="https://contribute.optimism.io/#get%20started" target="_blank" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Visit Site <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight py-4 text-gray-900 sm:text-6xl">
              Empowering the web3 through contributions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We create platform for builders and creators in web3 DAO to contribute and collaborate on projects.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {/* <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a> */}
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <section className="pb-24 sm:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Deep Dive</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Focuses
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We aims to accelerate the growth of web3 DAOs.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {goals.map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="overflow-hidden pb-24 sm:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-indigo-600">We create</h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A platform to support creations</p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    At Catalyzt, we believe in the power of web3 changing the world. We are building multiple tools in collaboration with chains governance such as Optimism, to help contributors grow their products.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                          {feature.name}
                        </dt>{' '}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <img
                src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                alt="Product screenshot"
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </section>



        <section className="px-6 lg:px-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-3xl font-semibold leading-8 text-gray-900">
              Our Valuable Partners
            </h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <a href="https://www.curiahub.xyz/" target="_blank">
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src="/assets/partner/curia-banner.svg"
                  alt="curia-lab"
                  width={158}
                  height={48}
                />
              </a>
              <a href="https://optimism.io/" target="_blank">
                <Image
                  className="col-span-2 max-h-8 w-full object-contain lg:col-span-1"
                  src="/assets/partner/optimism-banner.svg"
                  alt="optimism"
                  width={158}
                  height={48}
                />
              </a>
              <a href="https://www.opensource.observer/" target="_blank">
                <Image
                  className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
                  src="/assets/partner/oso-banner.svg"
                  alt="opensource-observer"
                  width={158}
                  height={48}
                />
              </a>
            </div>
          </div>
        </section>

        <div className="py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Team</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We are a group of passionate builders who are dedicated to create a better web3 ecosystem.
              </p>
            </div>
            <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
              {people.map((person) => (
                <li key={person.name}>
                  <div className="flex items-center gap-x-6">
                    <Image className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" width={64} height={64} />
                    <div>
                      <a href={person.contact} target="_blank">
                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 hover:underline">{person.name}</h3>
                      </a>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}
