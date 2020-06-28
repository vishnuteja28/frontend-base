package com.blackhawk.demo.services;

import com.blackhawk.demo.models.ProductDetails;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.springframework.stereotype.Service;

import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Override
    public ProductDetails getProductDetails(String productId) {

        InputStream is = ProductServiceImpl.class.getResourceAsStream("/mock-data/products.json");
        Gson gson = new Gson();

        List<ProductDetails> roles = gson.fromJson(new InputStreamReader(is), new TypeToken<List<ProductDetails>>() {
        }.getType());

        if (productId.equals("1")) {
            return roles.get(0);
        } else if (productId.equals("2")) {
            return roles.get(1);
        } else {
            return null;
        }
    }
}
