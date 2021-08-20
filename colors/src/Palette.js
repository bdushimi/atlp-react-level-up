import React, { Component } from 'react';
import ColorBox from './colorBox';
import "./Palette.css"


class Palette extends Component {
    render() {

        const colorBoxes = this.props.colors.map((color, index) => (
            <ColorBox background={color.color} key={index} name={ color.name }/>
        ));

        return (
            <div className="Palette">
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
            </div>
        );
    }
}

export default Palette;