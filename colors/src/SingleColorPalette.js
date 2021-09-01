import React, { Component } from 'react';
import ColorBox from './colorBox';
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { Link } from "react-router-dom";
import "./Palette.css";

class SingleColorPalette extends Component {

    constructor(props) {
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
        this.state = {
            format : "hex",
        }
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeFormat = (value) => {
        this.setState({ format: value });
    }

    gatherShades(palette, colorToFilterBy) {
        let shades = [];
        let allColors = palette.colors;

        for (let key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            );
        }

        return shades.slice(1);

    }

    render() {

        const { format } = this.state;
        const { paletteName, emoji, id} = this.props.palette;
        
        const colorBoxes = this._shades.map(color => (
            <ColorBox
                key={color.name}
                name={color.name}
                background={color[format]}
                showLink={false}
                showFullPalette={ false}
            />
        ))

        return (
            <div className=" SingleColorPalette Palette">
                <Navbar handleOnChange={this.changeFormat} showColorLevel={ false}/>
                <div className="Palette-colors">
                    {colorBoxes}
                    <div className="go-back ColorBox">
                        <Link to={ `/palette/${id}`} className="back-button">GO BACK</Link>
                    </div>
                </div>

                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        );
    }
}

export default SingleColorPalette;