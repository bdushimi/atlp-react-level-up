import React, { Component } from 'react';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';
import "./ColorBox.css"
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";



const styles = {

    ColorBox: {
        width: "20%",
        height: props => props.showFullPalette ? "25%" : "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "3.5px",
        "&:hover button": {
            opacity: 1
        }
    },

    copyText: {
        color: props =>
            chroma(props.background).luminance() >= 0.5 ? 'white' : 'black'
    },

    colorName: {
        color: props =>
            chroma(props.background).luminance() <= 0.1 ? 'white' : 'black'
    },
    seeMore: {
        background: "rgba(255, 255, 255, 0.3)",
        position: "absolute",
        border: "none",
        right: "0",
        bottom: "0",
        color: props => chroma(props.background).luminance() >= 0.5 ? 'black' : 'white',
        width: "60px",
        height: "30px",
        textAlign: "center",
        lineHeight: "30px",
        textTransform: "uppercase",
        margin: "5px",
    },
    copyButton: {
        color: props =>
            chroma(props.background).luminance() >= 0.5 ? 'black' : 'white',
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
        opacity: 0
    },

    boxContent: {
        position: "absolute",
        padding: "10px",
        width: "100%",
        left: "0",
        bottom: "0",
        color: "black",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
    },

    copyOverlay: {
        opacity: "0",
        zIndex: "0",
        width: "100%",
        height: "100%",
        transition: "transform 0.5s ease-in -out",
    },
    showOverlay: {
        opacity: "1",
        transform: "scale(50)",
        zIndex: "10",
        position: "absolute",
    },
    copyMessage: {
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "4rem",
        transform: "scale(0.1)",
        opacity: "0",
        color: "#fff",
        textTransform: "uppercase",
        "& h1": {
            fontWeight: "400",
            textShadow: "1px 2px black",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            width: "100%",
            textAlign: "center",
            padding: "1rem",
            marginBottom: "0",
            textTransform: "uppercase",
        },

        "& p": {
            fontSize: "2rem",
            fontWeight: "100"
        }
    },

    showCopyMessage: {
        opacity: "1",
        zIndex: "20",
        transform: "scale(1)",
        transition: "all 0.2s",
        transitionDelay: "0.3s",
    }
}
class colorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            copied: false,
        };

        this.changeCopyState = this.changeCopyState.bind(this);
    }


    changeCopyState = () => {
        this.setState({ copied: true }, () => {
            setTimeout(() => {
                this.setState({ copied: false });
            }, 2000);
        });
    }


    render() {
        const { name, background, paletteId, id, showLink, classes, showFullPalette } = this.props;
        const { copied } = this.state;

        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{ background }} className={classes.ColorBox}>
                    <div style={{ background }}
                        className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}>

                    </div>
                    <div className={`${classes.copyMessage} ${copied && classes.showCopyMessage}`}>
                        <h1>copied!</h1>
                        <p className={classes.copyText}>{background}</p>
                    </div>
                    <div>
                        <div className={classes.boxContent}>
                            <span className={classes.colorName}>{name}</span>
                        </div>

                        <button className={classes.copyButton}>Copy</button>
                    </div>
                    {showFullPalette &&
                        <Link to={`/palette/${paletteId}/${id}`}
                            onClick={e => e.stopPropagation()}>
                            <span className={classes.seeMore}>More</span>
                        </Link>}
                </div>
            </CopyToClipboard>
        );
    }
}

export default withStyles(styles)(colorBox);