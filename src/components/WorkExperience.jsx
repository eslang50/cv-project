import React from "react";

export default function WorkExperience() {
    return (
        <div>
            <h1>Work Experience</h1>
            <form action=""> <br />
            <input type="text" placeholder="Position" /> <br />
            <input type="text" placeholder="Company" /> <br />
            <input type="text" placeholder="Location" /> <br />
            <input type="text" placeholder="From" /> <br />
            <input type="text" placeholder="To"/> <br />
            </form>
            <button>Delete</button>
            <button type="submit">Add</button>
        </div>
    )
}