import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  return (
    <div>
        <h1>ParentComponent</h1>
        <ChildComponent name="Purushoth" age={18} />
    </div>
  )
}

export default ParentComponent;