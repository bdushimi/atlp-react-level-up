import React, { Component } from 'react';
import Navbar from './Navbar';
import ColorBox from './colorBox';
import PaletteFooter from "./PaletteFooter";
import { withStyles } from '@material-ui/styles';
import styles from "./styles/PaletteStyles";


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
        const { classes } = this.props;
        const { colors, paletteName, emoji, id } = this.props.palette;

        const colorBoxes = colors[level].map((color, index) => (
            <ColorBox
                background={color[format]}
                key={color.id}
                name={color.name}
                id={color.id}
                paletteId={id}
                showLink={true}
                showFullPalette={true}
            />
        ));

        return (
            <div className={classes.Palette}>
                <Navbar level={level} changeLevel={this.changeLevel} handleOnChange={this.changeFormat} showColorLevel={true} />

                <div className={ classes.paletteColors}>
                    {colorBoxes}
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        );
    }
}

export default withStyles(styles)(Palette);