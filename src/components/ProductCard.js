import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import pizza1 from '../images/pizza1.jpeg';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider';


export default function ProductCard({ title, description }) {
  return (
    
    <Card sx={{ maxWidth: 400, maxHeight: 400, border: 2, borderRadius: '20px'}}>
      <CardActionArea>
        <CardMedia
          style={{ height: "100%" }}
          component="img"
          image={ pizza1 } alt="Pizza" width="82px" height="140px"/>
        <CardContent>
          <Typography gutterBottom variant="h7" component="div" textAlign="center">
            { title }
          </Typography>
          <Divider orientation="horizontal" style={{ background: 'black', margin: 10}} flexItem>
          </Divider>
          <Typography variant="body" color="text.secondary" componet="div">
            { description }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{justifyContent: "center"}}>
      <Fab size="small" color="inherit" aria-label="add" href="http://www.nhl.com">
        <AddIcon />
      </Fab>
      </CardActions>
    </Card>
    
  );
}
