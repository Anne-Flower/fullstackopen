const Filter = ({filter, onFilterChange}) => {
  return (
    
    <div>
      filter shown with :
      <input className="filter" value={filter} onChange={onFilterChange} />
      
    </div>
    
  );
};
export default Filter;
