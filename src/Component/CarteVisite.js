import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Footer from "./Footer";
import Header from "./Header";

export default function CarteVisite() {
    return (
        <div>
            <Header></Header>
            <h1>Carte de visite</h1>
            <div  className="container">
        <Card style={{padding:"20px"}} sx={{ maxWidth: 450 }}>
            <CardMedia
                sx={{ height: 200 }}
                image="https://projet.krissclotilde.com/asset/avatar-gratuit.png"
                title="Moi"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Developpeur
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <a href="https://www.linkedin.com/in/kriss-clotilde/"
                       target="_blank"
                    >Linkdin</a>
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