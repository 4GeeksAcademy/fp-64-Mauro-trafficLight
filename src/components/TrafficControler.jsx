const [currentColor, setCurrentColor] = useState('red');
const [isRunning, setIsRunning] = useState(false);

useEffect(() => {
  let intervalId;

  if (isRunning) {
    intervalId = setInterval(() => {
      setCurrentColor((prevColor) => {
        if (prevColor === 'red') return 'yellow';
        if (prevColor === 'yellow') return 'green';
        if (prevColor === 'green') return 'red';
      });
      clearInterval(intervalId);
    }, 4000);
  }

  return () => clearInterval(intervalId);
}, [isRunning]);

useEffect(() => {
  onChange(currentColor);
}, [currentColor, onChange]);

return null;
};

export default TrafficController;
