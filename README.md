# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications: an infinite loop caused by improper use of the `useEffect` hook.  The `useEffect` hook, while powerful, can easily lead to infinite loops if its dependency array is not carefully managed.

## The Bug

The bug lies in the `MyComponent` component. The `useEffect` hook tries to update the `count` state every time it changes, creating a loop where the effect continuously runs, leading to an unhandled state update cycle.

## The Solution

The solution involves carefully managing the dependencies.  We should avoid creating dependency on `count` to prevent infinite updates. One way to fix it is by using a conditional inside the useEffect or by only running the effect under specific conditions such as component mounting or when a specific prop changes.