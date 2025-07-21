import React from 'react';
import PlantCard from './PlantCard';

const PlantGroup = ({ title, plants }) => {
  return (
    <div className="plant-group">
      <h3 className="group-title">
        {title.charAt(0).toUpperCase() + title.slice(1)} Plants
      </h3>
      <div className="plant-grid">
        {plants.map(plant => (
          <PlantCard 
            key={plant.id} 
            plant={plant} 
          />
        ))}
      </div>
    </div>
  );
};

export default PlantGroup;