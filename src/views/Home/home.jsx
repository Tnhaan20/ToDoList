import React from 'react'

export default function home() {
    const currentDate = new Date();
    const options = { weekday: 'short', day: 'numeric', month: 'long' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options).toUpperCase();
    
    const greeting = () => {
        const hour = new Date().getHours();
        if(hour > 6 && hour <12) return 'Good morning'
        else if(hour > 12 && hour < 18) return 'Good Afternoon'
        else return 'Good evening'
    }

    

  return (
    <>
        {/* Home Page */}
    <div className="pl-[31rem] h-full flex flex-col justify-center items-center text-white p-4">
    <div className="absolute top-2 pt-5">
      <h1 className="text-4xl font-bold mb-2">{greeting()}, Nhân.</h1>
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
        <div className="flex flex-col space-y-2">
            <div className="relative cursor-pointer  group inline-flex items-center">
            <img className="w-10 h-10" src="https://fonts.gstatic.com/s/i/productlogos/calendar_2020q4/v13/192px.svg" alt="" />
            <span className="ml-2 w-0 font-bold text-lg hover-underline-animation overflow-hidden whitespace-nowrap group-hover:w-64 transition-all duration-300 ease-in-out">
                Connect Google Calendar
            </span>
            </div>
            <div className="relative group cursor-pointer inline-flex items-center">
            <img className="w-10 h-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaP23uZPuHw9bcX1H0n8FxTD_EU3O3rRNhYg&s" alt="" />
            <span className="ml-2 w-0 font-bold text-lg hover-underline-animation overflow-hidden whitespace-nowrap group-hover:w-64 transition-all duration-300 ease-in-out">
                Connect Outlook Calendar
            </span>
            </div>
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
