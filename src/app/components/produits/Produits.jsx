import React,{Component} from 'react';
import $ from "jquery";
import AddProduit from "./addproduit/AddProduit";

export default class Produits extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAddProduit: false
        }
        this.hideModal = this.hideModal.bind(this);
        this.showModal = this.showModal.bind(this);
    }
    hideModal(){
        this.setState({showAddProduit: false});
        var me=this;
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/api/produits",
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

    showModal(ctx){
        this.setState({showAddProduit: true})
    }

    supprimerProduit(produit){
        var me=this;
        console.log(produit);
        var url="http://localhost:3000/api/produit/"+produit._id;
        $.ajax({
            type: "DELETE",
            url: url,
            async:false,
            success: function (data) {
                console.log(data);
                me.hideModal();
            },
            error:function(err){
                console.log(err);
            }
        });
    }

    componentWillMount() {
        var me=this;
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/api/produits",
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
        return (
            <div className="wrapper">
                <input type="button" value="Ajouter un Produit"
                       onClick={this.showModal }/>
                {this.state.showAddProduit && <AddProduit unmountMe={this.hideModal}
                                                   isOpen={this.state.showAddProduit}
                />}
                {this.produits.map(function(produit){
                    return (
                        <div className="box" key={produit._id}>
                            {produit.nom} : {produit.quantite} kg - {produit.prix} €/kg
                            <input type="button" value="Supprimer Produit"
                                   onClick={this.supprimerProduit.bind(this,produit)}/>
                        </div>
                    )
                }.bind(this))}
            </div>);
    }
}