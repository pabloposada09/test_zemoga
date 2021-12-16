import React from 'react'
import './navbar.css';
import searchIcon from '../../images/search.svg';

export const NavBar = () => {
    return (
        <nav class="nav" role="navigation">
            <div class="max-centered">
                <h1 class="nav__logo">Rule of thumb.</h1>
                <button class="nav__hamburger icon-button" >
                    <svg width="25" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h25v4H0V0zm0 8h25v4H0V8zm0 8h25v4H0v-4z" fill="#FFF" fill-rule="nonzero"/></svg>
                </button>
                <ul class="nav__links">
                    <li>
                        <a href="#">Past Trials</a>
                    </li>
                    <li>
                        <a href="#">How It Works</a>
                    </li>
                    <li>
                        <a href="#">Login / Sign Up</a>
                    </li>
                    <li>
                        <form action="javascript:void(0)">
                            <input class="nav__search-input" aria-label="search" type="text"/>
                            <button class="nav__search icon-button" type="submit">
                                <img src={searchIcon}alt="search"/>
                            </button>
                        </form>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
