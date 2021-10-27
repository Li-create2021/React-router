# Dojo React - Product cart


>This dojo is meant as a practice about:
>
>- list display
>- state management
>- forms
>- events

## Quick start
1. Clone this repository (and get into it on your local machine afterwards)
2. (Don't forget to go inside the project's directory after cloning)
3. Install the node modules:
    ```sh
    $ npm install 
    ```
4. Create a new branch with your name:
   ```sh
    $ git checkout -b <your-name> 
    ```
5. Launch the app
    ```sh
    $ npm start
    ```
6. Start coding

## Objectives

The global aim is to create a small React app to manage a shopping cart.

![Final app screenshot](https://github.com/WildCodeSchool/2021-09-Remote-EN-dojo-product-cart/blob/db5721b6b976907436a8f6290eced809129316c9/preview.png)

Everything can be done in your `App` component, but you should try to split your code in different files created in a `components` directory.

Please pay attention to `styles.css`, in order to try and use **only** existing CSS classes and limit the amount of styling you'll have to do and focus on the logic.

>Tip: _as usual_, keep your terminal open during development, it'd be too bad to miss a warning/error message ;-)

## Instructions

### Display products (Read | GET | SELECT)

In `App.js` you have data about a few products in the `initialProductList` constant.
Display these three products in a [table](https://www.w3schools.com/html/html_tables.asp) with the following columns:

- 'Product' (`name`)
- 'Unit Price' (`price`)
- 'Quantity' (`quantity`)
- 'Total Price' (`price * quantity`)

>Warning: Since we'll update this list in the next steps, and we want React to propagate these changes on your app, **data about products should be drawn from a `state`** (as opposed to directly from `initialProductList`, which should remain untouched and represent the **initial** list of products).

Under the table, display the total cart price. You can get it by adding every "Total Price" from the cart array.

>Tip: You can use the [reduce](https://www.w3schools.com/jsref/jsref_reduce.asp) method to get the total cart price.

### Add a product in your cart (Create | POST | INSERT INTO)

Create a form to add a product to your order:

- It should contain two fields "Name" and "Price", plus an "Add" submit button.
- When you submit the form, the system should check:
    - that a name was provided (i.e. not empty)
    - that the price is coherent (HTML5 brought input types, [check it out](https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types#numeric_field)!)
- A newly added product has a quantity of 1
- Any newly added product should have a unique "id", randomly generated when the form is submitted. Tip: [This](https://www.npmjs.com/package/uuid) package is awesome in this case !

### Allow my user to change the needed quantity for any item (Update | PUT or PATCH | UPDATE)

In your table, the "Quantity" column should contain several `<input>` and nothing else (Think about your input type and about value consistency: we're speaking about a **quantity**)

### Delete a product from my list (Delete | DELETE | DELETE)

As soon as a "quantity" field reaches 0, a [`window.confirm`](https://www.w3schools.com/jsref/met_win_confirm.asp) pop-up should display to ask for a confirmation (Ex: "Are you sure you want to remove this product from your cart ?"):

- On user confirmation, we remove said product (How nice of us! :p)
- Otherwise, the quantity should not be updated (NB: It does **not** mean "Set quantity to 1 unit" !)
