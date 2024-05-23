import React, { useEffect, useCallback } from 'react';

const debounce = ({ effect, dependencies, delay }) => {
  const callback = useCallback(effect, dependencies);

  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);

  return (
    <div>
      {/* Any additional JSX content can be added here */}
    </div>
  );
};

export default debounce;