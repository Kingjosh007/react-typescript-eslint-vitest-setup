import { HashRouter } from 'react-router-dom';

function App() {
  return <h1>Hello World!</h1>;
}

function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}

export default WrappedApp;
