// src/components/MyHOC.js
import React from 'react';

const MyHOC = (WrappedComponent) => {
    return (props) => { 
        return (
            <div className="wrapper">
                <WrappedComponent {...props} name="MyName" />
            </div>
        );
    };
};

export default MyHOC;