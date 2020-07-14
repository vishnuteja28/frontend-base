package com.blackhawk.demo.controllers;

import com.blackhawk.demo.models.ProductDetails;
import com.blackhawk.demo.services.ProductService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/products")
public class ProductController {

    private ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    /**
     * This method will return detailed info of the product with id as productId
     *
     * @param productId Unique Product Id for which the details need to be pulled
     * @return ProductDetail object
     */
    @CrossOrigin
    @GetMapping(path = "/{productId}")
    public ProductDetails getProductDetails(@PathVariable("productId") String productId) {
        //Call Service by passing the parameters
        return productService.getProductDetails(productId);
    }

    @CrossOrigin
    @GetMapping(path = "/calculate/{expression}")
    public String calculate(@PathVariable("expression") String expression) {
        //Call Service by passing the parameters
        return productService.calculate(expression);
    }

}

