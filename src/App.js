import './App.css';
import Header from './Header';
import Body from './Body';
import Slidebar from './Slidebar';

function App() {
  return (
    <body id="content">
      <Header />

      <section class="main">
        <div class = "wrapper">
          <Body />

          <Slidebar />

        </div>

      </section>
    </body>
  );
}

export default App;
