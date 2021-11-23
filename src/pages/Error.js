import * as React from "react";

//import mui
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Paper } from "@mui/material";



const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    padding: theme.spacing(1),
    backgroundColor: "black",
    color: "white",


  }));

export default function Error() {
    return (
        <div>
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                marginTop="30px"
                marginBottom="-5px"
                >
                    <p>Items</p>                
                    </Grid>

        </div>
    )
}
