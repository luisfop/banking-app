import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/banking-me">Go to</Link>
        </div>
    )
}

export default Home
