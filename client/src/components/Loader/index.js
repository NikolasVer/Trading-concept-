import React from 'react';
import './index.css';

export default class Loader extends React.Component{
    render() {
        return (
            <div id="cssload-loader">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        )
    }
}