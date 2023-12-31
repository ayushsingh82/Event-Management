import './FilterEvent.css';
import FilterBox from '../../components/FilterBox/FilterBox';
import SearchEventList from '../../components/SearchEventList/SearchEventList';

const FilterEvent=()=>{
    return(
        <div>
            <h1>Filter Event </h1>
            <FilterBox/>
            <SearchEventList/>
        </div>
    )
}

export default FilterEvent