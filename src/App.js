import logo from './logo.svg';
import './App.css';
import { pythonTopicList } from './data';
import {useState} from 'react';
// import { db } from './firebase.js';
// import {collection, addDoc, updateDoc, onSnapshot} from 'firebase'

function MarkDone({topic,tindex}){

  var [isDone, setDone] = useState(false);

  var handleChange = (e) =>{
    console.log('handleChange');
    setDone(e.target.checked);

    // db.collection("ikb-python-topics-list").add({
    //   title: topic.title,
    //   link: topic.link,
    //   isDone: isDone
    // });
  };
  return (
    <div className="topic">
      <input type="checkbox" checked={isDone} 
        onChange = {handleChange} />

      <a href={topic.link}>{
        topic.title
      }
      </a>
    </div>
  );
}

function markTestDone() {
  console.log("inside markTestDone");
  debugger;
  db.collection("ikb-python-topics-list").add({
    title: 'print hello world',
    link: 'https://www.w3schools.com/python/trypython.asp?filename=demo_default',
    isDone: true
  });
}

function App() {
  console.log("python topic list:", pythonTopicList)
  console.log("db:", db);
  
  return (
    <div className="App">
      <h1>Python Topic List</h1>
      <button onClick={markTestDone}>mark done</button> 
      {
          pythonTopicList.map((section, sindex) =>{

            return (
                <div key={sindex} className="section">
                    <h2>{section.section}</h2>
                    {
                        section.topicList.map((topic,tindex) =>{
                            return (
                              // <div key={tindex} className="topic">
                              //   <a href={topic.link}>{
                              //     topic.title
                              //   }
                              //   </a>
                              // </div>

                              <MarkDone key={tindex} topic={topic} />
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
