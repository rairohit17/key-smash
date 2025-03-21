import Header from './components/Header';
import './App.css';
import Typing from './components/Typing';
import Footer from './components/Footer';
import { RootState } from './store';
import { useSelector } from 'react-redux';
function App() {
  let theme = useSelector((state: RootState) => state.theme);

  return (
    <div
      style={{ backgroundColor: theme.background }}
      className={`min-h-screen max-h-screen grid `}
    >
      {/* <!-- Header --> */}
      <Header />

      {/* <!-- Typing --> */}
      <Typing />
      {/*   
    <!-- Footer --> */}
      <Footer />
    </div>
  );
}

export default App;
