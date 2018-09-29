import React,{Component} from 'react';
import Grid from './../grid/Grid';
import $ from "jquery";
import imageTerre from '../../../images/terre.jpg';
import imageChoux from '../../../images/chouxfleur.png';

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAchatCommande: false
        }

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
        var me=this;
        console.log(this.props);

        var url="http://localhost:3000/api/produits/"+this.props.marker.name;
        $.ajax({
            type: "GET",
            url: url,
            async:false,
            success: function (data) {
                console.log(data);
                me.produits=data;
            },
            error:function(err){
                console.log(err);
            }
        });
    }

    showCommande(produit) {
        console.log(this.props);
        this.props.showCommande(produit);
    }
    render() {
      var styleTerre = {
          backgroundImage: 'url('+imageTerre+')'
      };
      var styleChoux = {
          backgroundImage: 'url('+imageChoux+')',
      };
        let isOpen = this.props.isOpen;
        return (
            <div className={`${isOpen ? "flex middle center myModal open" : ""}`} >
                {isOpen ?
                    (<div className={`row modal-content ${this.props.size || ""}`} >
                        <div className="modal-title">Commander</div>
                        <div className="modal-body-overflowhidden wrapper"style ={styleTerre}>
                          <div className="modal-body">
                            {this.produits.map(function(produit){
                                return (
                                    <div className="boxGrid" key={produit._id} onClick={this.showCommande.bind(this,produit)} style ={styleChoux}>
                                      <div className="displayBlock">
                                          <label className="displayIBlock">Nom : </label> <div className="displayIBlock">{produit.nom}</div>
                                      </div>
                                      <div className="displayBlock">
                                          <label className="displayIBlock">Quantité : </label><div className="displayIBlock">{produit.quantite} kg</div>
                                      </div>
                                      <div className="displayBlock">
                                          <label className="displayIBlock">Prix(au kg) : </label><div className="displayIBlock">{produit.prix} €/kg</div>
                                      </div>
                                    </div>
                                )
                            }.bind(this))}
                          </div>
                        </div>
                        <div className="modal-footer">
                            <input type="button" value="Quitter"
                                   onClick={this.hideMe.bind(this) }/>
                            </div>
                    </div>) : null
                }
            </div>);
    }
}
