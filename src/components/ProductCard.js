import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Fab from '@mui/material/Fab';
import soda from '../images/Soda.png';
import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import { backdropClasses, Paper } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: 'center',
  fontSize: "15px",
  alignItems: "flex-end",
  color: "white",
  backgroundColor: "black",
  boxShadow: "white",
}));

export default function ProductCard({product}) {
  return (
    
    <Card sx={{ maxWidth: 200, height: "75%", border: 2, borderRadius: '20px', backgroundColor: 'black', borderColor: "white", color: "white", alignContent: "center", }}>
      <CardMedia style={{height: "70%", justifyContent:"center", alignContent:"center"}}>
        <CardMedia
          style={{ height: "100px", width: "auto", marginLeft: "20%", marginBottom: "-15px", marginRight: "5px"}}
          component="img"
          image={product.image} alt={product.dish}/>
        <Item>
        <CardContent style={{height: "50%", display: "flex", flexDirection: "column"}}>
          <Typography gutterBottom variant="h7" component="div" textAlign="center">
            { product.title }
          </Typography>
          <Divider orientation="horizontal" style={{ background: 'white', margin: 10 }} flexItem>
          </Divider>
          <Typography variant="body" componet="div">
            { product.description }
          </Typography>
        </CardContent>
        </Item>
      </CardMedia>
      <CardActions style={{justifyContent: "center", alignContent: "center", marginTop: "30px", height: "50px"}}>
      <Fab class="addButton" size="small" color="primary" aria-label="add" href="http://www.nhl.com">
        <AddIcon />
      </Fab>
      </CardActions>
    </Card>
    
  );
}
