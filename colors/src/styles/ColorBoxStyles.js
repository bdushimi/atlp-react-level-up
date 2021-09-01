import chroma from "chroma-js";

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

export default styles;