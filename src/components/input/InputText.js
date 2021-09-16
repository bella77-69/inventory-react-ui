import React, {Component} from "react";


class InputText extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return <input type="text" className={this.props.className} placeholder={this.props.placeholder}/>
    }
}

export default InputText;