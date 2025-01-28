# React Router v6 useParams Hook Issue

This repository demonstrates a common issue encountered when using the `useParams` hook in React Router v6. The problem arises when trying to access route parameters from a component that's nested within a route component.

## Problem

`useParams` only works correctly when used directly within a component that's rendered by a route.  If you try to access parameters in a nested component, it will return an empty object.

## Solution

The solution is to pass the route parameters as props to the nested component.  This ensures the data is available where needed without relying on `useParams` in an unsupported context.

## Setup

1. Clone this repository.
2. Navigate to the directory in your terminal.
3. Run `npm install` to install the necessary dependencies.
4. Run `npm start` to start the development server.

You can then observe the behavior described in the issue by navigating to the `/users/:userId` route.