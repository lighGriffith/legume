import React,{Component} from 'react';
import $ from "jquery";

export default class AddProduit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: '',
            quantite: '',
            prix:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.addProduit = this.addProduit.bind(this);
    }
    hideMe(param) {
        this.props.unmountMe();
    }

    handleChange(e) {
        var change = {};
        change[e.target.name] = e.target.value;
        this.setState(change);
    }

    close(){
        this.props.close();
    }
    shouldComponentUpdate(nextProps) {
        return !this.props.isOpen;
    }
    componentWillMount() {
        var me=this;
    }
    addProduit(){
        var me=this;
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/api/produits",
            data:this.state,
            async:false,
            success: function (data) {
                console.log(data);
                me.hideMe(me);
            },
            error:function(err){
                console.log(err);
            }
        });

    }
    render() {
        let isOpen = this.props.isOpen;
        return (
            <div className={`${isOpen ? "flex middle center addProduit open" : ""}`}>
                {isOpen ?
                    (<div className={`row modal-content ${this.props.size || ""}`}>
                            <div >
                                <label>Nom</label>
                                <input type="text"  name="nom"  onChange={ this.handleChange } />
                            </div>
                            <div >
                                <label>Quantité</label>
                                <input type="text"  name="quantite"  onChange={ this.handleChange }/>
                            </div>
                            <div >
                                <label>Prix(au kg)</label>
                                <input type="text"  name="prix"  onChange={ this.handleChange }/>
                            </div>
                            <button onClick={this.addProduit}  >Ajouter</button>
                    </div>) : null
                }
            </div>);
    }
}