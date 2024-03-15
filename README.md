
# FoodApp

This project is a full-stack food ordering application built using the MERN stack (MongoDB,Express.js,React.js and Node.js) and real time API of swiggy. The app allows user to login,signup, select menu of their choice,see profile details,give feedback, search for a particular food, see their previous order etc.




## Features

1. User Authentication

    o User registration functionality using name, email, profile picture, password authentication. Login using email and password authentication

    o Password hashing and salting for secure storage.

    o JWT for user session management and authentication middleware for protected routes.

    o Registration form data handling using mongodb.
   

   ![Screenshot 2024-02-09 192621](https://github.com/MacWorldPro/FoodApp/assets/129540983/c42f06a7-d4ea-4ef6-9bfc-b32d3748f0b7)


2. User profile

    o User profile with all the data provided while registering.

    o Ability to view user profile.

  ![Screenshot 2024-02-09 192926](https://github.com/MacWorldPro/FoodApp/assets/129540983/9f071438-f3b4-447b-85be-b78ef3ac1747)

3. Cart 

    o Add your favourite food in cart to order it.

    o Modify your order list from cart page itself.

    o Checkout for ordering your cart.

![Screenshot 2024-03-15 195101](https://github.com/MacWorldPro/FoodApp/assets/129540983/c7d3ff8c-3777-416f-9f1d-64843bd473bc)
 

4. MyOrder

    o View the details of all the food that you have ordered till date

![Screenshot 2024-02-09 193305](https://github.com/MacWorldPro/FoodApp/assets/129540983/daaf5852-b985-4ebb-b7b6-b86b68186009)


5. Feedback

    o Users can give feedback about thier experience on our App/food.

    o It uses emailJs to send real time email to the customer care team for quickly resolving customer's pain points.

   ![Screenshot 2024-02-09 193226](https://github.com/MacWorldPro/FoodApp/assets/129540983/7f739667-f4a7-4810-b8d8-9f077a424e38)

   

6. Search

    o To enhance the user experience, a Search bar is provided in Home page.

    o Users can directly search their favourite restaurents.

      ![Screenshot 2024-02-09 192910](https://github.com/MacWorldPro/FoodApp/assets/129540983/ddd05a6b-09c0-45cc-95d0-f340584847cc)

7. Menu page

    o It contains menu of restaurent selected by user.

    o From this user can add to cart their favourite food.

      
      ![Screenshot 2024-02-09 193001](https://github.com/MacWorldPro/FoodApp/assets/129540983/368022aa-61e5-4160-bbd8-0048a330e1b5)

8. Offline functionality

    o Keeping in Mind User experience, if there is not a good    internet connection than app closes and a new interface with tic-tac-toe game comes up.

    o User can be engaged till a good internet connection establishes.

    
![Screenshot 2024-03-15 192606](https://github.com/MacWorldPro/FoodApp/assets/129540983/f76f97cd-0d5d-4846-910f-8dc56c44ae85)

9. Payment 
    
    o Handling Check out using Stripe payment checkout.

    ![Screenshot 2024-02-09 193145](https://github.com/MacWorldPro/FoodApp/assets/129540983/0e75c1ca-a554-4085-86f7-767197e4c75f)
    ![Screenshot 2024-02-09 193211](https://github.com/MacWorldPro/FoodApp/assets/129540983/63b8c9e4-681e-4f21-8012-98ba0dae4c41)



## Tech Stack

    . MongoDB: Used for storing all the necessary info. MongoDB cloud storage Atlas.
    . Express.js: Backend developed using Express.js framework.
    . React.js: UI Interface made using React.js.
    . Node.js: Used for executing javascript code on server-side.
    . Stripe: Used for handling checkout and payments.
    . EmailJs: Used for sending real time emails.
    
## Installation

  1. Clone the repository

    git clone https://github.com/MacWorldPro/FoodApp.git

  2. Install the dependencies

    cd your repo
    npm install

  3. Configure environment variables:

    o Create a .env file in the root directory.

    o Define the following environment variables:

      .DATABASE: MongoDB connection string.

      .JWT_SECRET: Secret key for JSON Web Tokens.

      .STRIPE_TEST: Secret key for adding checkout functionality using https://stripe.com/in/payments/checkout

      . EmailJs token and Secret Key: For sending real time emails using https://www.emailjs.com/.

  4. Run the application:

    npm start: For client side rendering.

    nodemon server.js: For server side rendering.
    

    
## Acknowledgements

 - [React Js Documentation](https://react.dev/blog/2023/03/16/introducing-react-dev)
 - [Express Js Documentation](https://expressjs.com/)
 - [MongodDB Documentation](https://www.mongodb.com/)
  - [Stripe CheckOut](https://stripe.com/in/payments/checkout)
  - [EmaiJs Documentation](https://www.emailjs.com/docs/)





















