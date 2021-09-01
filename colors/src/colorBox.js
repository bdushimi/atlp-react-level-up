import React, { Component } from 'react';
import styles from './styles/ColorBoxStyles'
import { withStyles } from '@material-ui/styles';
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
        const { name, background, paletteId, id, classes, showFullPalette } = this.props;
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