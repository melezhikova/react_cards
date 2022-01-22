import Card from './Card';
import './App.css';
import picture from '../src/img/picture.jpg';

const card = {
  image: {
    url: picture,
    description: 'some picture'
  },
  title: 'Card title',
  text: 'some text',
  link: {
    url: 'null',
    text: 'Go somewhere',
    type: 'primary'
  },
}

function App() {
  return (
    <div className="App">
      <Card card={card} />
    </div>
  );
}

export default App;
