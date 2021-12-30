import './Home.css'
import Button from './Button';
import ReadingList from '../ReadingList';

function Home() {
    return (
      <div className="home">
        <div className='menu'>
          <Button>New Reading</Button>
          <Button>Filter</Button>
        </div>
        <ReadingList className="readingList"/>
      </div>
    );
  }
  
  export default Home;