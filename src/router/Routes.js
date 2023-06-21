import { Route, Routes as ReactRoutes } from 'react-router-dom';

import Layout from '@views/layout';
import Works from '@/views/pages/works';
import Work from '@/views/pages/works/components/Work';

export default function Routes({ toggleDarkMode, isDarkMode }) {
  return (
    <ReactRoutes>
      <Route element={<Layout toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />}>
        <Route path="/" element={<Works />} />
        <Route path="/works/:acronym" element={<Work />} />
      </Route>
    </ReactRoutes>
  );
}
