#### Intro
We need to build the front end web app of an ecommerce store. This project is based on an existing website that has no functionality. If you worked for this company, they may ask you to fix their current website that doesn't do anything and make it functional for people to buy products on it. You might make the decision to use Angular to do this. Converting normal websites to Angular components is a very common thing to do in the industry.

Our simple site will list out some hard coded products. Is this realistic? Would a small company only sell the same 10 items in a year? A user needs to be able to add a product to their shopping cart by clicking a button. How do you actually code the act of adding a product to the a digital shopping cart? 


https://blackrockdigital.github.io/startbootstrap-shop-homepage/

### Setup
* Fork, clone, npm i, npm start

# Part 1 - Building Components
### The components
 * Organize this web page into appropriate components
   * ProductDetail
   * Header
   * Footer
   * Carousel
   * Think of some other components you could make
* Look in index.html for the existing html to use for the components
* Use the comments and the expand/collapse feature of the editor to make sure you get the correct html. Normally you would need to figure this out yourself but we are learning.


### index.js
* Provide App with a prop called "products" sending in the products array from the global state variable in state.js

### App 
* Cut whatever html is left inside the root div from index.html and put it in the app component template.


### ProductDetail
* The ProductDetail should repesent only one single product
* The ProductDetail component class should have a property `product` which is an object, and use it to populate price, name, description reviews and stars.
* Make this property an `@Input()` so that a parent component can send in information.
* Remove all hard coded information.
* Make the star images represent the number rating from data.
* Bonus. Notice the grey stars.

### Header
* The Header component should have a property `numberOfItemsInCart` that represents how many products are in the cart
* ??? get from service ??? Make sure this is provided to Header from its parent components somehow


# Part 2 - Events, Component Comm and State

### Add Item To Cart
* Add a button to ProductDetail "Add To Cart"
* Add an EventEmitter to ProductDetail called `productAdded`
* When the button is clicked it should emit the event sending in the product object



### State
* Change App into a class component so that it can maintain state and re render itself
* Initialize the state property to shopping cart array 
* Give the shopping cart array to the Header component
* Make sure there is a method that allows adding products to the cart
    * Pass that method to ProductDetail
    * Make sure uses setState to change the state and then re render
    

# Extra Credit
### Checkout
* Let's create a very simple checkout process
* When you click the checkout button, whatever products are in the cart should somehow be processed so a person knows to ship those products to the customer
* The products in the cart need to be sent to the server to be saved as an order
* When the products are recieved by the server, they need to be saved in a database 

### Server
* Create a database for this project
* Create a web server for ths project
* Create routes for products and orders

### Fetch
* Use fetch to retrieve products from your web api
* Where should the fetch call be made?
