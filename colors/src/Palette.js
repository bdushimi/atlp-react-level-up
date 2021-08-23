import React, { Component } from 'react';
import Navbar from './Navbar';
import ColorBox from './colorBox';
import "./Palette.css";



class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500,
            format: "hex",
        }

        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }
    

    changeLevel = (level) => {
        this.setState({ level });
    }

    changeFormat = (value) => {
        this.setState({ format: value });
    }


    render() {

        const { level, format } = this.state;
        const { colors } = this.props.palette;

        const colorBoxes = colors[level].map((color, index) => (
            <ColorBox background={color[format]} key={index} name={ color.name }/>
        ));

        return (
            <div className="Palette">
                <Navbar level={level} changeLevel={this.changeLevel} handleOnChange={this.changeFormat}/>
                
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
            </div>
        );
    }
}

export default Palette;