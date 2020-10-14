import React from 'react';
import './Header.css'
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Background from './bannerbackground.png';
import logo from './logo2.png'
const sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: "url(" + { Background } + ")"
};


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = () => {
    const classes = useStyles();

    return (
        <div>
            <div>
                <Toolbar>
                    <Button>
                        <img src={logo} alt="" />

                    </Button>
                    <Typography variant="h6" className={classes.title}>
                    </Typography>
                    
                    <Button> <ShoppingCartIcon /></Button>
                    <Button color="inherit">Login</Button>
                    <br/>
                    <Button  variant="contained" color="secondary">Sign In</Button>
                </Toolbar>
            </div>
            {/* <div style={{
                backgroundImage: "./bannerbackground.png",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '100%'
            }}>
                
            </div> */}

        </div>
    );
};

export default Header;