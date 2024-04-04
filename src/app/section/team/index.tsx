import Image from 'next/image'
import { people } from './data'

const Team = () => {
  return (
    <div className="py-24 sm:py-32" id="contact-us">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our Team
          </h2>
          <p className="mt-6 text-medium leading-8 text-gray-600">
            We are a group of passionate builders who are dedicated to create a
            better web3 ecosystem.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <Image
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt=""
                  width={64}
                  height={64}
                />
                <div>
                  <a href={person.contact} target="_blank">
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 hover:underline">
                      {person.name}
                    </h3>
                  </a>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Team
