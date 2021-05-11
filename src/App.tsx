import { ThemeProvider } from '@material-ui/styles';
import 'fontsource-roboto';
import theme from 'src/theme';
import GlobalStyles from './components/GlobalStyles';
import Routes from 'src/routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
