import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import { backdropClasses, Paper } from "@mui/material";
import {getLocations} from "../dummyData/locationData";


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

useEffect(() => {
    let response = getLocations()
})

/*       <CardMedia style={{height: "70%", justifyContent:"center", alignContent:"center"}}>
        <CardMedia
          style={{ height: "100px", width: "auto", marginLeft: "20%", marginBottom: "-15px", marginRight: "5px"}}
          component="img"
          image={location.image} alt="City"/>
        <Item>
        <CardContent style={{height: "50%", display: "flex", flexDirection: "column"}}>
        <Divider orientation="horizontal" style={{ background: 'white', margin: 10 }} flexItem>
          </Divider>
          <Typography gutterBottom variant="h3" component="div" textAlign="center">
            { location.location }
          </Typography>
          <Typography variant="body" componet="div">
            { location.adress }
          </Typography>
          <Typography variant="body" componet="div">
            { location.telephone }
          </Typography>
        </CardContent>
        </Item>
      </CardMedia>*/

function locations(props) {
    const {locations} = props;
    console.log(locations);
  return (
    
    <Card sx={{ maxWidth: 200, height: "85%", border: 2, borderRadius: '20px', backgroundColor: 'black', borderColor: "white", color: "white", alignContent: "center", }}>
        <CardMedia component="img"
        image={locations.image} alt="test"/>
    </Card>
  );
}

export default locations;