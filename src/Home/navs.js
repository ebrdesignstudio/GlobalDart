import React, { Component } from 'react';
import styles from '../Home/styles.css';
import sharedStyles from '../Styles/styles.css';
import Button from '@material-ui/core/Button';
import _ from 'lodash';

class Navs extends Component {
    constructor(props){
        super(props);
        this.navItems = [
            {label: 'Home',link:'/'},
            {label: 'Admissions',link:'#admissions'},
            {label: 'Events',link:'#events'},
            {label: 'FAQ',link: '/faq'},
            {label: 'Blog',link:'/blog'},
            {label: 'Contact', link: '#contact'}
        ]
    }

    wrapInLink = (child, nav) => {
        return <a style={{ textDecoration:'none'}} href={nav.link}>{child}</a>
    }
    render() {
        return (
            <div style={{ background: 'transparent', position:'fixed', minWidth:'100%'}} className="nav">
                {
                    _.map(this.navItems, nav => {
                        const button = <Button onClick={nav.onClick} className="nav-mobile" style={{ textTransform : 'capitalize', fontSize: 14, color:'white' }}>{nav.label}</Button>
                        return nav.link ? this.wrapInLink(button, nav) : button;
                    })}
            </div>
        )
    }
}

export default Navs;
