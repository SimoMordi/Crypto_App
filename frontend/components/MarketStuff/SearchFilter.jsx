import './marketStuff.css'
import  { useState } from 'react';


const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);
    onFilterChange(value);
  };

  
  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      <select value={filter} onChange={handleFilterChange} className="filter-select">
        <option value="all">All</option>
        <option value="top_gainers">Top Gainers</option>
        <option value="top_losers">Top Losers</option>
        <option value="most_active">Most Active</option>
        
      </select>
    </div>
  );
};

export default SearchFilter;
