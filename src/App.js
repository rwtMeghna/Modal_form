import React, { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !phone || !dob) {
      alert("Please fill in all fields.");
      return;
    }
    if (!email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }
    const dobDate = new Date(dob);
    const currentDate = new Date();
    if (dobDate > currentDate) {
      alert("Invalid date of birth. Please enter a valid date.");
      return;
    }
    // Submit logic here
    setUsername("");
    setEmail("");
    setPhone("");
    setDob("");
    setIsOpen(false);
  };

  return (
    <div className="modal">
      <h1>User Details Modal</h1>
      <button onClick={() => setIsOpen(true)}>Open Form</button>
      {isOpen && (
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <br />
            <label htmlFor="email">Email :</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              pattern=".+@.+" // Regex pattern for checking if '@' is present
              title={`Please include an '@' symbol in the email address.${email} is missing in '@'.`} // Custom error message
            />

            <br />
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <br />
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
            <br />
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
