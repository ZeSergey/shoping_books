import { connect } from 'react-redux';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Event 12 02 12 </h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapStateToProps = state => ({
  ...state
});


// const mapDispatchToProps = state => ({
//   ...state
// });


export default connect(mapStateToProps)(App);
