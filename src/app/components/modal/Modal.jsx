import React,{Component} from 'react';
import Grid from './../grid/Grid';
import $ from "jquery";
export default class Modal extends React.Component {
    constructor(props) {
        super(props);
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

    render() {
        let isOpen = this.props.isOpen;
        return (
            <div className={`${isOpen ? "flex middle center modal open" : ""}`}>
                {isOpen ?
                    (<div className={`row modal-content ${this.props.size || ""}`}>
                        {this.produits.map(function(produit){
                            return (
                                <div className="box" key={produit._id}>
                                    {produit.nom} : {produit.quantite} kg - {produit.prix} €/kg
                                </div>
                            )
                        }.bind(this))}
                        {this.props.marker.name}
                        <div onClick={this.hideMe.bind(this) }
                             className="col-12 middle modal-footer">{this.props.footer}</div>
                    </div>) : null
                }
            </div>);
    }
}
