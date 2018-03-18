import React,{Component} from 'react';
import $ from "jquery";

export default class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.commandes = {};
    }

    componentWillMount() {
        var me=this;
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/api/commande/"+this.props.marker.ident,
            async:false,
            success: function (data) {
                me.commandes=data;
            },
            error:function(err){
                console.log(err);
            }
        });
    }

    render() {
        return (
            <div className="wrapper">
                {this.commandes.map(function(commande){
                    return (
                        <div className="boxGrid" key={commande._id}>{commande.typeLegume}</div>
                    )
                }.bind(this))}
            </div>);
    }
}