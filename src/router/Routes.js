import { Route, Routes as ReactRoutes } from 'react-router-dom';

import Layout from '@views/layout';
import Works from '@/views/pages/works';
import Work from '@/views/pages/works/components/Work';

export default function Routes() {

  return (
    <ReactRoutes>
      <Route element={<Layout />}>
        <Route path="/" element={<Works />} />
        <Route path="/works/:name" element={<Work />} />
      </Route>
    </ReactRoutes >
  );
};