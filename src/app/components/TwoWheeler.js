import React from "react";
import {render} from "react-dom";
import PropTypes from 'prop-types';

// TwoWheel as a Class Component
export class TwoWheeler extends React.Component {
	constructor(props) {
		super();
	    //this.price = props.price;
		this.state = {price:props.price, visitor:'Visitor 2'}
		this.handleOnClick = this.handleOnClick.bind(this);
		this.handleOnClickVisitor = this.handleOnClickVisitor.bind(this);
	}
	
	handleOnClick() {
		// this.price = "Rs.100000";
		this.setState({price:'Rs. 100000'});
		console.log('New Price');
	}
	
	handleOnClickVisitor() {
		// this.price = "Rs.100000";
		this.props.changeVisitor(this.state.visitor);
		console.log('New Visitor');
	}
	
    render() {
        return ( 
		    <div  className="alert alert-warning" >
						<h1 style={{color:'blue'}}> Two Wheeler </h1>
						<ul>
							<li>
								<b>Name :</b> {this.props.name}
							</li>
							<li>
								<b>By :</b> {this.props.specs.manufacturer}
							</li>
							
							<li>
								<b>Price :</b> {this.state.price}
							</li>
							<li>
							     <b>Visitor :</b>  {this.props.visitor}
							</li>
							
						</ul>
						<div className="btn-group btn-group-sm">
							<button 
                                style={{margin:'10px 10px 10px 10px'}} 
                                onClick={this.handleOnClick} 
                                className="btn btn-primary" >Get New Price</button>
							<button 
                                style={{margin:'10px 10px 10px 10px'}} 
                                onClick={this.props.greet} 
                                className="btn btn-primary" >Greet Customer</button>
							<button 
                                style={{margin:'10px 10px 10px 10px'}} 
                                onClick={this.handleOnClickVisitor} 
                                className="btn btn-primary" >Recent Visitor</button>
						</div>
					</div>
				 
      
        );
    } 
}

TwoWheeler.propTypes = {
    name: PropTypes.string,
    specs: PropTypes.object,
    price: PropTypes.number,
};

TwoWheeler.defaultProps = {
  name: 'Default Name',
  specs: {manufacturer : "Default Manufacturer Name"},
    price:10
};

