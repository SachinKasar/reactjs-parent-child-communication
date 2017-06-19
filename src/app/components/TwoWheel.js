import React from "react";
import {render} from "react-dom";
// TwoWheel as a Class Component
export class TwoWheel extends React.Component {
	constructor(props) {
		super();
	    //this.price = props.price;
		this.state = {price:props.price, visitor:'PQR'}
		this.handleOnClick = this.handleOnClick.bind(this);
		this.handleOnClickVisitor = this.handleOnClickVisitor.bind(this);
	}
	
	handleOnClick() {
		// this.price = "Rs.100000";
		this.setState({price:'Rs. 100000'});
		console.log('Get New Price');
	}
	
	handleOnClickVisitor() {
		// this.price = "Rs.100000";
		this.props.changeVisitor(this.state.visitor);
		console.log('Get New Price');
	}
	
    render() {
        return ( 
		    <div className="container">
                <div className="row">
				    <div className="row">
						<h1> TwoWheel </h1>
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
						<button onClick={this.handleOnClick} className="btn btn-primary" >Get New Price</button>
						<br/><br/><button onClick={this.props.greet} className="btn btn-primary" >Greet Customer</button>
						<br/><br/><button onClick={this.handleOnClickVisitor} className="btn btn-primary" >Recent Visitor</button>
						
					</div>
				</div>
				</div>
      
        );
    } 
}
