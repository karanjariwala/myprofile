import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import {Grid} from 'semantic-ui-react';
import Nav from './Nav.jsx';
import Summary from './Summary.jsx';
import Work from './Work.jsx';
import Projects from './Projects';
import './App.css';
import ContentWrapper from './ContentWrapper';
import * as Img from './DP.jpg';



const initialContent={
  summary:{
    name:'Karan Jariwala',
    image:Img,
    role:'JavaScript Enthusiast, UI Developer at Practo, working on React',
    skills:['Javascript', 'React', 'Redux', 'CSS-in-JS', 'CSS', 'SCSS',' WebPack '],
    email:'karanjariwala@gmail.com ',
    phone:'+91-9790706592',
    twitter:'https://twitter.com/karanjariwala47',
    linkedIn:'https://www.linkedin.com/in/karanjariwala/',
    github:'https://github.com/karanjariwala',
    medium:'https://medium.com/@karanjariwala',
    stackOverflow:'https://stackoverflow.com/users/4865194/karan-jariwala?tab=profile',

  },
  work:[
    {
      company:'Practo Technologies',
      details:[` Working on user interface of Scheduling module of our Insta Health Management System.`,
      ` This is a re-write and enhancement of our calendar application from scratch.`,` We have re-
      written it using React stack with additional features and screens enhancing the user-experience.`],
      duration:'2017, Dec - present',
      appreciations: 'Received Super Performer',
      role:'UI developer - Software Engineer'
    },
    {
      company:'Cerner Health-care',
      details:['Worked on Gamification project using react, redux,scss.' ,
      'Worked on Resourcing web application UI as innovation center project for consulting org to automate resource allocation using past experience/work profile. '],
      appreciations: 'Received Rising Star award and the Night on the town award.',
      duration:'2015 JULY -2017 JULY ',
      role:'Java-script developer - Engineer',
     }
  ],
  personalProjects:[
    {
      name:'Github-repo-search-app',
      tech:'React- Redux',
      details:`Search Repository name and select the top contributors to see the list.
      Brushing up Flex-box, Redux-saga, React-Router and Styled-Components.
      Experimenting with Compund components Design pattern.
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
     activeItem:'Summary',
    content:initialContent,
    }

    componentDidMount() {
      document.addEventListener('scroll', () => {
     
        if(window.scrollY>3&&window.scrollY<500){
          this.setState({activeItem:'Summary'})
        }
        if(window.scrollY>500&& window.screenY<1000){
          this.setState({activeItem:'Work'})
        }
        if(window.scrollY>1000){
          this.setState({activeItem:'Projects'})
        }
      });
    }

  handleItemClick = (e, { name }) => {
console.log(this.refs)
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
    
      <ContentWrapper ref={(el) => { this.Summary = el; }}>
      <Summary summary={this.state.content.summary} />
      </ContentWrapper>
    
      <ContentWrapper ref={(el) => { this.Work = el; }}>
      <Work work={this.state.content.work}/>
      </ContentWrapper>
     
      <ContentWrapper ref={(el) => { this.Projects = el; }} >
        <Projects projects={this.state.content.personalProjects}/>
        </ContentWrapper>

      </div>
    );
  }
}

export default App;
