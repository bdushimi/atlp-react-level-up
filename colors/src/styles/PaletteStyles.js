
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

export default styles;