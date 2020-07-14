package com.blackhawk.demo.services;

import com.blackhawk.demo.models.ProductDetails;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.springframework.stereotype.Service;

import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.List;
import java.util.Stack;

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

    @Override
    public String calculate(String expression) {
        return String.valueOf(evaluate(expression));
    }

    public int evaluate(String expression) {

        Stack<Character> stack = new Stack<>();

        Stack<Integer> evaluatedValues = new Stack<>();

        char[] charArray = expression.toCharArray();


        for (int i = 0; i < charArray.length; i++) {

            if ((charArray[i] - '0') >= 0 && (charArray[i] - '0' <= 9)) { //its a number

                StringBuilder s = new StringBuilder("");

                while (i < charArray.length && charArray[i] - '0' >= 0 && charArray[i] - '0' <= 9) {
                    s.append(charArray[i++]);
                }

                evaluatedValues.push(Integer.parseInt(s.toString()));
                i--;

            } else if (charArray[i] == '(') {

                stack.push(charArray[i]);

            } else if (charArray[i] == ')') {

                while (stack.peek() != '(') {
                    evaluatedValues.push(operate(stack.pop(), evaluatedValues.pop(), evaluatedValues.pop()));
                }
                stack.pop();

            } else if (charArray[i] == '+' || charArray[i] == '-' || charArray[i] == '/' || charArray[i] == '*') {

                while (!stack.empty() && checkBodmas(charArray[i], stack.peek())) {
                    evaluatedValues.push(operate(stack.pop(), evaluatedValues.pop(), evaluatedValues.pop()));
                }
                stack.push(charArray[i]);
            }
        }

        while (!stack.empty()) {
            evaluatedValues.push(operate(stack.pop(), evaluatedValues.pop(), evaluatedValues.pop()));
        }

        int ans = evaluatedValues.pop();

        return ans;
    }

    private boolean checkBodmas(Character op1, Character op2) {

        if (op2 == '(' || op2 == '(') {
            return false;
        }

        if ((op1 == '*' || op1 == '/') && (op2 == '+' || op2 == '-')) {
            return false;
        }

        return true;
    }

    private int operate(Character c, int a, int b) {

        if (c == '+') {
            return a + b;
        }
        if (c == '-') {
            return b - a;
        }
        if (c == '*') {
            return a * b;
        }
        if (c == '/') {
            return b / a;
        }

        return 0;
    }
}
