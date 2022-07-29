import React from 'react';

export default class List extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const listItems = this.props.listItems.map(({title, link, icon }) =>
            <li><i class={icon}></i><a href={link}>{title}</a></li>
        );
        return (
            <ul>{listItems}</ul>
        );
        
    }
}