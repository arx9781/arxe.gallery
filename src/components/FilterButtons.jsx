const FilterButtons = ({ onFilterChange }) => {
  const categories = [
    "all",
    "abstract",
    "Bl&Wh",
    "futuristic",
    "graphical",
    "retro",
  ];

  return (
    <>
      <div className="filter-buttons">
        {categories.map((category) => (
          <button key={category} onClick={() => onFilterChange(category)}>
            {category}
          </button>
        ))}
      </div>
    </>
  );
};

export default FilterButtons;
