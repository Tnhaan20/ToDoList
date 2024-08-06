import React from 'react';

export default function MyDay() {
    const currentDate = new Date();
    const options = { weekday: 'short', day: 'numeric', month: 'long' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options).toUpperCase();
  return (
    <>
    <div className="flex h-screen">

    <div className="flex-1 p-8">
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-4xl font-bold text-white"><i className="fa fa-bullseye" aria-hidden="true"></i> My Day</h1>
            <p className="text-white pt-2">{formattedDate}</p>
          </div>
          
        </header>
        
      </div>
    </div>
    </>

  );
}