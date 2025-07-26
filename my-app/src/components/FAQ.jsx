import React from 'react'

const FAQ = () => {
  return (
    <div className='bg-[linear-gradient(to_top,_rgba(247,247,247,0.96)_0%,_rgba(212,212,212,1)_43%,_rgba(240,240,240,1)_100%)] py-24'>
    <div className='max-w-2xl mx-auto' ><div className="space-y-4"><h1 className='text-3xl font-bold text-center my-14'>Frequently asked questions</h1>
  <details className="group [&amp;_summary::-webkit-details-marker]:hidden" open="">
    <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900">
      <h2 className="text-lg font-medium">1. What is StreamLive and who is it for?</h2>

      <svg className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </summary>

    <p className="px-4 pt-4 text-gray-900">
     StreamLive is a cutting-edge live streaming platform built for content creators, educators, and communities. Whether you’re teaching a class, hosting an event, or sharing your passion, StreamLive makes going live effortless.
    </p>
  </details>

  <details className="group [&amp;_summary::-webkit-details-marker]:hidden">
    <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900">
      <h2 className="text-lg font-medium">2. Do I need to install any software to use StreamLive?</h2>

      <svg className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </summary>

    <p className="px-4 pt-4 text-gray-900">
    Nope! StreamLive is 100% browser-based. Just open the link, join the room, and start streaming — no downloads or plugins required.
    </p>
  </details>

  <details className="group [&amp;_summary::-webkit-details-marker]:hidden">
    <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900">
      <h2 className="text-lg font-medium">3. Is the video and audio quality good enough for professional use?</h2>

      <svg className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </summary>

    <p className="px-4 pt-4 text-gray-900">
      Absolutely. We offer HD video, crystal-clear audio, and low-latency performance for a smooth and professional live experience.


    </p>
  </details>
</div>
</div>
</div>
  )
}

export default FAQ