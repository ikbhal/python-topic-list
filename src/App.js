import logo from './logo.svg';
import './App.css';
import { pythonTopicList } from './data';

function App() {
  console.log("python topic list:", pythonTopicList)
  return (
    <div className="App">
      <h1>Python Topic List</h1>
      {
          pythonTopicList.map((section, sindex) =>{

            return (
                <div key={sindex} className="section">
                    <h2>{section.section}</h2>
                    {
                        section.topicList.map((topic,tindex) =>{
                            return (
                              <div key={tindex} className="topic">
                                <a href={topic.link}>{
                                  topic.title
                                }
                                </a>
                              </div>
                            );
                        })
                    }
                </div>
            )
          })
      }

    </div>
  );
}

export default App;
