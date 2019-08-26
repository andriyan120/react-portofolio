import React, {Component} from 'react';

import './App.css';
import Header from './components/pages/home/Home';
import About from './components/pages/about/About';

import resumeData from './resumeData';
import Resume from './components/pages/resume/Resume';
import Contact from './components/pages/contact/Contact';
import Footer from './components/pages/footer/Footer';


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: 'Andri',
      role: 'Front End Developer',
      roleDescription: 'I like dabbling in various parts of frontend development and like to learn about new technologies, write technical articles or simply play games in my free time.,',
      about: "aku adalah seorang front end developer.",
      address: 'Indonesia',
      socialLinks: [
        {
          "name": "linkedin",
          "url": "https://www.linkedin.com/in/andriyani/",
          "className": "fa fa-linkedin"
        },
        {
          "name": "github",
          "url": "https://github.com/andriyan120",
          "className": "fa fa-github"
        },
        {
          "name": "skype",
          "url": "https://twitter.com/andri41272789",
          "className": "fa fa-twitter"
        }
      ],
    }
  }


  render() 
  { 

    return (
 
      <div className = "app">
        <Header 
          name={this.state.name} 
          role={this.state.role}
          roleDescription={this.state.roleDescription}
          socialLinks={this.state.socialLinks}
        />

        <About 
          about={this.state.about}
          name={this.state.name}
          address={this.state.address}
        />

        <Resume resumeData={resumeData}/>
        
        <Contact linkedinId={this.linkedinId}/>
        <Footer socialLinks={this.state.socialLinks} />
              
      </div>
     );
  }
}
 
export default App;
