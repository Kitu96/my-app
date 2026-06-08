import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

function App() {
   const [message, setMessage] = useState('');

   useEffect(() => {
      fetch('/api/test')
         .then((res) => res.json())
         .then((data) => setMessage(data.message));
   }, []);
   return (
      <div className="flex min-h-svh flex-col items-center justify-center">
         <Button>Click me</Button>
         <p>{message}</p>
      </div>
   );
}

export default App;
