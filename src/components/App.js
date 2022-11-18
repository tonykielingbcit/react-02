import '../App.css';
import Header from './Header';
import Footer from './Footer';
import Quotes from './Quotes';
import { useEffect } from 'react';

function App() {
  const info = {
    title: "Quote of the Day",
    author: "Team work",
    copyright: null
  };

  useEffect(() => {
    document.title = info.title
  }, [info.title]);

  return (
    <main className="App">
      <Header 
        title = {info.title}
      />

      <Quotes />

      <Footer 
        author = {info.author}
      />
    </main>
  );
}

export default App;
