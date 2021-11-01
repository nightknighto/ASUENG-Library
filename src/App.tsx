import Main from './components/Main';
import { ObjectContextProvider } from './ObjectContext';




function App() {
  return (
    <ObjectContextProvider>
      <Main />
    </ObjectContextProvider>
  );
}

export default App;
