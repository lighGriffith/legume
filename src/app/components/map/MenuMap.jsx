import React,{Component} from 'react';


export default class MenuMap extends Component {
    constructor(props) {
        super(props);
        this.list=props.listUser;
    }
    showModal(user) {
        console.log(user);
        this.props.showPopin(user);
    }
    render() {
        return (
            <div className="menuMapArea">
                {this.list.map(function(list){
                    return (
                        <div onClick={this.showModal.bind(this,list) }
                             className="menuMapItem" key={list.name}>{list.name}</div>
                    )
                }.bind(this))}
            </div>
        )

    }
};
