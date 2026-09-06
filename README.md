# Cross Assignment 5

## Description

CoffeeToGo is a React Native coffee shop application.

The application uses Stack Navigator, Bottom Tab Navigator, and Drawer Navigator for navigation. Product data is loaded from a REST API using the Fetch API and displayed dynamically in the application.

This version of the project demonstrates REST API integration, asynchronous data loading, FlatList rendering, loading and error states, category filtering, and navigation to product details.

## Navigation Structure

The application uses several navigation types:

- Stack Navigator
- Bottom Tab Navigator
- Drawer Navigator

Navigation structure:

```text
Welcome
↓
Drawer Navigator
├── Home
│   └── Bottom Tab Navigator
│       ├── Home Stack
│       │   ├── Home
│       │   ├── Popular Products
│       │   ├── Category Products
│       │   └── Coffee Details
│       ├── Menu Stack
│       │   ├── Menu
│       │   ├── Category Products
│       │   └── Coffee Details
│       ├── Cart Stack
│       │   ├── Cart
│       │   └── Checkout
│       └── Profile
├── Settings
├── About Us
└── Contact Us
```

## Features

- Welcome screen
- Home screen
- Coffee menu
- Coffee details
- REST API integration
- Product data loading from MockAPI
- GET requests using Fetch API
- Products displayed using FlatList
- Loading indicator while fetching data
- Error handling for failed API requests
- Popular products
- Product filtering by category
- Search filtering on category and popular product screens
- Hot, Cold, and Iced coffee categories
- Navigation from categories to filtered product lists
- Navigation from product lists to Coffee Details
- Remote product images loaded from API
- Product size selection
- Different prices for Small, Medium, and Large drinks
- Product quantity selection
- Add products to cart
- Remove products from cart
- Cart total calculation
- Checkout screen
- Bottom Tab navigation
- Drawer navigation
- Stack navigation
- Custom navigation headers
- Navigation icons
- Back navigation
- Drawer swipe gesture
- Product ID and product data passing between screens

## API Integration

Product data is loaded from a REST API provided by MockAPI.

The API URL is stored in an environment variable and is not committed directly to the repository.

The API request logic is separated into:

```text
src/api/api.js
```

Products are loaded using a GET request with the Fetch API:

```js
import { API_URL } from '@env';

// GET request to load all coffee products from MockAPI
export const fetchProducts = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  const data = await response.json();

  return data;
};
```

The received data is stored in component state using `useState`.

`useEffect` is used to load products when the relevant screen is opened.

## Product List

Products received from the API are displayed using React Native `FlatList`.

The product list uses:

- `data` for API products
- `renderItem` to render product cards
- `keyExtractor` for list item keys
- `HorizontalProductCard` as a reusable custom component

Each product can be selected to open the Coffee Details screen.

## Loading and Error Handling

While product data is being loaded, the application displays an `ActivityIndicator`.

If the API request fails, the application displays:

```text
Failed to load products
```

This prevents the application from crashing when the API or network is unavailable.

## Data Passing

When a product is selected, its ID and product data are passed to the Coffee Details screen:

```js
navigation.navigate(SCREENS.COFFEE_DETAILS, {
  productId: item.id,
  product: item,
});
```

The product data is received on the Coffee Details screen using route parameters:

```js
const { product } = route.params || {};
```

If product data is missing, the application displays:

```text
Product not found
```

instead of crashing.

## Technologies

- React Native
- JavaScript
- React Navigation
- Native Stack Navigator
- Bottom Tab Navigator
- Drawer Navigator
- Fetch API
- MockAPI
- React Context
- React Native Vector Icons
- React Native Safe Area Context
- react-native-dotenv

## Testing

The application was tested on an Android emulator.

The following functionality was tested:

- REST API product loading
- Loading state
- API error handling
- Product rendering with FlatList
- Navigation between all screens
- Bottom Tab navigation
- Drawer navigation
- Drawer swipe gesture
- Stack navigation
- Back navigation
- Product ID and data passing
- Category filtering
- Popular products
- Product search on category and popular product screens
- Remote API images
- Coffee size selection
- Price changes depending on drink size
- Quantity selection
- Adding products to cart
- Removing products from cart
- Cart calculations

The project was also checked with ESLint with no errors or warnings.

SafeAreaView is used to support different screen areas and system UI.

## Screenshots

### Welcome Screen

![Welcome Screen](./src/assets/screenshots/welcome.png)

### Home Screen

![Home Screen](./src/assets/screenshots/home.png)

### Menu Screen

![Menu Screen](./src/assets/screenshots/menu.png)

### Coffee Categories

![Coffee categories](./src/assets/screenshots/categories.png)

### Coffee Categories Search

![Coffee categories search](./src/assets/screenshots/categories-search.png)

### Coffee Details

![Coffee Details](./src/assets/screenshots/coffee_details.png)

### Cart

![Cart](./src/assets/screenshots/cart.png)

### Checkout

![Checkout](./src/assets/screenshots/checkout.png)

### Drawer

![Drawer](./src/assets/screenshots/drawer.png)

## Demo Video

A short video demonstrating the application navigation and main functionality:

[Watch Demo Video](./src/assets/video/app-demo-5.mp4)

## Environment Variables

Create a `.env` file in the root of the project:

```env
API_URL=YOUR_MOCKAPI_PRODUCTS_URL
```

The `.env` file is excluded from Git using `.gitignore`.

## Run Project

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```env
API_URL=YOUR_MOCKAPI_PRODUCTS_URL
```

Start Metro:

```bash
npx react-native start
```

Run the Android application:

```bash
npx react-native run-android
```