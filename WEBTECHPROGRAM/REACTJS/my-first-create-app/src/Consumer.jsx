import React from 'react';
import{myContext} from "./Context";

const Consumer = () => {
    let dataRecieved = useContext (myContext);
    console.log("Consumer-1:", dataRecieved);
  return (
    <div>Property for consumer-1:{dataRecieved}</div>
  );
};

export default Consumer;