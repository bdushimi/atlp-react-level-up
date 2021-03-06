import React, { Component } from 'react';
import Navbar from "./Navbar";
import ColorBox from "./colorBox";
import PaletteFooter from "./PaletteFooter";
import { withStyles } from '@material-ui/styles';
import { Link } from "react-router-dom";
import styles from "./styles/PaletteStyles";



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
        const { paletteName, emoji, id } = this.props.palette;
        const { classes } = this.props;
        
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
            <div className={ classes.Palette}>
                <Navbar handleOnChange={this.changeFormat} showColorLevel={ false}/>
                <div className={ classes.paletteColors}>
                    {colorBoxes}
                    <div className={ classes.goBack}>
                        <Link to={ `/palette/${id}`}>GO BACK</Link>
                    </div>
                </div>

                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        );
    }
}

export default withStyles(styles) (SingleColorPalette);