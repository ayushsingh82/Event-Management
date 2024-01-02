import './FilterBox.css'

const months=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const years=[2023,2024];

const monthToDisplay=()=>{
    return months.map((month,index)=>{
        return (
            <option key={index} value={month}>
                {month}
            </option>
        )    
    })
}

const yearsToDisplay=()=>{
    return years.map((year,index)=>{
        return(
            <option key={index} value={year}>
                {year}
            </option>
        )
    })
}

const FilterBox=()=>{
    return (
        <div>
           <form>
            <label htmlFor='month'>Month:</label>
            <select>
              {monthToDisplay()}
            </select>
            <label htmlFor='year'>Year:</label>
            <select>
                {yearsToDisplay()}
            </select>
           </form>
        </div>
    )
}

export default FilterBox