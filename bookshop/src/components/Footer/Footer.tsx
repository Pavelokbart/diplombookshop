import { useState } from "react";
import './Footer.css';



const Footer =({})=>{

    const [expanded, setExpanded] = useState(false);
    const handleExpanded =()=>{
        setExpanded(!expanded)
    }
    return (
        <div className="main_bottom">
            <div className="bottom_top">
                <div className="bottom_left">
                    ©2022 Bookstore

                </div>
                <div className="bottom_right">
                    All rights reserved

                    </div>

            </div>
                           
        </div>
        

    )


}
export  {Footer};