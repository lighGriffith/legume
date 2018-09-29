import React,{Component} from 'react';
import Jauge from './../jauge/jauge';

export default class AchatCommande extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    hideMe(param) {
        this.props.unmountMe();
    }
    close(){
        this.props.close();
    }
    shouldComponentUpdate(nextProps) {
        return !this.props.isOpen;
    }

    componentWillMount() {

    }
    changeQuantite(quantite){
      this.props.quantiteAchetee=quantite;
    }


    render() {
        let isOpen = this.props.isOpenAchat;
        this.produit=this.props.selectedCommande;
        console.log(this.props.selectedCommande);
        return (
            <div className={`${isOpen ? "flex middle center myModalAchat open" : ""}`}>
                {isOpen ?
                    (<div className={`row modalAchat-content ${this.props.size || ""}`}>
                      <div className="modalAchat-title">Acheter</div>
                      <div className="modalAchat-body-overflowhidden">
                        <div className="modalAchat-body">
                            <div className="box" key={this.produit._id} >
                              <div className="displayBlock">
                                  <label className="displayIBlock">Nom : </label> <div className="displayIBlock">{this.produit.nom}</div>
                              </div>
                              <div className="displayBlock">
                                  <label className="displayIBlock">Quantité : </label><div className="displayIBlock">{this.produit.quantite} kg</div>
                              </div>
                              <div className="displayBlock">
                                  <label className="displayIBlock">Prix(au kg) : </label><div className="displayIBlock">{this.produit.prix} €/kg</div>
                              </div>
                            </div>
                            
                            <div className="container-login100-form-btn m-t-32">
                                <button type="submit" className="login100-form-btn">
                                    Acheter
                                </button>
                            </div>
                          </div>
                        </div>
                        <div className="modalAchat-footer">
                          <button onClick={this.hideMe.bind(this) } >
                              quitter
                          </button>
                        </div>
                    </div>) : null
                }
            </div>);
    }
}
