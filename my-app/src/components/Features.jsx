import React from 'react'

const Features = () => {
  return (
    <div id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for <span className="text-orange-500">Live Streaming</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to create engaging live streams with professional quality and seamless user experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">HD Video Quality</h3>
            <p className="text-gray-600">
              Stream in crystal-clear HD quality with adaptive bitrate streaming for the best viewing experience across all devices.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Crystal Clear Audio</h3>
            <p className="text-gray-600">
              Professional-grade audio processing with noise cancellation and echo reduction for pristine sound quality.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Low Latency</h3>
            <p className="text-gray-600">
              Ultra-low latency streaming ensures real-time interaction with your audience for engaging live experiences.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time Chat</h3>
            <p className="text-gray-600">
              Engage with your audience through integrated real-time chat functionality with moderation tools.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Screen Sharing</h3>
            <p className="text-gray-600">
              Share your screen, applications, or specific windows seamlessly during your live streams.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure Rooms</h3>
            <p className="text-gray-600">
              End-to-end encrypted rooms with password protection and waiting room features for privacy and security.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to experience the difference?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of creators who trust StreamLive for their live streaming needs.
          </p>
          <button 
            onClick={() => document.getElementById('joinsection').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors duration-200"
          >
            Start Streaming Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Features