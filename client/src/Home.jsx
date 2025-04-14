import Card from './components/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Home() {
  const [spaceData, setSpaceData] = useState([])

  useEffect(() => {
    axios.get('/api/space').then((response) => {
      setSpaceData(response.data)
    })
  }, [])

  return (
    <main className="p-4 space-y-2">
      {spaceData.length
        ? <div className="flex flex-wrap gap-4">
          {spaceData.map((item) => (
            <Card
              key={item._id}
              title={item.name}
              imgUri={item.imageUri}
            >
              {item.description}
            </Card>
          ))}
        </div>
        : <p>Loading...</p>}
    </main>
  );
}
