import React, { useState,useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { ChromePicker } from "react-color";
import Button from '@material-ui/core/Button';
import DraggableColorBox from './DraggableColorBox';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        height: "calc(100vh - 64px)",
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

export default function NewPaletteForm(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [currentColor, setCurrentColor] = useState("teal");
    const [colors, setColors] = useState([]);
    const [newColorName, setNewColorName] = useState("");
    const [newPaletteName, setNewPaletteName] = useState("");
    const { palettes } = props;

    useEffect(() => {
        ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
            colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
        );

        ValidatorForm.addValidationRule('isColorUnique', (value) =>
            colors.every(({ color }) => color !== currentColor)
        );

        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) =>
            palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.trim().toLowerCase())
        );
    });

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const savePaletteHandler = () => {
        const newPalette = {
            paletteName: newPaletteName,
            id: newPaletteName.toLowerCase().replace(/ /g, "-"),
            colors: colors
        }
        props.savePalette(newPalette);
        props.history.push("/");
    }

    const removeColor = (colorName) => {
        setColors(colors.filter(color => color.name !== colorName))
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                color="default"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Persistent drawer
                    </Typography>
                    <ValidatorForm onSubmit={savePaletteHandler}>
                        <TextValidator
                            value={newPaletteName}
                            label="Palette Name"
                            onChange={e => setNewPaletteName(e.target.value)}
                            validators={["required", "isPaletteNameUnique"]}
                            errorMessages={["Provide Palette Name", "Palette Name is already used"]}
                            
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            type="sumbit"
                        >
                            SAVE PALETTE
                        </Button>
                    </ValidatorForm>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <Typography variant="h4">Design Your Palette</Typography>
                <div>
                    <Button variant="contained" color="secondary">Clear Palette</Button>
                    <Button variant="contained" color="primary">Random Color</Button>
                </div>
                <ChromePicker
                    color={currentColor}
                    onChangeComplete={newColor => setCurrentColor(newColor.hex)}
                />

                <ValidatorForm onSubmit={() => setColors([...colors, { name: newColorName, color: currentColor}])}>
                    <TextValidator
                        value={newColorName}
                        onChange={e => setNewColorName(e.target.value)}
                        validators={["required", "isColorNameUnique", "isColorUnique"]}
                        errorMessages={["this field is required", "Color name must be unique", "Color already used!"]}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ backgroundColor: currentColor }}
                        type="submit"
                    >
                        Add Color
                    </Button>
                </ValidatorForm>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                {colors.map(color => (
                    <DraggableColorBox color={color.color} name={color.name} />
                ))}
            </main>
        </div>
    );
}
