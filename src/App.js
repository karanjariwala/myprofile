import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import {Grid, Icon, Button} from 'semantic-ui-react';
import Nav from './Nav.jsx';
import Home from './Home';
import Work from './Work.jsx';
import Projects from './Projects';
import './App.css';
import ContentWrapper from './ContentWrapper';
import * as Img from './DP.jpg';
import Summary from './Summary';



const initialContent={
  home:{
    name:'Karan Jariwala',
    image:Img,
    role:'Software Engineer - UI (Front-end) at Rippling, ex - Practo.',
    skills:['Javascript', 'React', 'Redux', 'CSS-in-JS', 'CSS', 'SCSS',' WebPack '],
    email:'karanjariwala@gmail.com ',
    phone:'+91-9790706592',
    twitter:'https://twitter.com/karanjariwala47',
    linkedIn:'https://www.linkedin.com/in/karanjariwala/',
    github:'https://github.com/karanjariwala',
    medium:'https://medium.com/@karanjariwala',
    stackOverflow:'https://stackoverflow.com/users/4865194/karan-jariwala?tab=profile',

  },
  summary: {
    content:[
    `Software Engineer and a problem-solver specialising in front-end (UI) development.`,
    `3+ Years of experience in creating reusable, mobile friendly and visually appealing user-interfaces using React JS and Java-script.`,
  

  ],
  twitter:'https://twitter.com/karanjariwala47',
  medium:'',
  stackOverflow:'https://stackoverflow.com/users/4865194/karan-jariwala?tab=profile',

},
  work:[
    {
      company:'Rippling (People Center Inc.)',
      details:[` Working on front-end features, redesign and re-write in Rippling web-app using React JS.`,
      `Creating reusable components in our component library, upgrading and optimise front-end.`],
      duration:'2018, Nov - Present',
      role:'Software Engineer - UI (Front-end)'
    },
    {
      company:'Practo Technologies',
      details:[`Worked on front-end of doctor-scheduler web-app and registration form builder app using React, Redux, Saga and Styled-Components.`,
      `Upgraded web-pack, moved components to render-props pattern and created an in house component library based on atomic principles.`],
      duration:'2017, Dec - 2018, Nov',
      appreciations: 'Received the super performer (highest) rating.',
      role:'Software Engineer - UI'
    },
    {
      company:'Cerner Health-care',
      details:['Worked on front-end of gamification project using React, Redux, SCSS.' ,
      'Worked on resourcing web application as an innovation center project for consulting organisation to automate resource allocation using past experience/work profile.'],
      appreciations: 'Received rising star award and the night on the town award.',
      duration:'2015, JULY - 2017, JULY ',
      role:'Engineer - Front-end',
     }
  ],
  personalProjects:[
    {
      name:'Github-repo-search-app',
      tech:'React- Redux',
      details:`Search Repository name and select the top contributors to see the list.
      Brushing up Flex-box, Redux-saga, React-Router and Styled-Components.
      Experimenting with Compound Components Design pattern.
      `,

      demo:'https://karanjariwala.github.io/git-repo-app/',
      github:'https://github.com/karanjariwala/git-repo-app  '
    },
    {
      name:'Form Widget',
      tech:'React - Redux',
      details:`Creating a Form Widget for creating adaptive forms. 
      Depending answer of the one question it will lead to next question.
      Summary page with all questions and answers will be shown in the end. 
      `,
      demo:'https://karanjariwala.github.io/FormWidget/',
      github:'https://github.com/karanjariwala/FormWidget'
    },
    {
    name:'Admin App - Pluralsight',
    tech:'React - Redux',
    details:'Creating Pluralsight Admin app with react and redux.',
    demo:'http://acrid-committee.surge.sh/',
    github:'https://github.com/karanjariwala/React_Redux_Admin_app'
  },
  {
    name:'Couting stars Game in react - Pluralsight',
    tech:'React',
    details:`Count the stars by using numbers or sum of numbers.
    Click equal button once to verify the answer, once verified 'Okay', click it again to submit the answer.
    you will get 7 redraws for redrawing the stars randomly.
    If you are able to use all the numbers you win!`,
    demo:'https://karanjariwala.github.io/Counting-Stars-Game-in-React-/',
    github:'https://github.com/karanjariwala/Counting-Stars-Game-in-React-'
  },
  {
    name:'Confusion Web App - Coursera Course',
    tech:'Angular 1',
    details:`Confusion Restaurant SPA. This app is created by using Angular 1 and Bootstrap 3. This application can be downloaded and tested with the JSON server. Please follow the instructions in Live preview Read Me link to see the App working`,
    demo:'https://karanjariwala.github.io/conFusion-web-app/dist/index#/',
    github:'https://github.com/karanjariwala/conFusion-web-app'
  },
  {
    name:'Bug Miss Game - Udacity course',
    tech:'Vanilla Javascript',
    details:`
    Bug Miss Game is created in Vanilla Javascript using the Object Oriented programming constructs part of OOPs JS Udacity course. Goal is to reach the blue colored water, so thirsty princess can drink water. How to move: use the arow keys.
    Beware of the Poison Bugs!!`,
    demo:'https://karanjariwala.github.io/Arcade-Game-/',
    github:'https://github.com/karanjariwala/Arcade-Game-'
  },
  {
  name:'Bouncing Ball Game - MDN OOJS Project',
  tech:'Vanilla Javascript',
  details:`Bouncing Ball is a 2 player game created in Vanilla Javascript using Object oriented prog as a part of MDN project. Objects created are Balls, which ever player eats the highest number of bouncing balls wins! Controls: Arrow keys for one
  player. ASDW for the other player.`,
  demo:'https://karanjariwala.github.io/Bouncing-Ball-Game/',
  github:'https://github.com/karanjariwala/Bouncing-Ball-Game'
 
},
{
  name:'Cat Clicker - Advanced JS - Udacity',
  tech:'Vanilla Javascript',
  details:`Ever heard of Cow-Clicker? Cow Clicker is an incremental social network game on Facebook developed by video game researcher Ian Bogost. I have a created a similar Cat Clicker. MVC pattern is strictly followed to address seperation of concerns.
  So that code can be easily scaled and maintained.`,
  demo:'https://karanjariwala.github.io/CatClicker/',
  github:'https://github.com/karanjariwala/CatClicker'
 
},
// {
//   name:'Random Quote Generator',
//   tech:'JQuery',
//   details:`This AJAX project is created using JQuery. Here Quotesondesign API and Twitter API are used using JSONP mechanism to generate a random Quote everytime. See a random Quote anytime. if you like it you can tweet it as well. `,
//   demo:'https://karanjariwala.github.io/Random-Quote-Generator/',
//   github:'https://github.com/karanjariwala/Random-Quote-Generator'
// }

  ],
 
}

class App extends Component {
  state = {
     activeItem:'Home',
    content:initialContent,
    }

    componentDidMount() {
      document.addEventListener('scroll', () => {
     
        if(window.scrollY>3&&window.scrollY<500){
          this.setState({activeItem:'Home'})
        }
        if(window.scrollY>500 && window.screenY<1700){
          this.setState({activeItem:'Summary'})
        }
        if(window.scrollY>1700){
          this.setState({activeItem:'Work'})
        }
      });
    }

  handleItemClick = (e, { name }) => {

    scrollToComponent(this[name], {
      offset: -75,
      align: 'top',
      duration: 700,
  });
  }
  render() {
    return (
      <div className='wrapper'>
      <Nav activeItem={this.state.activeItem} handleItemClick={this.handleItemClick}/>
    
      <ContentWrapper ref={(el) => { this.Home = el; }}>
        <Home summary={this.state.content.home} />
      </ContentWrapper>
      <ContentWrapper ref={(el) => { this.Summary = el; }}>
        <Summary summary={this.state.content.summary} />
      </ContentWrapper>
      
    
      <ContentWrapper ref={(el) => { this.Work = el; }}>
        <Work work={this.state.content.work}/>
      </ContentWrapper>
     
      {/* <ContentWrapper ref={(el) => { this.Projects = el; }} >
        <Projects projects={this.state.content.personalProjects}/>
        </ContentWrapper> */}

      </div>
    );
  }
}

export default App;
