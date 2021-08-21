
import './Courses.css';
import Bar from './Bar';
import Bar2 from './Bar2'
import Header from './Header'
import Reminder from './Reminder';
import Tutorials from './Tutorials';
import Whatever from './Whatever'

function Courses() {
  return (
    <div className="courses">
      <Header/>
      <Bar/>
      <Reminder/>
    </div>
  );
}

export default Courses;
