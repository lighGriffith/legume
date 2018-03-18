import React,{Component} from 'react';
import Grid from './../grid/Grid';
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

    render() {
        let isOpen = this.props.isOpen;
        return (
            <div className={`${isOpen ? "flex middle center modal open" : ""}`}>
                {isOpen ?
                    (<div className={`row modal-content ${this.props.size || ""}`}>
                        {this.props.marker.name}
                        <div onClick={this.hideMe.bind(this) }
                             className="col-12 middle modal-footer">{this.props.footer}</div>
                    </div>) : null
                }
            </div>);
    }
}
