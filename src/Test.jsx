import React, { useEffect, useState } from 'react';

const CenteredComponent = () => {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    // Hide the initial message after 3 seconds
    const initialTimeout = setTimeout(() => setShowMessage(false), 3000);

    // Show the message every 1 minute for 3 seconds
    const interval = setInterval(() => {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    }, 10000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative h-screen  bg-gray-100 flex items-center justify-center">
     
      {showMessage && (
<div className="fixed right-2 sm:right-4 md:right-6 lg:right-8 top-1/2 transform -translate-y-1/2 
  bg-purple-400 rounded-3xl p-2 
  text-xs sm:text-xs md:text-[11px] lg:text-[10px] 
  text-purple-800 font-semibold z-50">
  Click on pic to see explanation
</div>

      )}
    </div>
  );
};

export default CenteredComponent;
