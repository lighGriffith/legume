import React,{Component} from 'react';


export default class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.cars = ["Saab", "Volvo", "BMW1","Saab2", "Volvo2", "BMccsW","Sacsab", "Volvcco", "c","Saafb", "Vodlvo", "aBMW","Saaccb", "Voglvo", "BcdMW"];
    }
    render() {
        return (
            <div className="wrapper">
                {this.cars.map(function(cars){
                    return (
                        <div className="box" key={cars}>{cars}</div>
                    )
                }.bind(this))}
            </div>);
    }
}