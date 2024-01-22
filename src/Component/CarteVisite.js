import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Footer from "./Footer";
import Header from "./Header";
import {NavLink} from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";

export default function CarteVisite() {
    return (
        <div>
            <Header></Header>
            <button><NavLink to={"/"}>
                <MenuItem><h2 className="menuTitle">Bienvenue</h2></MenuItem>
            </NavLink></button>
            <h1>Carte de visite</h1>
            <div>
                <Card style={{textAlign: 'center', margin: 'auto', padding: "20px"}} sx={{maxWidth: 500}}>
                    <CardMedia
                        sx={{height: 370}}
                        image="https://projet.krissclotilde.com/asset/avatar-gratuit.png"
                        title="Moi"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Kriss CLOTILDE
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            Developpeur
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <a rel="noreferrer" style={{color: "dodgerblue"}}
                               href="https://www.linkedin.com/in/kriss-clotilde"
                               target="_blank"
                            >Linkdin</a>


                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <a rel="noreferrer" style={{color: "dodgerblue"}} href="https://github.com/lion92"
                               target="_blank"
                            >Git hub</a>


                        </Typography>

                    </CardContent>
                    <CardActions>

                    </CardActions>
                </Card>
            </div>
            <Footer></Footer>
        </div>
    );
}