import React from 'react'

const Pricing = () => {
  return (
    <div id="pricing" className="bg-gray-50 py-24">
      <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your <span className="text-orange-500">Plan</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Select the perfect plan for your streaming needs. Start free and upgrade as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs">
            <div className="p-6 sm:px-8">
              <h2 className="text-lg font-medium text-gray-900">
                Starter
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 text-gray-700">Perfect for individuals and small creators getting started.</p>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 20$ </strong>
                <span className="text-sm font-medium text-gray-700">/month</span>
              </p>

              <a className="mt-4 block rounded-sm border border-orange-600 bg-orange-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-orange-600 focus:ring-3 focus:outline-hidden sm:mt-6" href="#">
                Get Started
              </a>
            </div>

            <div className="p-6 sm:px-8">
              <p className="text-lg font-medium text-gray-900 sm:text-xl">What's included:</p>

              <ul className="mt-2 space-y-2 sm:mt-4">
                <li className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-orange-700 shadow-sm">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                  </svg>
                  <span className="text-gray-700"> Up to 10 participants </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-orange-700 shadow-sm">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                  </svg>
                  <span className="text-gray-700"> HD video quality </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-orange-700 shadow-sm">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                  </svg>
                  <span className="text-gray-700"> Basic chat features </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-orange-700 shadow-sm">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span className="text-gray-700"> Recording features </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-orange-700 shadow-sm">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span className="text-gray-700"> Priority support </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-orange-700 shadow-sm">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span className="text-gray-700"> Custom branding </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs">
            <div className="p-6 sm:px-8">
              <h2 className="text-lg font-medium text-gray-900">
                Pro
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 text-gray-700">Ideal for growing creators and small businesses.</p>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 50$ </strong>
                <span className="text-sm font-medium text-gray-700">/month</span>
              </p>

              <a className="mt-4 block rounded-sm border border-orange-600 bg-orange-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-orange-600 focus:ring-3 focus:outline-hidden sm:mt-6" href="#">
                Get Started
              </a>
            </div>

            <div className="p-6 sm:px-8">
              <p className="text-lg font-medium text-gray-900 sm:text-xl">What's included:</p>

              <ul className="mt-2 space-y-2 sm:mt-4">
                <li className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-orange-700 shadow-sm">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                  </svg>
                  <span className="text-gray-700"> Up to 50 participants </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-orange-700 shadow-sm">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                  </svg>
                  <span className="text-gray-700"> Full HD video quality </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-orange-700 shadow-sm">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                  </svg>
                  <span className="text-gray-700"> Advanced chat & moderation </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-orange-700 shadow-sm">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                  </svg>
                  <span className="text-gray-700"> Stream recording </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-orange-700 shadow-sm">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                  </svg>
                  <span className="text-gray-700"> Email support </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-orange-700 shadow-sm">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span className="text-gray-700"> Advanced analytics </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs">
            <div className="p-6 sm:px-8">
              <h2 className="text-lg font-medium text-gray-900">
                Enterprise
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 text-gray-700">For large organizations and enterprise needs.</p>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 200$ </strong>
                <span className="text-sm font-medium text-gray-700">/month</span>
              </p>

              <a className="mt-4 block rounded-sm border border-orange-600 bg-orange-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-orange-600 focus:ring-3 focus:outline-hidden sm:mt-6" href="#">
                Contact Sales
              </a>
            </div>

            <div className="p-6 sm:px-8">
              <p className="text-lg font-medium text-gray-900 sm:text-xl">What's included:</p>

              <ul className="mt-2 space-y-2 sm:mt-4">
                <li className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-orange-700 shadow-sm">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                  </svg>
                  <span className="text-gray-700"> Unlimited participants </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-orange-700 shadow-sm">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                  </svg>
                  <span className="text-gray-700"> 4K video quality </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-orange-700 shadow-sm">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                  </svg>
                  <span className="text-gray-700"> Enterprise chat features </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-orange-700 shadow-sm">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                  </svg>
                  <span className="text-gray-700"> Cloud recording & storage </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-orange-700 shadow-sm">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                  </svg>
                  <span className="text-gray-700"> 24/7 priority support </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-orange-700 shadow-sm">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                  </svg>
                  <span className="text-gray-700"> Custom integrations </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing