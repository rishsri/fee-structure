export const RecursiveButtons = ({ options, onClick, selectedValue }) => {
    return (
      <div>
        {Object.keys(options).map((option) => (
          <button
            key={option}
            onClick={() => onClick(option)}
          
          >
            {option === 'ALL_COURSES​' || option === 'ALL_LEVEL​' ? 'Select All' : option}
          </button>
        ))}
      </div>
    );
  };