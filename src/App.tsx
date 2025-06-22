import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';

import './App.css';
import './index.css';

function App() {
  return (
    <div className="font-inter bg-neutral-light min-h-screen dark:bg-gray-800 dark:text-white">
      <LanguageSwitcher />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
