import React from 'react';
import Navigation from './Nav';

const Header = (props) => {
    return (
        <React.Fragment > 
        <header id = "home">
            <Navigation />
            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">I am {props.name}.</h1>
                    <h3 style={{ color: '#fff', fontFamily: 'sans-serif ' }}>I am a {props.role}. {props.roleDescription}
                    </h3>
                    <hr />
                    <ul className="social">
                      <li >
                            {
                                props.socialLinks && props.socialLinks.map(item => {
                                    return (
                                        <li key={item.name}>
                                            <a href={item.url} target="blank"><i className={item.className}></i></a>
                                        </li>
                                    )
                                }
                                )
                            }
                      </li>
                    </ul>
                </div>
            </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
          </p>

        </header>
        </React.Fragment>
     );
}
 
export default Header;