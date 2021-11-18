import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import pizza from '../images/pizza1.png';
import Fab from '@mui/material/Fab';
import pasta from '../images/warmpizza.jpeg';
import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider';


export default function ProductCard({ title, description, dish }) {
  return (
    
    <Card sx={{ maxWidth: 200, height: 250, border: 2, borderRadius: '20px', backgroundColor: 'black', borderColor: "white", color: "white"}}>
      <CardActionArea style={{height: "75%"}}>
        <CardMedia
          style={{ height: "50%"}}
          component="img"
          image={ dish === 'pizza' ? pizza : pasta } alt={dish} width="82px" height="100px"/>
        <CardContent style={{height: "50%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
          <Typography gutterBottom variant="h7" component="div" textAlign="center">
            { title }
          </Typography>
          <Divider orientation="horizontal" style={{ background: 'white', margin: 10 }} flexItem>
          </Divider>
          <Typography variant="body" componet="div">
            { description }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{justifyContent: "center", height: "50px"}}>
      <Fab size="small" aria-label="add" href="http://www.nhl.com">
        <AddIcon />
      </Fab>
      </CardActions>
    </Card>
    
  );
}
