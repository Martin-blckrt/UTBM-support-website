import React from "react"
import {Link} from "gatsby"
import {css} from "@emotion/react";

//IMPORT components
import {ConnectButton, DisconnectButton} from "../rectangleButton";
import SearchBar from "../searchBar";
import {isBrowser} from "../../utils/auth";

//IMPORT Style
import * as headerStyle from './header.module.css'


//Define emotion style
const headingBackground = function (headerOpacity, boxShadowOpacity) {
    return css`
      box-shadow: 0 0 20px rgba(0, 0, 0, ${boxShadowOpacity});
      background-color: rgba(255, 255, 255, ${headerOpacity});
      transition: background-color .3s, box-shadow .3s`
}

export default function Header(props) {

    return (
        <div css={headingBackground(props.headerOpacity, props.boxShadowOpacity)} className={headerStyle.header}>
            <div className={headerStyle.topContainer}>
                <Link to={"/"}>
                    <svg viewBox="0 0 95 107" fill="none" xmlns="http://www.w3.org/2000/svg" id="utbm-icon"
                         className={headerStyle.logo}>
                        <path
                            d="M51.3868 24.6801C38.8735 26.1875 27.3583 26.1273 18.7603 24.8255L21.7375 46.6744C27.416 46.1803 35.515 45.4329 41.2587 44.718C65.9845 41.6455 85.4656 32.5708 84.6154 25.282C84.4398 23.7997 83.4365 22.4854 81.7585 21.3467C89.3433 22.8014 94.164 25.3447 94.5679 28.7208C95.4482 36.0071 75.4655 44.407 49.9371 47.477C39.5532 48.7286 29.859 48.9017 21.9457 48.1768L24.9028 69.8727C30.1675 69.3961 36.5132 68.7841 41.2587 68.1972C65.9845 65.1222 85.4656 56.0475 84.6154 48.7612C84.4398 47.2814 83.4365 45.9646 81.7585 44.8259C89.3433 46.2806 94.164 48.8214 94.5679 52.1975C95.4482 59.4863 75.4655 67.8862 49.9371 70.9562C40.9277 72.0423 32.4399 72.3106 25.1762 71.8918L27.7471 90.7408H36.7716C38.289 90.6004 39.8266 90.4474 41.3842 90.2517C66.1099 87.1792 85.4656 78.7768 84.6154 71.493C84.4398 70.0106 83.4365 68.6963 81.7585 67.5576C89.3433 69.0124 94.164 71.5557 94.5679 74.9292C95.2401 80.5175 83.6597 86.7478 66.7294 90.7408H94.603V9.84913C89.6543 16.0067 72.408 22.1493 51.3868 24.6801Z"
                            fill="#3F8BFF"/>
                        <path d="M7.74707 49.6645V90.7412H19.676L7.74707 49.6645Z" fill="#3F8BFF"/>
                        <path
                            d="M38.7516 0.926041C15.6812 3.01035 -0.140458 8.2951 0.0250825 13.7479C0.0300989 13.9235 0.0526709 14.089 0.0978184 14.2571L0 14.2496L27.7682 107L15.3853 19.9883C22.6615 20.7483 31.9694 20.7633 42.0975 19.8478C65.1679 17.761 83.741 11.6461 83.5755 6.19827C83.4099 0.745453 61.8244 -1.16077 38.7516 0.926041Z"
                            fill="#585E6A"/>
                    </svg>
                </Link>
                {
                    (isBrowser())
                        ? window.location.pathname !== "/" && <SearchBar/>
                        : <div/>
                }
                {
                    (isBrowser())
                        ? window.location.pathname === "/" && <div/>
                        : <div/>
                }

                {props.admin === "yes" ? (
                    <DisconnectButton buttonText={'D??connexion'}/>
                ) : (
                    <ConnectButton buttonText={'Administration'}/>
                )}
            </div>
            <div className={headerStyle.bottomContainer}>
                {
                    (isBrowser())
                    ? window.location.pathname !== "/" &&
                        <div className={headerStyle.arboStyleContainer}>
                            <svg className={headerStyle.arboStyle} width="11" height="12" viewBox="0 0 11 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.25 18.25L9.75 10L1.25 1.75" stroke="#303030" stroke-width="2"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p className={headerStyle.arboStyle}>{props.arbo}</p>
                            {props.arboArticle !== undefined &&
                            <svg className={headerStyle.arboStyle} width="11" height="12" viewBox="0 0 11 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.25 18.25L9.75 10L1.25 1.75" stroke="#303030" stroke-width="2"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>}
                            <p className={headerStyle.arbo_style}>{props.arboArticle}</p>
                        </div>
                    : <div/>
                }
            </div>
        </div>
    )

}



