import React, { Component } from 'react'

export default class PropertyDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    fetchDetails(){
        var url ="";
        // In case this condition caught undefined, consider the else below
        if (this.props.property.length !== 0){
            url = `http://realesteapi.somee.com/Property/GetPropertyByID/${this.props.property.id}`;
        }
        else{
            url = `http://realesteapi.somee.com/Property/GetPropertyByID/062922c0-b0c1-49b2-b264-27e5faf84d1d`
        }
        fetch(url)
            .then((res)=> res.json())
            .then((json)=> this.setState({
                
            }))
    }
    componentDidMount(){
        
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
