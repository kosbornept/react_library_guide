import './App.css';

// Type Animation
import { TypeAnimation } from 'react-type-animation';

// DataGrid
import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';

// React Router DOM
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, Link } from 'react-router-dom';

// DatePicker
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// DataGrid
const columns = [
  { key: 'id', name: 'ID' },
  { key: 'title', name: 'Title' },
  { key: 'author', name: 'Author' },
  { key: 'publisher', name: 'Publisher' },
  { key: 'year', name: 'Year' },
  { key: 'review', name: 'Review' }
];

// React Router DOM
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={
    <ul style={{ listStyle: 'none', padding: 0 }}>
      <li>
          <Link target='_' to='https://images.unsplash.com/photo-1543332164-6e82f355badc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGVsbG98ZW58MHx8MHx8&w=1000&q=80' className={ 'App-link'}>
            Hello
          </Link>
        </li>
        <li>
          <Link target='_' to='https://static.vecteezy.com/system/resources/previews/002/221/988/original/glowing-neon-line-earth-globe-icon-isolated-on-brick-wall-background-vector.jpg' className={ 'App-link'}>
            World
          </Link>
        </li>
    </ul>
  }>
  </Route>
));

const rows = [
  { id: 0, title: '1984', author: 'George Orwell', publisher: 'Secker & Warburg', year: '1949', review: '4.5'},
  { id: 1, title: 'The Lord of the Rings', author: 'J.R.R.Tolkien', publisher: 'Allen & Unwin', year: '1968', review: '4.8'},
  { id: 2, title: 'The Kite Runner', author: 'Khaled Hosseini', publisher: 'Riverhead Books', year: '2003', review: '4.8'},
  { id: 3, title: `Harry Potter and the Philosopher's Stone`, author: 'J.K. Rowling', publisher: 'Bloomsbury', year: '1997', review: '4.8'},
  { id: 4, title: 'Slaughterhouse-Five', author: 'Kurt Vonnegut', publisher: 'Delacorte', year: '1969', review: '4.1'},
  { id: 5, title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis', publisher: 'Geoffrey Bles', year: '1950', review: '4.9'},
  { id: 6, title: 'To Kill a Mockingbird', author: 'Harper Lee', publisher: 'J.B. Lippincott & Co.', year: '1960', review: '4.2'},
  { id: 7, title: 'The Book Thief', author: 'Markus Zusak', publisher: 'Picador', year: '2005', review: '4.7'},
  { id: 8, title: 'Wuthering Heights', author: 'Emily Bronte', publisher: 'Thomas Cautley Newby', year: '1847', review: '4.5'},
  { id: 9, title: 'The Catcher in the Rye', author: 'J.D. Salinger', publisher: 'Little, Brown and Company', year: '1951', review: '3.9'}
]

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
          <a className='App-link' href='https://reactrouter.com/en/main' target='_'>Link</a>
          <h3>Installation</h3>
          <code>npm install react-router-dom</code>
          <h3>Example</h3>
          <span>
            <RouterProvider router={router}>

            </RouterProvider>
          </span>
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

        <article className='Article-odd'>
          <h2>React Data Grid</h2>
          <a className='App-link' href='https://github.com/adazzle/react-data-grid' target='_'>Link</a>
          <h3>Installation</h3>
          <code>npm install react-data-grid</code>
          <h3>Example</h3>
          <span><DataGrid style={{ display: 'grid', gridTemplateColumns: 30, height: 'fit-content' }} columns={columns} rows={rows} /></span>
        </article>

        <article className='Article-even'>
          <h2>React DatePicker</h2>
          <a className='App-link' href='https://mui.com/x/react-date-pickers/getting-started/' target='_'>Link</a>
          <h3>Installation</h3>
          <code>npm install @mui/x-date-pickers</code>
          <h3>Example</h3>
          <span>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker format="DD-MM-YYYY" className='datePicker'/>
          </LocalizationProvider>
          </span>
        </article>

      </main>
    </div>
  );
}

export default App;
