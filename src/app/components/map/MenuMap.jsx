import React,{Component} from 'react';


export default class MenuMap extends Component {
    constructor(props) {
        super(props);
        this.list=props.listUser;
        console.log(this.list);
    }

    render() {
        return (
            <div className="menuMapArea">
                {this.list.map(function(list){
                    return (
                        <div className="menuMapItem" key={list.name}>{list.name}</div>
                    )
                }.bind(this))}
            </div>
        )

    }
};
