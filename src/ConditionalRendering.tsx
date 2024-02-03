import React, { useState } from "react";

const ConditionalRendering: React.FC = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    // Set the subscribed state to true when the button is clicked
    setSubscribed(true);
  };

  return (
    <div>
      {subscribed ? (
        <h1>Thank you for subscribing!</h1>
      ) : (
        <div>
          <h1>
            Guys subscribe channel.. <b>AAPLA INSTITUTE!!</b>
          </h1>
          {/* Call handleSubscribe when the button is clicked */}
          <button onClick={handleSubscribe}>Subscribe</button>
        </div>
      )}
    </div>
  );
};

export default ConditionalRendering;
