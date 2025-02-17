```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: Set count only once when component mounts
    // Using an empty dependency array prevents repeated calls after mount.
  }, []);

  return <div>Count: {count}</div>;
}
```