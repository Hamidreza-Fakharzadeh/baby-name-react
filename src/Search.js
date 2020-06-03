import React from 'react'
import Names from './Names';

function Search(props) {
    const[searchTerm,setSearchTerm] = React.useState("");
    const[searchResult,setSearchResult] = React.useState(props.results);
    const handelChange = event => {
       setSearchTerm(event.target.value)
       const resultUseEffect = props.results.filter(
            babyName => 
            babyName.name.toLowerCase().includes(searchTerm) 
                 
        )
        setSearchResult(resultUseEffect)
        console.log(resultUseEffect)
    }
        return(
        <div>
            <nav>
                <input type="text" placeholder="search..." onChange={handelChange} value ={searchTerm}></input>
            </nav>
            <Names results = {searchResult}/>
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