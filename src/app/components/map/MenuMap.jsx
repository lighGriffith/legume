import React,{Component} from 'react';
import image from '../../../images/champBle.jpg';

export default class MenuMap extends Component {
    constructor(props) {
        super(props);
        this.users=props.listUser;
    }
    showModal(user) {
        this.props.showPopin(user);
    }
    render() {
      var styles = {
          color:'black',
          backgroundImage: 'url('+image+')'
      };
        return (
          <div className="menuMapAreaContainer">
            <div className="menuMapOverflowHidden">
              <div className="menuMapArea">
                  {this.users.map(function(user){
                      return (
                          <div onClick={this.showModal.bind(this,user) } style ={ styles }
                               className="menuMapItem bord_arrondis" key={user.local.name}>{user.local.name}</div>
                      )
                  }.bind(this))}
              </div>
            </div>
          </div>
        )

    }
};
