import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { Link } from "react-router-dom";

function ItemList(props) {
    let dummyData = null;
    if (props.toReturn === 'Mangas') {
        dummyData = [
            {
             id: "1",
             name: "Spy X Family",
             priceTag: "$1800",
             imgSource: "https://i.pinimg.com/originals/47/ff/c1/47ffc16c5101dc5efbf435a61c05171d.png",
            },
            {
            id: "2",
            name: "Oregairu",
            priceTag: "$1450",
            imgSource: "https://fantasticmemes.files.wordpress.com/2019/11/oregairu1.jpg",
            },
        ];
    } else {
        dummyData = [
            {
             id: "3",
             name: "Batman",
             priceTag: "$1200",
             imgSource: "https://cdn.shopify.com/s/files/1/1332/9529/products/grampa_front1.jpg?v=1554264351",
            },
            {
            id: "4",
            name: "Spiderman",
            priceTag: "$1250",
            imgSource: "https://www.syfy.com/sites/syfy/files/2021/11/brsm2022001_cvr.jpg",
            },
        ];
    }
    return (
        <Grid container spacing={3} marginTop={5}>
    {/* 'dar click al nombre para ir al detalle' */}
      {dummyData.map((data) => {
        return (
          <Grid item xs={12} sm={6} md={3} key={data.id}>
            <Card>
              <CardMedia
                component="img"
                height="500"
                image={data.imgSource}
                title={data.name}
              />
              <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ "&:hover": { color: "blue", textDecoration: "underline", transform: 'scale(0.9)' } }}>
                <Link to={`/item/${data.id}`} style={{ textDecoration: 'none', color: 'black', }}>
                    {data.name}
                </Link>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Precio: {data.priceTag}
                </Typography>
              </CardContent>
              <Box marginX={'auto'}>
				<Button color="primary">Comprar ahora</Button>
            </Box>
            </Card>
          </Grid>
        );
      })}
    </Grid>
    );
}
export default ItemList;