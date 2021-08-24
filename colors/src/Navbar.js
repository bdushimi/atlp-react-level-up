import React, { Component } from 'react'
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import Snackbar from "@material-ui/core/Snackbar"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"
import 'rc-slider/assets/index.css';
import "./Navbar.css";
import Slider from 'rc-slider';

export default class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            format: "hex",
            open: false,
        }

        this.handleFormatChange = this.handleFormatChange.bind(this)
    }

    handleFormatChange(event) {
        this.setState({
            format: event.target.value,
            open: true,
        })

        this.props.handleOnChange(event.target.value);
    
    }

    closeSnackBar = () => {
        this.setState({
            open: false,
        })
    }


    render() {

        const { level, changeLevel} = this.props;
        const { format, open } = this.state;
        return (
            <header className="Navbar">
                <div className="logo">
                    <a href="/">reactcolorpicker</a>
                </div>
                <div className="slider-container">
                    <span>Level: { level}</span>
                    <div className="slider">
                        <Slider
                            defaultValue={level}
                            min={100}
                            max={900}
                            step={100}
                            onAfterChange={changeLevel}
                        />
                    </div>
                </div>
                <div className="select-container">
                    <Select value={format} onChange={this.handleFormatChange}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
                    </Select>
                </div>
                <Snackbar
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    open={open}
                    autoHideDuration={3000}
                    message={<span id="message-id">Format Changed to { format.toUpperCase()}!</span>}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    onClose={this.closeSnackBar}
                    action={[
                        <IconButton
                            onClick={this.closeSnackBar}
                            key="close"
                            aria-label="Close"
                            color="inherit"
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
            </header>
        )
    }
}
