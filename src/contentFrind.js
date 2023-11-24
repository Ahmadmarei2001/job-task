import React from 'react';
import Card from 'react-bootstrap/Card';
import './contentFrind';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { AiOutlineQuestionCircle } from 'react-icons/ai';





function ContentFrind({ isDarkMode }) {
    
  return (
 
   
<div style={{display:'flex', justifyContent:'center' ,alignItems:'center'}}>
<Card  style={{ width: '45rem' ,  backgroundColor: isDarkMode ? '#061329' : '#fff', color: isDarkMode ? '#fff' : '#000'}}>
        <Card.Header style={{ backgroundColor: isDarkMode ? '#8B8B8E' : '#32314c', color: isDarkMode ? '#fff' : '#fff' , textAlign:'center' }}><AiOutlineQuestionCircle /><b style={{marginRight:'69%'}}>Confirm your information</b>  </Card.Header>
        <Card.Body>
          <Card.Title > 
<div  style={{ display: 'flex', alignItems: 'center' }}>
          
          <div style={{ marginLeft: '35%' }}>
            

<h6 style={{fontSize:'15px',fontWeight: 'bold'}}>Please validate & update all the</h6>
<p style={{fontSize:'15px',fontWeight: 'bold'}}>Following information carefully</p> 


</div>

</div>
</Card.Title>

        
         <Card.Text >
         <Form>
      {/* Row for Email and Password */}
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label style={{marginRight:'85%',fontWeight: 'bold'}}>Name</Form.Label>
          <Form.Control   style={{fontWeight: 'bold',backgroundColor: isDarkMode ? '#FFFFFF' : '#D3D3D7', color: isDarkMode ? '#000' : '#000'}}  value={"Mohannad Alsouqi"} readOnly />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label style={{marginRight:'85%',fontWeight: 'bold'}}>Email</Form.Label>
          <Form.Control style={{fontWeight: 'bold',backgroundColor: isDarkMode ? '#FFFFFF' : '#D3D3D7', color: isDarkMode ? '#000' : '#000'}}  value={"m.alsouqi@talentspace.ai"} readOnly/>
        </Form.Group>
      </Row>
 

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label style={{marginRight:'69%',fontWeight: 'bold'}}>Linkedin URL</Form.Label>
          <Form.Control style={{fontWeight: 'bold',fontFamily:'revert',font:'message-box',backgroundColor: isDarkMode ? '#FFFFFF' : '#D3D3D7', color: isDarkMode ? '#000' : '#000'}}  value={"https://linkedin.com/in/mohannadalsouqi"} readOnly />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label style={{marginRight:'64%',fontWeight: 'bold'}}>Phone Number</Form.Label>
          <Form.Control style={{fontWeight: 'bold',backgroundColor: isDarkMode ? '#FFFFFF' : '#D3D3D7', color: isDarkMode ? '#000' : '#000'}}  value={"+962795885661"} readOnly />
        </Form.Group>
      
        </Row>

{/* File input for Resume */}
<Row className="mb-3">
    
  <Form.Group as={Col} controlId="formGridResume">
    <Form.Label style={{fontWeight: 'bold'}}>Upload Resume</Form.Label>
    <Form.Control style={{fontWeight: 'bold',height: '150px',fontSize: '15px',border: '3px dashed #D3D3D7',backgroundColor:'#D3D3D7'}} type="text" value={"Browse your file to upload your Resume"} readOnly />
  </Form.Group>
</Row>

      {/* Submit Button */}
      <Button href="/acceptFrind/closed" variant="primary"  style={{  borderRadius: '13px',
        height: '50px',
        backgroundColor: '#1919e6',

        fontFamily: 'Inter, -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif',
        fontSize: '16px',
        fontWeight: '5000',
        lineHeight: '1.5',
        padding: '12px 40px',
        }}  onChange={ContentFrind.handleJobStatusChange}>
           Invite to job
       </Button>
    </Form>
          </Card.Text>
          
          
          

        </Card.Body>
      </Card>
   </div>

   

  );
}

export default ContentFrind;
