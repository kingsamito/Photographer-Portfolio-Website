import { BrowserRouter, Route, Routes } from 'react-router';
import {
  Contact,
  Home,
  NotFound,
  About,
  Services,
  Portfolio,
  Blog,
} from './pages';
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
            <Route path="services" element={<Services />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
