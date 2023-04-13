import './App.css';
import { TypeAnimation } from 'react-type-animation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Library Guide</h1>
        <p>
          A simple guide for every React library I have used as referenced.
        </p>
      </header>
      <main className='App-main'>
        {/* Article Template */}
        {/* <article>
          <h2></h2>
          <a></a>
          <h3></h3>
          <code></code>
          <h3></h3>
          <span></span>
        </article> */}
        <article className='Article-odd'>
          <h2>React Router Dom</h2>
          <a></a>
          <h3></h3>
          <code></code>
          <h3></h3>
          <span></span>
        </article>
        <article className='Article-even'>
          <h2>React Type Animation</h2>
          <a className='App-link' href='https://react-type-animation.netlify.app/' target='_'>Link</a>
          <h3>Installation</h3>
          <code>npm i react-type-animation</code>
          <h3>Example</h3>
          <span style={{fontSize: '1.5em'}}>
            <TypeAnimation
              sequence={[
                'I am a developer...',
                1000,
                'I am a designer...',
                1000,
                'I am a coffee addict...',
                1000,
                'I am a walrus...',
                1000,
              ]}
              speed={40}
              style={{ fontSize: '2em' }}
              repeat={Infinity}
            />
          </span>
        </article>
      </main>
    </div>
  );
}

export default App;
