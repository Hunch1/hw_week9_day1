import { useState } from 'react'
import './home.css'

const Home = () => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const handleClick = () => {
    console.log('Home page clicked!');
    setIsHighlighted(!isHighlighted)
  };

  const containerClass = `home-container${isHighlighted ? ' highlighted' : ''}`;

  return (
    <div className="page-container">
      <button className={containerClass} onClick={handleClick}>
        <h1 className="home-title">Click My Home Page</h1>
      </button>
    </div>
  )
}
export default Home
