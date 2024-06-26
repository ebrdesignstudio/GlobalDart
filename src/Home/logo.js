import React from 'react';
import classNames from 'classnames';


const Logo = (props) => {
    return (
        <div
            id={props.id}
            className={classNames("logo", props.className)}
            onClick={() => { window.location.pathname = '/'}} 
            style={{
                backgroundImage: `url(${require('../assets/global-dart-logo/logo.png').default})`,
            }}
        />
    )
}

export default Logo;