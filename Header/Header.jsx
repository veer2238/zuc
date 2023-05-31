import "./Header.scss";
import { useEffect,useState,useContext } from "react";
import {useNavigate} from "react-router-dom";
import {AiOutlineHeart, AiOutlineSearch} from  "react-icons/ai";
import {CgShoppingCart} from "react-icons/cg"
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/Context";
import { icons } from "react-icons";
const Header = () => {
    const [scrolled,setScrolled] = useState(false)
    const [showCart,setShowCart] = useState(false)

    const HandleScroll = () =>{


        
        const offset = window.scrollY
        if (offset>200){
            setScrolled(true);

        }else{
            setScrolled(false);
        }
       
    }



    useEffect(()=>{
        window.addEventListener("scroll",HandleScroll)
        

    },[])
    return (

        <>
        <header className={`main-header ${scrolled ? 'sticky-header' : ""}`}>
            <div className="header-content">
                <ul className="left">
                    <li>Home</li>
                    <li>About</li>
                    <li>Categories</li>
                </ul>
                <div className="center">.Vx Store.</div>
                <div className="right">
                    <AiOutlineSearch/>
                    <AiOutlineHeart/>
                    <span className="cart-icon " onClick={()=>setShowCart(true)}>
                        <CgShoppingCart/>
                        <span>5</span>
                    </span>
                </div>
            </div>
        </header>
{showCart &&
        <Cart setShowCart={setShowCart}/>

}
        </>
    )
    
    
};

export default Header;
