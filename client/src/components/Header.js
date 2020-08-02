import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div>

                <nav>
                    <div className="nav-wrapper">
                        <a href="/auth/google" className="brand-logo">google Login</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="sass.html">kkk</a></li>

                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;