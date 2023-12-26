import { Link } from 'react-router-dom';
import './Table.css'
import { motion } from 'framer-motion';
export const Table = ({details})=>{
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
                                {/* <td className='detailColumnDeleteButton' > 
                                    <span className="material-symbols-outlined" onClick={()=>deleteDetails(detail.id)}>delete</span>
                                </td> */}
                            </tr>
                        );
                    })
                }
                </tbody>
            </motion.table>
    )
}