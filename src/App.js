import React from 'react';
import './App.css';
import nav from './images/hamburger-nav.svg';
import icon from './images/user-icon.svg';
import assignmentsHuman from './images/assignments-human.svg';
import company from './images/companies-logo.svg';
import placementComplete from './images/placement-complete.svg';

function App() {
  return (
    <div className="app">
      <div className='home'>
        <section className='home__container'>

          <div className='home__navbar'>
            <button className='home__navIcon'>
              <img src={nav} alt='hamburger' />
            </button>
            <img src={icon} alt='user-icon' />
          </div>

          <div className='home__assignments'>
            <div>
              <p>Hello, Marco Alves</p>
              <h3>You’re Subscribed to Premium Account</h3>
              <button>Manage Assignments</button>
            </div>
            <img src={assignmentsHuman} alt='human' />
          </div>

          <div className='home__Cards'>
            <div className='home__companies'>
              <h2>Companies</h2>
              <p>8,944</p>
              <img src={company} alt='logos' />
            </div>
            
            <div className='home__jobs'>
              <h2>Jobs For you</h2>
            </div>

            <div className='home__referals'>
              <h2>Employee Referals</h2>
            </div>
            
            <div className='home__interviews'>
              <h2>Upcoming Interviews</h2>
            </div>
          </div>

          <div className='home__placements'>
            <h3>Capmus Placements 2020-21</h3>
            <p>Invite your college for the placement session 2020-21 and explore your dream opportunities</p>
            <img src={placementComplete} alt='placements' />
            <button>Invite</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
