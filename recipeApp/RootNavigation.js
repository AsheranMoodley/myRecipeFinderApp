import * as React from 'react';

//refernce to our navigation object
export const navigationRef = React.createRef();

export function navigate(name) {
    navigationRef.current?.navigate(name);
}