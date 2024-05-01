import React from "react";
import Button from "../Button/Button"
import Logo from "../Logo/Logo"
import SearchBox from "../Search/SearchBox"
import styles from "./Navbar.module.css";




const Navbar = () =>{
    return (<>
    <nav className={styles.navbar}>
     <Logo/>
    <SearchBox/>
    <Button>Give Feedback</Button>
    </nav>
    </>)
}
export default Navbar;