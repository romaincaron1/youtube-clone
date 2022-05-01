import React, { useState } from "react";
import styles from "./navbar.module.css";
import { BiMenu } from "react-icons/bi";
import { RiVideoUploadFill, RiVideoFill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import {
	AiFillHome,
	AiFillCompass,
	AiOutlineSearch,
	AiOutlineHistory,
	AiFillLike,
} from "react-icons/ai";
import { MdSubscriptions, MdVideoLibrary } from "react-icons/md";
import Link from "next/link";
import logo from "../../../public/assets/logo.png";
import pfp from "../../../public/assets/gonpfp.jpg";
import Image from "next/image";

export default function navbar() {
	const [scrollingMenu, setScrollingMenu] = useState(false);

	const handleScrollingMenu = () => {
		setScrollingMenu(!scrollingMenu);
	};

	return (
		<>
			<div className={styles.topbar}>
				<ul className={styles.elements}>
					<li className={styles.left}>
						<button onClick={handleScrollingMenu}>
							<BiMenu />
						</button>
						<Link href="/">
							<a>
								<Image src={logo} width="50" height="30" alt="logo" />
							</a>
						</Link>
					</li>
					<li className={styles.center}>
						<input type="text" placeholder="Rechercher" />
						<button>
							<AiOutlineSearch />
						</button>
					</li>
					<li className={styles.right}>
						<Link href={"/"}>
							<a className={styles.m}>
								<RiVideoUploadFill />
							</a>
						</Link>
						<Link href={"/"}>
							<a className={styles.m}>
								<IoIosNotifications />
							</a>
						</Link>
						<Link href={"/"}>
							<a className={styles.profilpic}>
								<Image src={pfp} width="30" height="30" alt="logo" />
							</a>
						</Link>
					</li>
				</ul>
			</div>
			{scrollingMenu ? (
				<nav className={styles.sidebarRolled}>
					<ul className={styles.mainItems}>
						<li>
							<Link href="/">
								<a>
									<AiFillHome />
									<span>Accueil</span>
								</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a>
									<AiFillCompass />
									<span>Explorer</span>
								</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a>
									<MdSubscriptions />
									<span>Abonnements</span>
								</a>
							</Link>
						</li>
					</ul>
					<ul className={styles.secondaryItems}>
						<li>
							<Link href="/">
								<a>
									<MdVideoLibrary />
									<span>Bibliothèque</span>
								</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a>
									<AiOutlineHistory />
									<span>Historique</span>
								</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a>
									<RiVideoFill />
									<span>Vos vidéos</span>
								</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a>
									<AiFillLike />
									<span>Vidéos "J'aime"</span>
								</a>
							</Link>
						</li>
					</ul>
					<h4>Abonnements</h4>
					<ul className={styles}>
						<li>
							<Link href="/">
								<a>Josh A</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a>Alderiate</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a>Draconian</a>
							</Link>
						</li>
					</ul>
				</nav>
			) : (
				<nav className={styles.sidebar}>
					<ul>
						<li>
							<Link href="/">
								<a>
									<AiFillHome />
									<span>Accueil</span>
								</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a>
									<AiFillCompass />
									<span>Explorer</span>
								</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a>
									<MdSubscriptions />
									<span>Abonnements</span>
								</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a>
									<MdVideoLibrary />
									<span>Bibliothèque</span>
								</a>
							</Link>
						</li>
					</ul>
				</nav>
			)}
		</>
	);
}
