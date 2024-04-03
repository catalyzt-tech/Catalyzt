const Hero = () => {
    return (
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
    );
}

export default Hero;