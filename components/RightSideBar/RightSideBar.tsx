import { FaSearch } from "react-icons/fa";
import styles from "./RightSideBar.module.scss"
import Link from "next/link";

export const RightSideBar = () => {
    return (
        <div className={styles.rightSideBar}>
            <div className={styles.searchBar}>
                <FaSearch className={styles.searchIcon} />
                <input type="text" placeholder="Search" className={styles.searchInput} />
            </div>
            <div className={styles.upgradeBanner}>
                <div className={styles.upgradeContent}>
                    <h2>Updgrade to Premium+</h2>
                    <p>Enjoy additional benefits, zero ads, and the largest reply prioritization.</p>
                    <button className={styles.upgradeButton}> Upgrade to Premium+</button>
                </div>
            </div>
            <div className={styles.trending}>
                <h2>Explore <span className={styles.betaTag}>Beta</span></h2>
                <ul className={styles.trendingList}>
                    <li>
                        <div className={styles.trendingInfo}>
                            <span>CSS · 1 hour ago</span>
                            <h3>Developer spends 4 hours centering a div, finally gives up</h3>
                        </div>
                    </li>
                    <li>
                        <div className={styles.trendingInfo}>
                            <span>Javascript  · 2 hours ago</span>
                            <h3>New logic game makes coding fun! </h3>
                        </div>
                    </li>
                    <li>
                        <div className={styles.trendingInfo}>
                            <span>Local story · 3 hours ago </span>
                            <h3>Local web developer electrocuted from crying onto their laptop</h3>
                        </div>
                    </li>
                    <li>
                        <div className={styles.trendingInfo}>
                            <span>CSS · 4 hours ago</span>
                            <h3>Flexbox vs. Grid: The ultimate showdown</h3>
                        </div>
                    </li>
                    <li>
                        <div className={styles.trendingInfo}>
                            <span>Web Development · 5 hours ago</span>
                            <h3>Inline styles: The controversial method splitting the community</h3>
                        </div>
                    </li>
                </ul>
                <Link className={styles.showMore} href="#showMore">Show more...</Link>
            </div>
            <div className={styles.whoToFollow}>
                <h2>Who to follow</h2>
                <ul className={styles.followList}>
                    <li>
                        <div className={styles.userInfo}>
                            <img 
                                src="https://randomuser.me/api/portraits/men/42.jpg" alt="chiller" 
                            />
                            <div>
                                <h3>chiller42</h3>
                                <span>@chiller42</span>
                            </div>
                        </div>
                        <button className={styles.followButton}>Follow</button>
                    </li>
                    <li>
                        <div className={styles.userInfo}>
                            <img 
                                src="https://randomuser.me/api/portraits/women/27.jpg" alt="woman" 
                            />
                            <div>
                                <h3>woman27</h3>
                                <span>@woman27</span>
                            </div>
                        </div>
                        <button className={styles.followButton}>Follow</button>
                    </li>
                    <li>
                        <div className={styles.userInfo}>
                            <img 
                                src="https://randomuser.me/api/portraits/men/83.jpg" alt="Michael" 
                            />
                            <div>
                                <h3>michael83</h3>
                                <span>@michael83</span>
                            </div>
                        </div>
                        <button className={styles.followButton}>Follow</button>
                    </li>
                </ul>
                <Link className={styles.showMore} href="#showMore">Show more...</Link>
            </div>
            <div className={styles.footerLinks}>
                <Link href="#termsOfService"> Terms of Service </Link> 
                <Link href="#privacyPolicy"> Privacy Policy </Link> ·
                <Link href="#cookiePolicy"> Cookie Policy </Link> 
                <Link href="#accessibility"> Accessibility </Link> ·
                <Link href="#adsInfo"> Ads Info </Link> 
                <Link href="#more"> More... </Link>
                <p>&copy; 2025 X Corp.</p>
            </div>
        </div>
    )
}

export default RightSideBar;