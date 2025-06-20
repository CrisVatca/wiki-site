// src/pages/index.tsx
import React, { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';

export default function Home() {
  const history = useHistory();

  useEffect(() => {
    history.replace('/inferno');  // Redirect to /inferno
  }, [history]);

  return null;
}
