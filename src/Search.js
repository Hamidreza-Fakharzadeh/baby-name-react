import React,{useState} from 'react'
import Names from './Names';

function Search(props) {
    const[searchTerm,setSearchTerm] = useState(props.results);
    const handelChange = event => {
       const resultSearch = props.results.filter(
           babyName => 
           babyName.name.toLowerCase().includes(event.target.value.toLowerCase())
        )
        setSearchTerm(resultSearch)
    }
        return(
        <div>
            <nav>
                <input type="text" placeholder="search..." onChange={handelChange} ></input>
            </nav>
            <Names results = {searchTerm}/>
        </div>
    
    )

}
export default Search;




// React.useEffect(() => {
    //     const resultUseEffect = props.results.filter(
    //         babyName => 
    //             babyName.toLowerCase().includes(searchTerm)       
    //     )
    //     setSearchResult(resultUseEffect)
    // }, [searchTerm]);