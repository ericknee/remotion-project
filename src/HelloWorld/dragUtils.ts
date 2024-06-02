export const loadPosition = (key: string) => {
    const savedPosition = localStorage.getItem(key);
    return savedPosition ? JSON.parse(savedPosition) : { x: 0, y: 0 };
  };
  
  export const savePosition = (key: string, position: { x: number, y: number }) => {
    localStorage.setItem(key, JSON.stringify(position));
  };