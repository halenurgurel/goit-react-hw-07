# 📞 Modern Phonebook - Async Redux State Management

A professional, high-performance contact management application built with **React** and **Redux Toolkit**. This version of the project demonstrates advanced **asynchronous state management** using **Async Thunks**, REST API integration, and memoized selectors for a high-performance user experience.

## 🚀 Features

- **REST API Integration:** Full integration with an external backend (MockAPI) to fetch, create, and delete contacts persistently. 🌐

- **Asynchronous Data Flow:** Managed with `createAsyncThunk` to handle loading states, errors, and successful data synchronization. 🔄

- **Memoized Search Filtering:** Powered by `createSelector` from the Reselect library to ensure the search logic only re-calculates when data or filters change, optimizing performance. 🔍

- **Real-time UI Feedback:** Includes global loading spinners and error handling notifications to keep users informed of background processes. ⏳

- **Modern UI/UX:** A responsive design built with **CSS Modules** for scoped styling and clean typography. 🎨

## 🛠️ Technologies Used

- **React:** (Functional Components, Hooks: `useEffect`, `useSelector`, `useDispatch`) ⚛️

- **Redux Toolkit:** (Slices, Store configuration, and Async Thunks) 🧠

- **Axios:** (Promise-based HTTP client for API requests) 📡

- **Reselect:** (Memoized selectors for optimized state derived data) 🎯

- **Vite:** (Next-generation frontend tooling) ⚡

- **CSS Modules:** (Component-level scoped styling) 💅

## 🌟 Key Functional Highlights

### Centralized Async Architecture 🏗️

The application logic is decoupled into `contactsOps` for API operations and `contactsSlice` for state management, making the code highly maintainable and professional.

## Optimized Selector Logic ⚡

By utilizing `createSelector`, the application prevents unnecessary re-renders of the contact list, ensuring smooth performance even with large datasets.

### Robust Error Handling 🔒

Each API request is wrapped in a `try-catch` block within Thunks, passing error messages directly to the Redux state for real-time UI reporting.

### Component Modularity 🧩

Following the atomic design approach, components like `ContactForm`, `SearchBox`, and `ContactList` are independent and communicate solely through the Redux store.

## 🚀 How to Run

1. **Clone the repository.**

2. **Install dependencies:** `npm install`

3. **Start the development server:** `npm run dev`

---

**Author** _Halenur Gurel React & Redux Development Project - Asynchronous State Management & API Integration 🚀_

🎯 _"This project focuses on mastering the Redux ecosystem, specifically handling side effects with Async Thunks, memoized selectors, and integrating React applications with RESTful APIs."_
