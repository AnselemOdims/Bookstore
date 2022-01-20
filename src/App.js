import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './components/GlobalStyles';
import Books from './pages/Books';
import Categories from './pages/Categories';
import Header from './components/Header';
import useDarkMode from './utils/useDarkMode';
import { lightTheme, darkTheme } from './components/Themes';

const App = () => {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Header theme={theme} toggleTheme={themeToggler} />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </>
    </ThemeProvider>
  );
};

export default App;
