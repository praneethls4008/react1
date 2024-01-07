import { useContext, useRef, useState } from 'react';
import './Nav.css';
import { json, Link, useLinkClickHandler, useNavigate } from 'react-router-dom';
import { contextProvider } from './App';
export const Nav = () => {
    const [search,setSearch] = useState('');
    const {tableState, dispatcher}= useContext(contextProvider)
    const {data, loading, error} = tableState;
    const inputRef = useRef(null);
    const dropDownRef = useRef(null);
    const navigate = useNavigate();

    const searchHandler = (e)=>{
        if(e.key==='Enter'){
            navigate(`/details?office=${search}`);
            setSearch('');
        }
        if(e.key==='Escape'){
            setSearch('');
            inputRef.current.blur();
        }
        
    }

    const linkClickHandler = (id)=>{
        setSearch('');
        
    }

    return(
        <div className="Nav">
            <Link to='/'><h1>Navigation bar</h1></Link>
            <div className="NavLinks">
                <Link className='NavLinkHref' to={'/'}>Home</Link>
                <div className='searchContainer'>
                    <input ref={inputRef} onMouseEnter={(e)=>console.log('mouseEnteredinp')} onMouseLeave={(e)=>console.log('mouseLeftinp')} className='searchInput' placeholder={'Search here'} value={search} onClick={()=>{setSearch('')}} onChange={e=>setSearch(e.target.value)} onKeyDown={searchHandler} />
                    
                    {(search && data) && 
                        <div ref={dropDownRef} onMouseEnter={(e)=>console.log('mouseEnteredDrop')} onMouseLeave={(e)=>console.log('mouseLeftDrop')} className='searchDropDown'>
                            {
                                data.filter(currObj => currObj.name.includes(search) || currObj.office.includes(search) || currObj.id===search)
                                    .map((filteredObj,index) => 
                                    <Link className='searchDropDownLink' key={`searchDropDown${index}`} to={`/details/${filteredObj.id}`} onClick={()=>linkClickHandler(filteredObj.id)}>
                                        {`${filteredObj.id} ${filteredObj.name} ${filteredObj.office} `}
                                    </Link>
                                )
                            }
                        </div>
                    }
                </div>
                <Link className='NavLinkHref' to={'/create'}>Create</Link>
            </div>
        </div>
    );
}