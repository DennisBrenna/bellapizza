import LocationCard from "../components/LocationsComp";


<<<<<<< HEAD

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
/* 
useEffect(() => {
    let response = getLocations()
})

      <CardMedia style={{height: "70%", justifyContent:"center", alignContent:"center"}}>
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
=======
const locations = [
>>>>>>> 5ea736d9dde58d537ba7c10c8cde9e90a5835b0c
    
  { 
      location: "Oslo",
      adress: "Karl Johan 2",
      telephone: "123456789",
      image: "static/media/Pizza.de92fa9b.png",
      },
  
      { 
      location: "Kongsvinger",
      adress: "Dennisveien 92",
      telephone: "123",
      image: "static/media/Pizza.de92fa9b.png",
      },
  
      { 
      location: "Linköping",
      adress: "Vasavägen 31",
      telephone: "013-151552",
      image: "static/media/Pizza.de92fa9b.png",
      },
  
      { 
      location: "Houston",
      adress: "Queens Street 81",
      telephone: "83659291",
      image: "static/media/Pizza.de92fa9b.png",
      },
  
      { 
      location: "Panama City",
      adress: "Cheese, Kebab, Kebab Suace, Onion",
      telephone: "897212",
      image: "static/media/Pizza.de92fa9b.png",
      },
  
      { 
      location: "Cape Town",
      adress: "Boolean Street 21",
      telephone: "221331",
      image: "static/media/Pizza.de92fa9b.png",
      },
  
      { 
      location: "Singapore",
      adress: "Kings Street 89",
      telephone: "3522111",
      image: "static/media/Pizza.de92fa9b.png",
      },
  
      { 
      location: "Auckland",
      adress: "Epsom Avenue 54",
      image: "static/media/Pizza.de92fa9b.png",
      },
  
      { 
      location: "Ulan Bator",
      adress: "Polare Road 2",
      telephone: "928555",
      image: "/static/media/Pasta.b35d013e.png",
      }
];