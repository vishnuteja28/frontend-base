package com.blackhawk.demo.services;

import com.blackhawk.demo.models.ProductDetails;

public interface ProductService {

    ProductDetails getProductDetails(String productId);

    String calculate(String expression);
}
