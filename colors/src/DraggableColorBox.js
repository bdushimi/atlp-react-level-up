import React from 'react'
import { withStyles } from '@material-ui/styles'
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
    root: {
        position: "relative",
        width: '20%',
        height: '25%',
        margin: "0 auto",
        display: 'inline-block',
        padding: '10px',
        cursor: 'pointer',
        marginBottom: '-3.5px',
        '&:hover svg': {
            color: "white",
            transform: "scale(1.5)"
        }
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
        display: "flex",
        justifyContent: "space-between",
    },

    deleteIcon: {
        cursor: 'pointer',
        fontSize: '20px',
        marginLeft: '10px',
        transition: 'all 0.3s ease-in-out',
    }
}


function DraggableColorBox(props) {
    const { classes, handleColorDelete, color, name } = props
    return (
        <div
            className={classes.root}
            style={{ backgroundColor: color }}
        >
            <div className={classes.boxContent}>
                <span>{name}</span>
                <DeleteIcon className={classes.deleteIcon} onClick={handleColorDelete}/>
           </div>
        </div>
    )
}


export default withStyles(styles)(DraggableColorBox);
