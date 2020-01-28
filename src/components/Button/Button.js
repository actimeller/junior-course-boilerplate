import React from 'react';
import cx from 'classnames';
import s from './Button.module.scss'

const Button = ({children, handleClick, isLoading}) => {
    return (
        <button
            className={cx(s.Button, {[s.ButtonLoading]: isLoading})}
            type="button"
            onClick={e => handleClick()}
        >
            {children}
        </button>
    )
};

export default Button;
