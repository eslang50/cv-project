import React from "react";

export default function Education() {
    return (
        <div>
            <h1>Education</h1>
            <form action="">
                <input type="text" placeholder="University" /> <br />
                <input type="text" placeholder="Degree" /> <br />
                <input type="text" placeholder="From" /> <br />
                <input type="text" placeholder="To" />
            </form>
            <button>Delete</button>
            <button type="submit">Add</button>
        </div>
    )
}