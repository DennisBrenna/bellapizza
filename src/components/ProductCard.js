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
import { styled } from '@mui/material/styles';
import { backdropClasses, Paper } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: 'center',
  alignItems: "flex-end",
  color: "white",
  backgroundColor: "black",
  boxShadow: "white",
}));

export default function ProductCard({ title, description, dish }) {
  return (
    
    <Card sx={{ maxWidth: 200, height: 250, border: 2, borderRadius: '20px', backgroundColor: 'black', borderColor: "white", color: "white", alignContent: "center", }}>
      <CardActionArea style={{height: "75%", justifyContent:"center", alignContent:"center"}}>
        <CardMedia
          style={{ height: "50%"}}
          component="img"
          image={ dish === 'pizza' ? pizza : pasta } alt={dish} width="82px" height="100px"/>

        <Item>
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
        </Item>
      </CardActionArea>
      <CardActions style={{justifyContent: "center", alignContent: "center", marginTop: "4px", height: "50px"}}>
      <Fab size="small" aria-label="add" href="http://www.nhl.com">
        <AddIcon />
      </Fab>
      </CardActions>
    </Card>
    
  );
}
