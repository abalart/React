import React from 'react';
//import {Image,Text,VStack} from '@chakra-ui/react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

import '../Item/Item.css'


 
const Item = ({product}) => {  //Este componente recibe un objeto product para extraer de el la info a mostrar en una card
   
 
 
return (
    <Card sx={{ maxWidth: 280 }} style={styles.container}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt={product.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={styles.title}
          >
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/product/${product.id}`}>
          <Button size="small" color="primary">
            Ver más
          </Button>
        </Link>
      </CardActions>
     
    </Card>
  );
};

const styles = {
  container: {
    width: window.innerHeight > 900 ? "30%" : "85%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    backgroundColor: "grey",
  },
  title: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    height: 80,
  },
};

export default Item