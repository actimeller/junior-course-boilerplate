import React from 'react';
import PropTypes from 'prop-types';
import s from './NotFound.module.scss'
import islandImage from '../../assets/images/island.svg'
const NotFound = () => {
    return (
        <div className={s.NotFound}>
            <img src={islandImage}/>
            <span>404</span>
        </div>
    )
};

export default NotFound;


