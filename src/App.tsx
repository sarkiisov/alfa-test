import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Typography } from './components/Typography';
import { Gallery } from './containers/Gallery';
import { useAppDispatch } from './store/hooks';
import { fetchObjectIds, fetchObjectRecords } from './store/objects/asyncActions';

const Layout = styled.div`
  box-sizing: content-box;
  margin: 32px auto;
  padding: 0px 16px;
  max-width: 800px;
`;

const GalleryLoadingMessage = styled(Typography)`
  padding: 32px 0px;
  text-align: center;
`;

function App() {
  const [isGalleryLoaded, setIsGalleryLoaded] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchObjectIds())
      .then(() => dispatch(fetchObjectRecords({ recordAmount: 6 })))
      .then(() => setIsGalleryLoaded(true));
  }, []);

  return (
    <Layout>
      {
        isGalleryLoaded
          ? <Gallery />
          : <GalleryLoadingMessage>Loading gallery...</GalleryLoadingMessage>
      }
    </Layout>
  );
}

export default App;
