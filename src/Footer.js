import { Link } from 'react-router-dom';
import './Footer.css'

export const Footer = () =>{
    return(
        <div className="Footer">
            <h4>Footers</h4>
            <br/>
            <div className="FooterLinks">
                <Link to="/details?office=tcs">TCS</Link>
                <Link to="/details?office=amazon">Amazon</Link>
                <Link to="/details?office=google">Google</Link>
            </div>
        </div>
    );
}