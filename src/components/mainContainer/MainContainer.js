import React from 'react'
import './mainContainer.css';

import {Footer} from '../footer/Footer.js';

import people2x from '../../images/bg-people.@2x.png';
import people from '../../images/bg-people.png';


export const MainContainer = () => {
    return (
        <div class="max-centered">

            <aside class="banner banner-top" role="doc-tip" aria-label="Speak Out">
                <div class="banner__left">
                    <span class="banner__hairline">Speak out. Be heard.</span>
                    <span class="banner__title">Be counted</span>
                </div>
                <div class="banner__right">
                    <p class="banner__text">
                        Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.
                    </p>
                </div>
                <button class="icon-button" aria-label="close">
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g stroke="#000" stroke-width="2" fill="none" fill-rule="evenodd"><path d="M1 19L19 1M1 1l18 18"/></g></svg>
                </button>
            </aside>

            {/* Aquí tiene que ir el componente mio */}


            <aside class="banner banner-bottom" role="doc-tip" aria-label="Submit a name">
                <img
                    srcset={`${people} 750w, ${people2x} 1440w`}   
                    sizes="(min-width: 750px) 1440px, 100vw"
                    class="banner__background" src={people}
                    alt=""
                    role="none"/>
                <div class="banner__left">
                    <h2 class="banner__heading">Is there anyone else you would want us to add?</h2>
                </div>
                <div class="banner__right">
                    <button class="banner__cta">
                        Submit a name
                    </button>
                </div>
            </aside>


            <hr role="separator"></hr>

            <Footer />

        </div>
    )
}
