import { BrowserRouter, Route, Routes } from 'react-router';
import { Contact, Home, NotFound, About } from './pages';
import { HeaderLayout, Layout } from './components';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route element={<HeaderLayout />}>
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
