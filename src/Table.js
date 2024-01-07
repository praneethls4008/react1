import { Link } from 'react-router-dom';
import './Table.css'
import { motion } from 'framer-motion';
import { contextProvider } from './App';
import { useContext, useEffect } from 'react';
export const Table = ({searchParam})=>{
   const {tableState, dispatcher} = useContext(contextProvider);
   const {data, isLoading:isDetailsLoading, isError:isDetailsFetchError} = tableState; 
   let details=null;
   if(searchParam.size>0){
    details = data.filter(curr =>{
            for (const [key, value] of searchParam.entries()) {
                if(curr[key]!==value){
                    return false;
                }
            }
            return true;
        })
   }
   else{
    details=data;
   }
   return(
       <motion.table className='detailTable'
        transition={{
            ease: "linear",
            duration: 2,
            x: { duration: 1 }
          }}
        >
                <tbody>
                    <tr className='detailRow detailRowHead'>
                        <td className='detailColumn detailColumn1'>Name</td>
                        <td className='detailColumn detailColumn2'>age</td>
                        <td className='detailColumn detailColumn3'>Office</td>
                    </tr>
                {
                    details.map((detail, index)=>{
                        return (
                           <tr className='detailRow' key={`detailRow${index}`}>
                                <td className='detailColumn detailColumn1'> 
                                    <span>{detail.name}</span> 
                                </td>
                                <td className='detailColumn detailColumn2'> 
                                    <span>{detail.age}</span> 
                                </td>
                                <td className='detailColumn detailColumn3'> 
                                    <Link className='detailColumnLink' to={{
                                        pathname:'/details',
                                        search: `?office=${detail.office}`
                                    }}>
                                        {detail.office}
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