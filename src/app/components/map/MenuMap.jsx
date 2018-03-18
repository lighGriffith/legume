import React,{Component} from 'react';


export default class MenuMap extends Component {
    constructor(props) {
        super(props);
        this.users=props.listUser;
    }
    showModal(user) {
        console.log(user);
        this.props.showPopin(user);
    }
    render() {
        return (
            <div className="menuMapArea">
                {this.users.map(function(user){
                    return (
                        <div onClick={this.showModal.bind(this,user) }
                             className="menuMapItem" key={user.local.name}>{user.local.name}</div>
                    )
                }.bind(this))}
            </div>
        )

    }
};
