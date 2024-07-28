import React, { useState, useEffect } from 'react';

const About = () => {
  const [items, setSomeStuff] = useState([]);

  useEffect(() => {
    let mounted = true;

    async function fetchData () {
      const a = await fetch('https://jsonplaceholder.typicode.com/todos');
      const b = await a.json();
      if (mounted) {
        setSomeStuff(b);
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div>
      <h2>About Page</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;