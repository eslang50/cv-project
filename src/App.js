import './App.css';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <div>
      <div className='cv-container'>
        <GeneralInfo  />
        <Education />
        <WorkExperience />
      </div>
      
    </div>
  );
}

export default App;
