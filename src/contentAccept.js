import React from 'react';
import Card from 'react-bootstrap/Card';
import './content';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { AiOutlineQuestionCircle } from 'react-icons/ai';





function ContentAccept({ isDarkMode }) {
    
  return (
 
   
<div style={{display:'flex', justifyContent:'center' ,alignItems:'center'}}>
<Card  style={{ width: '45rem' ,  backgroundColor: isDarkMode ? '#061329' : '#fff', color: isDarkMode ? '#fff' : '#000'}}>
        <Card.Header style={{ backgroundColor: isDarkMode ? '#8B8B8E' : '#32314c', color: isDarkMode ? '#fff' : '#fff' , textAlign:'center' }}><AiOutlineQuestionCircle /><b style={{marginRight:'69%'}}>Confirm your information</b>  </Card.Header>
        <Card.Body>
          <Card.Title > 
<div  style={{ display: 'flex', alignItems: 'center' }}>
          
          <div style={{ marginLeft: '35%' }}>
            

<h6 style={{fontSize:'15px'}}>Please validate & update all the</h6>
<p style={{fontSize:'15px'}}>Following information carefully</p> 


</div>

</div>
</Card.Title>

        
         <Card.Text >
         <Form>
      {/* Row for Email and Password */}
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label style={{marginRight:'85%',font:'message-box',fontFamily:'revert'}}>Name</Form.Label>
          <Form.Control   style={{fontFamily:'revert',font:'message-box',backgroundColor: isDarkMode ? '#FFFFFF' : '#D3D3D7', color: isDarkMode ? '#000' : '#000'}}  value={"Mohannad Alsouqi"} readOnly />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label style={{marginRight:'85%',font:'message-box',fontFamily:'revert'}}>Email</Form.Label>
          <Form.Control style={{fontFamily:'revert',font:'message-box',backgroundColor: isDarkMode ? '#FFFFFF' : '#D3D3D7', color: isDarkMode ? '#000' : '#000'}}  value={"m.alsouqi@talentspace.ai"} readOnly/>
        </Form.Group>
      </Row>
 

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label style={{marginRight:'71%',font:'message-box',fontFamily:'revert'}}>Linkedin URL</Form.Label>
          <Form.Control style={{fontFamily:'revert',font:'message-box',backgroundColor: isDarkMode ? '#FFFFFF' : '#D3D3D7', color: isDarkMode ? '#000' : '#000'}}  value={"https://linkedin.com/in/mohannadalsouqi"} readOnly />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label style={{marginRight:'66%',font:'message-box',fontFamily:'revert'}}>Phone Number</Form.Label>
          <Form.Control style={{fontFamily:'revert',font:'message-box',backgroundColor: isDarkMode ? '#FFFFFF' : '#D3D3D7', color: isDarkMode ? '#000' : '#000'}}  value={"+962795885661"} readOnly />
        </Form.Group>
      
        </Row>

{/* File input for Resume */}
<Row className="mb-3">
    
  <Form.Group as={Col} controlId="formGridResume">
    <Form.Label style={{font:'message-box',fontFamily:'revert'}}>Upload Resume</Form.Label>
    <Form.Control style={{font:'message-box',fontFamily:'revert',height: '150px',fontSize: '15px',border: '3px dashed #D3D3D7',backgroundColor:'#D3D3D7'}} type="text" value={"Browse your file to upload your Resume"} readOnly />
  </Form.Group>
</Row>

      {/* Submit Button */}
      <Button href="#" variant="primary" size="sm" style={{   backgroundColor:'#1919e6'}}  onChange={ContentAccept.handleJobStatusChange}>
           Start Screening
       </Button>
    </Form>
          </Card.Text>
          
          
          

        </Card.Body>
      </Card>
   </div>

   

  );
}

export default ContentAccept;
