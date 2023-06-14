import React from "react";

export default function GeneralInfo() {
    return (
        <div>
            <h1>Personal Information</h1>
            <form action="">
                <input type="text" placeholder="First Name" /><br />
                <input type="text" placeholder="Last Name" /> <br />
                <input type="email" placeholder="Email" /> <br />
                <input type="number" placeholder="Phone Number" /> <br />
                <input type="text" placeholder="Address" /> <br />
            </form>
            <button>Delete</button>
            <button type="submit">Add</button>
        </div>
    )
}