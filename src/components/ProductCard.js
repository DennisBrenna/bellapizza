import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import pizza1 from '../images/pizza1.jpeg';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function ProductCard({ title, description }) {
  return (
    
    <Card sx={{ maxWidth: 335, maxHeight: 300, border: 2, borderRadius: '20px'}}>
      
      <CardActionArea>
        <CardMedia
          component="img"
          image={ pizza1 } alt="Inside" width="82px" height="140px"/>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" textAlign="center">
            { title }
          </Typography>
          <Typography variant="body" color="text.secondary">
            { description }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Fab size="small" color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      </CardActions>
    </Card>
    
  );
}
