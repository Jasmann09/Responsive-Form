// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div>
      <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your name.." />

        <label for="email">Email:</label>
        <input type="text" id="email" name="email" placeholder="Your email.." />

        <label for="number">Phone Number:</label>
        <input type="number" id="phone-number" name="number" placeholder="Your phone number.." />

        <label for="number">Address:</label>
        <input type="text" id="address" name="address" placeholder="Your address.." />

        <label for="message">Message:</label>
        <textarea id="message" name="message" placeholder="Write something.." style={{height:"200px"}}></textarea>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;