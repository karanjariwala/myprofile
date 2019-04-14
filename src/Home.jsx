import React from 'react'
import { Header, Icon, Image, Divider, Button , Label} from 'semantic-ui-react'
import './App.css';



const HeaderContent = ({display, style}) => ( 
    <Header.Subheader style={style}  className='info' >
    {display}
    </Header.Subheader>)

const Skills =({display})=><Header.Subheader  className='info' >

   {display.map(skill=><Label className='skill-label' basic color='blue' size='medium' key={skill}>
        {skill}
   </Label>)}
  </Header.Subheader>

const buttonStyle={margin:'10px'}

const Summary = ({summary}) => (
  
  <div className='content' >
  <div className='homeSection'>
  <Header as='h1' icon textAlign='center' inverted>
    
    <Image  src={summary.image} style={{width: '200px', height: '200px', objectFit: 'cover'}} circular />
      <Header.Content>{summary.name}</Header.Content>
        <HeaderContent  display={summary.role} />
        <HeaderContent style={{display:'inline'}} display={<a style={{color:'#f2711c', textDecoration:'underline'}}  href={`mailto:${summary.email}`}> {summary.email}</a>} />
        {/* <HeaderContent  display={summary.phone} style={{display:'inline'}}/> */}
        <Skills  display={summary.skills} />
        
        
        
        </Header>

  <div style={{textAlign:'center'}}>
      <Button size="mini" circular style={buttonStyle} link target='_blank' href={summary.twitter} color='twitter'>
        <Icon name='twitter' /> Twitter
      </Button>
      <Button size="mini" circular style={buttonStyle} link  target='_blank' href={summary.github} color='github'>
        <Icon name='github' /> GitHub
      </Button>
      <Button size="mini" circular  style={buttonStyle} link  target='_blank' href={summary.linkedIn} color='linkedin'>
        <Icon name='linkedin' /> LinkedIn
      </Button>
      <Button size="mini" circular style={buttonStyle} link  target='_blank' href={summary.medium} color='white'>
      <Icon name='medium' /> Medium
    </Button>
    <Button size="mini" circular style={buttonStyle} link  target='_blank' href={summary.stackOverflow} color='red'>
      <Icon name='stack overflow' /> stack overflow
    </Button>

  </div>
   
        </div> 
</div>

 

 
      
          
 
)

export default Summary