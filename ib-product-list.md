# A Shopping Cart in React

_Note: we'll use the results of this homework assignment for a formal evaluation and as such you should write the code individually. Plagiarism is a violation of the Academy contract and makes nobody happy._

***

## Intro

We will display a list of products with prices. We will be asking you to apply several skills you've learned this week. 

This assignment is split into steps. Each successfully completed step will contribute to your final score. Try to complete as many of them as you can. 

**Note:** You _can_ implement some of them out of order!

### How to submit your results
**Send your homework to teachers@codaisseur.com before Sunday 20:00**

Clean up your code: 
- Fix the formatting/indentation
- Remove unnecessary code.

The app should be runnable simply by cloning the repository and running `yarn start`

## Steps

### 1. Create a React app
Use the method you've learned to create a new empty React application.

### 2. Create two components
Define two components in your project and name them:

1. `CheckoutButton`: Should render a `<button>` element
1. `CartItem`: Should render `<li>` element

### 3. Render a list of `CartItem`s
Given the following data, render a list of `CartItem`s inside your `App` component. Pass the data to the `CartItem` component as JSX props. Display both the name and price for each of them. Render the list inside of a `<ul>`.

> Hint: Use the array itself as the source of your data. Do not simply copy (hard-code) the values.

```js
const products = [
    {
        id: 1,
        name: "Prada Shoes",
        price: 570
    },
    {
        id: 2,
        name: "Rolex Watch",
        price: 649
    },
    {
        id: 3,
        name: "Paper clips",
        price: 0.1
    }
]
```

### 4. Add a method to your `App`
In your `App` component, define a method on the class with the name `incrementQuantity`. It should take one parameter: `productId`. We will implement the functionality later.

### 5. Pass a function to the `CartItem`s
Add a prop to the rendered `CartItem`s called `onPlusClick`. The value of the prop should be a function that calls the `incrementQuantity` method with the `id` of the product being rendered.

> Hint: Remember that a method is a function on an object. So you need a reference to the object in order to call the function. 

> Hint 2: Use an anonymous function as the value of `onPlusClick`, so you can pass the appropriate id.

### 6. Update the `CartItem` to use the new prop
After completing the previous step, you will now have a new prop inside your `CartItem`. Add a button to the rendered output. When that button is clicked it should call the function in the prop `onPlusClick`.

### 7. Implement the `incrementQuantity` method in `App`
When called, this method should update the quantity for the given product in the `App`'s local state using `setState`. Each time the quantity should increase by one relative to its previous value.

Now also add the quantity to the `CartItem` so that it's displayed next to the price.

> Hint: this means your `App` component will need to have (in its local state) a collection of products and their associated quantities. You can initialize this state in the constructor, using the provided data in the previous step. The initial quantity for each product is `0`.

### 8. Interlude: Add a dependency
Add the following package as a dependency to your project: [react-live-clock](https://www.npmjs.com/package/react-live-clock)

### 9. Render the component
Read the `react-live-clock` documentation on how to use it. Render it at the top of your `App`.

### 10. Implement the `CheckoutButton`
Similar to how you passed a function to the `CartItem`s, now pass a function to the `CheckoutButton`.

When the button is clicked, the total value of the shopping cart should be displayed on the page.

### 11. Define the propTypes for `CartItem` and `CheckoutButton`
Define the propTypes for all props that your components expect/use.

## Conclusion

With luck and hard work your app will look like this:

<img src="https://cd.sseu.re/React_App_-_Google_Chrome_2018-05-02_18.39.05.png"/>