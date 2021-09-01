import React from 'react'
import "./Palette.css"
import { withStyles } from '@material-ui/styles';


const styles = {
    paletteFooter: {
        backgroundColor: "#fff",
        height: "10vh",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        fontWeight: "bold",
    },

    emoji: {
        fontSize: "2rem",
        margin: "0 2rem"
    }
}

const PaletteFooter = (props) => {

    const { paletteName, emoji , classes} = props;
    return (
        <footer className={ classes.paletteFooter}>
            {paletteName}
            <span className={classes.emoji}>{emoji}</span>
        </footer>
    )
}

export default withStyles(styles)(PaletteFooter);
