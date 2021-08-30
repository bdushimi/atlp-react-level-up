import React, { Component } from 'react';
import chroma from 'chroma-js';
import "./ColorBox.css"
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";

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
        const { name, background, paletteId, id, showLink } = this.props;
        const { copied } = this.state

        const isDark = chroma(background).luminance() <= 0.1;
        const isLight = chroma(background).luminance() >= 0.5;

        ; return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{ background }} className="ColorBox">
                    <div style={{ background }}
                        className={`copy-overlay ${copied && "show"}`}>

                    </div>
                    <div className={`copy-msg ${copied && "show"}`}>
                        <h1>copied!</h1>
                        <p className={ isLight && "dark-text" }>{background}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span className={isDark && "light-text"}>{name}</span>
                        </div>

                        <button className={`copy-button ${isLight && "dark-text"}`}>Copy</button>
                    </div>
                    {showLink &&
                        <Link to={`/palette/${paletteId}/${id}`}
                            onClick={e => e.stopPropagation()}>
                        <span className={`see-more ${isLight && "dark-text"}`}>More</span>
                        </Link>}
                </div>
            </CopyToClipboard>
        );
    }
}

export default colorBox;