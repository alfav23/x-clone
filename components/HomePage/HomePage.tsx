'use client';
import styles from "./HomePage.module.scss";
import LeftSideBar from "../LeftSideBar";
import RightSideBar from "../RightSideBar";
import MainContent from "../MainContent";


export const HomePage = () => {
    return (
       <div className={styles.container}>
            <LeftSideBar avatarUrl="https://randomuser.me/api/portraits/women/9.jpg"></LeftSideBar>
            <MainContent></MainContent>
            <RightSideBar></RightSideBar>
       </div> 
    )
}

export default HomePage;