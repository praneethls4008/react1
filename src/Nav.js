import { useContext, useState } from 'react';
import './Nav.css';
import { json, Link, useNavigate } from 'react-router-dom';
import { contextProvider } from './App';
export const Nav = () => {
    const [search,setSearch] = useState('');
    const {tableState, dispatcher}= useContext(contextProvider)
    const {data, loading, error} = tableState;
    const navigate = useNavigate();
    const searchHandler = (e)=>{
        if(e.key==='Enter'){
            
            navigate(`/details?office=${search}`);
            setSearch('');
        }
        
    }

    return(
        <div className="Nav">
            <Link to='/'><h1>Navigation bar</h1></Link>
            <div className="NavLinks">
                <Link to={'/'}>Home</Link>
                <input placeholder={'Search here'} value={search} onClick={()=>{setSearch('')}} onChange={e=>setSearch(e.target.value)} onKeyDown={searchHandler} />
                {(search && data) && 
                    <>helllo
                    <div>
                        {
                            data.filter(currObj => currObj.name.includes(search) || currObj.office.includes(search) || currObj.id===search)
                                .map(filteredObj => <Link to={`/details/${filteredObj.id}`}>{`${filteredObj.id} ${filteredObj.name} ${filteredObj.office} `}</Link>)

                        }
                    </div></>
                }
                <Link to={'/create'}>Create</Link>
            </div>
        </div>
    );
}