import { Link } from 'react-router-dom';
import './Table.css'
import { motion } from 'framer-motion';
import { contextProvider } from './App';
import { useContext } from 'react';
export const Table = ()=>{
   const {tableState, dispatcher} = useContext(contextProvider);
   const {data:details, isLoading:isDetailsLoading, isError:isDetailsFetchError} = tableState; 
   return(
       <motion.table className='detailTable'
        transition={{
            ease: "linear",
            duration: 2,
            x: { duration: 1 }
          }}
        >
                <tbody>
                {
                    details.map((detail, index)=>{
                        return (
                           <tr className='detailRow' key={`detailRow${index}`}>
                                <td className='detailColumn detailColumn1'> 
                                    <span>name:</span> 
                                    <span>{detail.name}</span> 
                                </td>
                                <td className='detailColumn detailColumn2'> 
                                    <span>age:</span> 
                                    <span>{detail.age}</span> 
                                </td>
                                <td className='detailColumn detailColumn3'> 
                                    <span>office:</span> 
                                    <Link to={{
                                        pathname:'/details',
                                        search: `?office=${detail.office}`
                                    }}>
                                        <span>{detail.office}</span>
                                    </Link>
                                </td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </motion.table>
    )
}