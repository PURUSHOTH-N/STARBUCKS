import React from 'react'

const Consumer2 = () => {
    let data2 = useContext(myContext);
    console.log("Consumer-2",data2);
    
  return (
    <div>Property for consumer-2</div>
  )
}

export default Consumer2