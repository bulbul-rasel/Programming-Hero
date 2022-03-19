import React from 'react';
import DeviceDetails from './DeviceDetails';

const Device = (props) => {
    return (
        <div>
            <h1>Device Name: {props.name}</h1>
            <DeviceDetails price={props.price}></DeviceDetails>
        </div>
    );
};

export default Device;