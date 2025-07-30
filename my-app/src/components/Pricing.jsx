import React, { useState } from 'react'

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelection = (planName, price, planId) => {
    setSelectedPlan({ name: planName, price: price, id: planId });
    
    if (planId === 'enterprise') {
      // For enterprise, scroll to contact section
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // For other plans, handle checkout
    handleCheckout(planName, price);
  };

  const handleCheckout = (planName, price) => {
    // In a real application, you would integrate with a payment processor
    // For now, we'll show a confirmation and could redirect to a payment page
    
    const confirmed = window.confirm(
      `You've selected the ${planName} plan for $${price}/month.\n\n` +
      `Click OK to proceed to checkout, or Cancel to continue browsing.`
    );
    
    if (confirmed) {
      // In production, redirect to payment processor or show payment modal
      // For demo purposes:
      alert(
        `🎉 Great! You're being redirected to secure checkout.\n\n` +
        `Plan: ${planName}\n` +
        `Price: $${price}/month\n\n` +
        `In a real app, this would integrate with Stripe, PayPal, or another payment processor.`
      );
      
      // Example of what you'd do in production:
      // window.location.href = `/checkout?plan=${planName.toLowerCase()}&price=${price}`;
      // or open a payment modal
    }
  };

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
          {/* Starter Plan */}
          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs hover:shadow-lg transition-shadow duration-300">
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

              <button 
                onClick={() => handlePlanSelection('Starter', 20, 'starter')}
                className="mt-4 block w-full rounded-lg border border-orange-600 bg-orange-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-gray-800 focus:ring-3 focus:outline-none transition-all duration-200 sm:mt-6"
              >
                Get Started
              </button>
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
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-gray-400 shadow-sm">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span className="text-gray-400 line-through"> Recording features </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-gray-400 shadow-sm">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span className="text-gray-400 line-through"> Priority support </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-gray-400 shadow-sm">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span className="text-gray-400 line-through"> Custom branding </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pro Plan - Most Popular */}
          <div className="relative divide-y divide-gray-200 rounded-2xl border-2 border-orange-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>

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

              <button 
                onClick={() => handlePlanSelection('Pro', 50, 'pro')}
                className="mt-4 block w-full rounded-lg bg-orange-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-orange-700 focus:ring-4 focus:ring-orange-200 transition-all duration-200 sm:mt-6"
              >
                Get Started
              </button>
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
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-gray-400 shadow-sm">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span className="text-gray-400 line-through"> Advanced analytics </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs hover:shadow-lg transition-shadow duration-300">
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

              <button 
                onClick={() => handlePlanSelection('Enterprise', 200, 'enterprise')}
                className="mt-4 block w-full rounded-lg border border-orange-600  bg-orange-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-gray-800 focus:ring-3 focus:outline-none transition-all duration-200 sm:mt-6"
              >
                Get Started
              </button>
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

        {/* Additional CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Not sure which plan is right for you?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Start with our Starter plan and upgrade anytime as your needs grow. 
              All plans come with a 14-day free trial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                Contact Sales
              </button>
              <button 
                onClick={() => handlePlanSelection('Starter', 20, 'starter-trial')}
                className="px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors duration-200"
              >
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing