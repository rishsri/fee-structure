import React, { useState } from 'react';
import { feeStructure } from './TempData';
import { RecursiveButtons } from './RecursiveBtn';
import "./App.css"

const FeeCalculator = () => {

  const [selectedFee, setSelectedFee] = useState(null);
  const [selectedNationality, setSelectedNationality] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);

  const handleFeeChange = (fee) => {
    setSelectedFee(fee);
    setSelectedNationality(null);
    setSelectedCourse(null);
    setSelectedLevel(null);
  };

  const handleNationalityChange = (nationality) => {
    setSelectedNationality(nationality);
    setSelectedCourse(null);
    setSelectedLevel(null);
  };

  const handleCourseChange = (course) => {
    setSelectedCourse(course);
    setSelectedLevel(null);
  };

  const handleLevelChange = (level) => {
    setSelectedLevel(level);
  };

  const calculateFee = () => {
    const feeAmount = feeStructure[selectedFee][selectedNationality][selectedCourse][selectedLevel].amount;
    alert(`The fee amount is: ${feeAmount}`);
  };

  return (
    <div>
    <div className='fee-struc'>
      <label>Select Fee:</label>
      <div>
        {Object.keys(feeStructure).map((fee) => (
          <button
            key={fee}
            onClick={() => handleFeeChange(fee)}
          
          >
            {fee}
          </button>
        ))}
      </div>

      {selectedFee && (
        <>
          <label>Select Nationality:</label>
          <RecursiveButtons
            options={feeStructure[selectedFee]}
            onClick={handleNationalityChange}
            selectedValue={selectedNationality}
          />
        </>
      )}

      {selectedNationality && (
        <>
          <label>Select Course:</label>
          <RecursiveButtons
            options={feeStructure[selectedFee][selectedNationality]}
            onClick={handleCourseChange}
            selectedValue={selectedCourse}
          />
        </>
      )}

      {selectedCourse && (
        <>
          <label>Select Level:</label>
          <RecursiveButtons
            options={feeStructure[selectedFee][selectedNationality][selectedCourse]}
            onClick={handleLevelChange}
            selectedValue={selectedLevel}
          />
        </>
      )}

      {selectedLevel && (
        <button onClick={calculateFee}>Calculate Fee</button>
      )}
    </div>
    </div>
  );
};

export default FeeCalculator;
