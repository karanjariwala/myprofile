
import React from 'react'
import { Container, List , Label, Header, Icon, Button } from 'semantic-ui-react'
import './App.css';

const buttonStyle={marginLeft:'4px', marginRight:'4px'}

const Summary = ({summary}) => {
 
    return (<div className='content'  >   
      <Header as='h2' inverted textAlign='left'>
    <Icon name='male' />
    <Header.Content>Professional Summary
</Header.Content>
  </Header>
  <Container text>

    {summary.content.map(text => <p>
    {text}
    </p>)
    }
    <p>
 I also 
    <Button size="small" circular style={buttonStyle} link  target='_blank' href={'https://medium.com/@karanjariwala'} color='white'>
    <Icon name='medium' /> Blog
  </Button> ,
  <Button size="small" circular style={buttonStyle} link  target='_blank' href={'https://twitter.com/karanjariwala47'} color='twitter'>
    <Icon name='twitter' /> tweet
  </Button> ,
and write 
<Button size="mini" circular style={buttonStyle} link  target='_blank' href={'https://stackoverflow.com/users/4865194/karan-jariwala?tab=profile'} color='red'>
      <Icon name='stack overflow' /> answers
    </Button>
 related to Front-end development and React JS.
    </p>



  </Container>
    </div>)

    
}

export default Summary