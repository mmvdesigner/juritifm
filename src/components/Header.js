import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import juritifm from "../juritifm.png";

const useStyles = makeStyles((theme) => ({
  logo: {
    width: theme.spacing(40),
    height: theme.spacing(15),
    margin: theme.spacing(3),
    
  },
  copy: {
    color: "white",
  },

  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
    bottomNavContainer: {
      position: "fixed",
      left: "0",
      bottom: "0",
      width: "100%",
      alignItems: "center",
      color: "white",
      top: "24rem",

  },
  footer: {
    color: "white",
    textDecoration: "none",
},
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
            <Box component="nav"> 
      <appbar className={classes.player}>
      <audio controls="controls" autoplay="autoplay" id="myaudio"> <source src="https://paineldj6.com.br:20052/stream" type="audio/aac" /> </audio><script>var audio = document.getElementById("myaudio"); audio.volume = 0.9;</script>	
      </appbar>

        
      </Box>
      <Grid container justify="center">
        <img className={classes.logo} src={juritifm} alt=" Rádio Juriti Fm 98,7" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Rádio Comunitária Juriti FM 98,7mhz."]} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant="h6">
        <Typed
          strings={[
            "Juriti Fm 🎙️",
            "A rádio que toca seu coração ❤️",
            "Agora ainda mais pertinho de você 😉",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
      <Box className={classes.bottomNavContainer}>
      <Typography className={classes.copy} variant="span">
        <box className={classes.copy} variant="span" >
        <p>© 2022 Rádio Juriti Fm 98,7 mhz. Todos os direitos reservados</p>
        <span className="classes.footer">
        By: <a href="https://mdsolucoestecnologicas.com.br/"  target="_blank" className={classes.footer}>MD Soluções Tecnológicas</a> -> 
          <a href="https://www.mvdevfullstack.me/"  target="_blank" className={classes.footer}>Messias Vasconcelos</a>
        </span>
        </box>
      </Typography>

    </Box>
    </Box>
  );
};

export default Header;
