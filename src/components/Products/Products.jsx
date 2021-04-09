import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/product';
import useStyles from './productsStyles';


const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();

    const data = products
    console.log(data)
    return (
        <main className={classes.contennt}>
            <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
            {data.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                   <Product product={product} onAddToCart={onAddToCart} />
                </Grid>
            ))}
        </Grid>   
    </main>
    )
    
}


export default Products;