import React, { Component } from 'react';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';
import "./ColorBox.css"
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";



const styles = {

    copyText: {
        color: props =>
            chroma(props.background).luminance() >= 0.5 ? '#000' : '#fff'
    },

    colorName: {
        color: props =>
            chroma(props.background).luminance() <= 0.1 ? '#fff' : '#000'
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
        const { name, background, paletteId, id, showLink, classes } = this.props;
        const { copied } = this.state


        const isLight = chroma(background).luminance() >= 0.5;

        ; return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{ background }} className="ColorBox">
                    <div style={{ background }}
                        className={`copy-overlay ${copied && "show"}`}>

                    </div>
                    <div className={`copy-msg ${copied && "show"}`}>
                        <h1>copied!</h1>
                        <p className={classes.copyText}>{background}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span className={classes.colorName}>{name}</span>
                        </div>

                        <button className={`copy-button ${classes.copyText}`}>Copy</button>
                    </div>
                    {showLink &&
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