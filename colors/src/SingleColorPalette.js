import React, { Component } from 'react';
import ColorBox from './colorBox';
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { withStyles } from '@material-ui/styles';
import { Link } from "react-router-dom";
import "./Palette.css";


const styles = {

    Palette: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
    },

    paletteColors: {
        height: "90%",
    },

    goBack: {
        width: "20%",
        height: "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "3.5px",
        opacity: 1,
        backgroundColor: "black",
        "& a": {
            color: "white",
            width: "100px",
            height: "30px",
            position: "absolute",
            display: "inline - block",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            outline: "none",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            fontSize: "1rem",
            lineHeight: "30px",
            textTransform: "uppercase",
            border: "none",
            textDecoration: "none",
        }

    }

}
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