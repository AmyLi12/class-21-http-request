import Card from './components/Card';

export default function Home() {
  const spaceData = [
    {
      _id: "1",
      imageUri: "/images/galaxy.webp",
      name: "Galaxy",
      description: "A vast system of billions of stars, gas, and dust bound together by gravity, often arranged in spiral arms or elliptical shapes and spanning thousands of light-years across the cosmos."
    },
    {
      _id: "2",
      imageUri: "/images/asteroid.webp",
      name: "Asteroid",
      description: "An asteroid is a small rocky body that orbits the sun, typically found in the asteroid belt between Mars and Jupiter."
    },
    {
      _id: "3",
      imageUri: "/images/black-hole.webp",
      name: "Black Hole",
      description: "A black hole is a region of space where the gravitational pull is so strong that nothing, not even light, can escape from it."
    }
  ];

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
