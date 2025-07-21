import React from 'react';
import Header from '../components/Header';
import PlantCard from '../components/PlantCard';
import PlantGroup from '../components/PlantGroup';
import plants  from '../data/plants';

const ProductListPage = () => {
  // Group plants by features
  const groupedPlants = plants.reduce((groups, plant) => {
    plant.features.forEach(feature => {
      if (!groups[feature]) groups[feature] = [];
      groups[feature].push(plant);
    });
    return groups;
  }, {});

  return (
    <div>
      <Header />
      <main className="product-list">
        <h2>Our Plant Collection</h2>
        {Object.entries(groupedPlants).map(([feature, plants]) => (
          <PlantGroup key={feature} title={feature} plants={plants} />
        ))}
      </main>
    </div>
  );
};

export default ProductListPage;