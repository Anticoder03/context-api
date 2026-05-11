# Context API React Project

A React + Vite project that demonstrates how to use multiple Context providers:

- `UserContext` for user information.
- `ProductContext` for API-fetched product data.

The app fetches products from Fake Store API and displays them on the page.

## Features

- User data from `UserContext` (`name`, `email`, `num`, `color`).
- Product list fetched using `axios` from `https://fakestoreapi.com/products`.
- Loading and error state handling in product context.
- Add sample product button (local state update).

## Tech Stack

- React
- Vite
- Context API
- Axios
- ESLint

## Project Structure

```text
src/
	App.jsx
	Context_API.jsx
	ProductContextView.jsx
	main.jsx
	context/
		UserContext.js
		UserContextProvider.jsx
		ProductContext.js
		ProductContextProvider.jsx
```

## How Context Is Wired

- `main.jsx` wraps `App` with both providers:
	- `UserContextProvider`
	- `ProductContextProvider`
- `Context_API.jsx` consumes `UserContext`.
- `ProductContextView.jsx` consumes `ProductContext`.

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run development server

```bash
npm run dev
```

### 3) Build for production

```bash
npm run build
```

### 4) Lint code

```bash
npm run lint
```

### 5) Preview production build

```bash
npm run preview
```

## API Used

- Endpoint: `https://fakestoreapi.com/products`
- Method: `GET`
- Used in: `src/context/ProductContextProvider.jsx`

## Notes

- If API is unavailable, the app shows an error message.
- Product added from the button is local UI state and is not persisted to backend.
