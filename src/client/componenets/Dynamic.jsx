import React, { useEffect, useState } from 'react';
import { loadModules } from '../utils';

const Dynamic = ({ external }) => {

  const { name } = external;
  const [component, setComponent] = useState(null);

  useEffect(() => {
    runLoader();
  }, []);

  const runLoader = async () => {
    await loadModules([external]);

    const module = window[name] &&
      window[name]
        .default()
        .init({ React })
        .build();

    setComponent(module.components[name]);
  };

  return (
    component || <div style={{ padding: 50 }}><p>Loading...</p></div>
  );
};

export default Dynamic;