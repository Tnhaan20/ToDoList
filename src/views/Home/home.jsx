import React from 'react'

export default function home() {
    const currentDate = new Date();
    const options = { weekday: 'short', day: 'numeric', month: 'long' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options).toUpperCase();
  return (
    <>
        {/* Home Page */}
    <div className="pl-[31rem] h-full flex flex-col justify-center items-center text-white p-4">
    <div className="absolute top-2 py-8">
      <h1 className="text-4xl font-bold mb-2">Good Evening, Nhân.</h1>
      <h2 className="text-2xl text-gray-300">Remove doubts with action</h2>
    </div>
    
    <div className="background flex flex-col sm:flex-row items-center rounded-lg justify-center p-5 max-w-3xl w-full">
      <div className="text-center mb-4 sm:mb-0 sm:mr-5">
        <div className="text-xl">{formattedDate.split(' ')[0]}</div>
        <div className="text-6xl font-bold">{currentDate.getDate()}</div>
        <div className="text-xl">{currentDate.toLocaleString('default', { month: 'long' })}</div>
      </div>
      <div className="text-center sm:text-left">
        <h3 className="text-xl mb-2">Sync your time with our to do</h3>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <span className="hover-underline-animation">Connect Google Calendar</span>
          <span className="hover-underline-animation">Connect Outlook Calendar</span>
        </div>
      </div>
    </div>

    <div className="absolute bottom-2 py-2 w-full max-w-xl">
      <input 
        type="text" 
        placeholder="Add task" 
        className="background text-white px-5 py-2 rounded w-full"
      />
    </div>
  </div>
    </>
  )
}
