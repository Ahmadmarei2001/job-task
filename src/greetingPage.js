import React from 'react';
import { useState } from 'react';
import './greetingPage.css';
import { FaSun, FaMoon } from 'react-icons/fa';
import Content from './content';
import Button from 'react-bootstrap/Button';
import { AiOutlineClockCircle } from 'react-icons/ai';



function GreetingPage(){

 
 const [isDarkMode, setIsDarkMode] = useState(false);
 

 // State for job status
 const [jobStatus, setJobStatus] = useState('');

 


 // Function to handle job status change
 const handleJobStatusChange = (event) => {
    setJobStatus(event.target.value);
 }

 // Function to toggle dark mode
 const toggleDarkMode = () => {
  setIsDarkMode(!isDarkMode);
}

 
 return (
    <>
  
      <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
 
> 
      <div className="header-container">
      <h5 style={{ fontWeight: 'bold', marginRight: '-50%' }}>Hello</h5>
  <h5>,Mohannad Alsouqi!</h5>
        <div className="toggle-container" onClick={toggleDarkMode}>
          {isDarkMode ? <FaMoon className="moon-icon" /> : <FaSun className="sun-icon" />}
        </div>
       
      </div>

      <div className={`Job-content ${isDarkMode ? 'dark-mode' : 'light-mode'} `}>
        <form>
        <div className="form-row"  style={{ backgroundColor: isDarkMode ? '#fff' : '#002147', color: isDarkMode ? '#000' : '#fff'}}>
      <div className="question">
        <h6>Are you interested in this job?</h6>
      </div>
          <div className="time">
          <b><p >    <AiOutlineClockCircle style={{ marginRight: '5px' }} />
      22H : 30M</p></b> 
      </div>

          
          <div id="button">
           
            <Button href="/accept" variant="primary" size="sm" style={{   backgroundColor:'#1919e6'}}  onChange={handleJobStatusChange}>
            Accept the invitation
        </Button>
        
        
        
        <Button href="/AcceptFrind" variant="secondary" size="sm" style={{   backgroundColor:'#061329'}} onClick={handleJobStatusChange}>
        Pass it to friend
        </Button>

        
          </div>

          </div>
    
        </form>
  <div className='Content'>
        <Content isDarkMode={isDarkMode} jobStatus={jobStatus} onJobStatusChange={handleJobStatusChange} />
        </div>
     
        </div>
        </div>

    </>
 );

 }


export default GreetingPage;
