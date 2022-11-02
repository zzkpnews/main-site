import { useEffect } from 'react';
const useMemoryMode = (enabled: boolean = false) => {
  useEffect(() => {
    if (enabled && document) {
      document.body.classList.add('memory-mode');
    }
  }, [enabled]);
};

export default useMemoryMode;
