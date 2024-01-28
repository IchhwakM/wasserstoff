import { Stack } from '@mui/material';
import { Footer, Header } from './Organism';
import { Home } from './Pages';

function App() {
  return (
    <Stack bgcolor="#EEF0FA">
      <Header />
      <Home />
      <Footer />
    </Stack>
  );
}

export default App;
