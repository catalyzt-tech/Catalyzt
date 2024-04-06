import Image from 'next/image'
import Link from 'next/link'
const Partner = () => {
  return (
    <section className="px-6 lg:px-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold leading-8 text-gray-900">
          Our Valuable Partners
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <Link
            className="hover:scale-105 transition ease-in-out duration-200 col-span-2 lg:col-span-1"
            href="https://www.curiahub.xyz/"
            target="_blank"
          >
            <Image
              className=" max-h-12 w-full object-contain"
              src="/assets/partner/curia-banner.svg"
              alt="curia-lab"
              width={158}
              height={48}
            />
          </Link>
          <Link
            className="hover:scale-105 transition ease-in-out duration-200 col-span-2 lg:col-span-1"
            href="https://optimism.io/"
            target="_blank"
          >
            <Image
              className="max-h-8 w-full object-contain"
              src="/assets/partner/optimism-banner.svg"
              alt="optimism"
              width={158}
              height={48}
            />
          </Link>
          <Link
            className="hover:scale-105 transition ease-in-out duration-200 col-span-2 lg:col-span-1"
            href="https://www.opensource.observer/"
            target="_blank"
          >
            <Image
              className="max-h-28 w-full object-contain"
              src="/assets/partner/oso-banner.svg"
              alt="opensource-observer"
              width={158}
              height={48}
            />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Partner
