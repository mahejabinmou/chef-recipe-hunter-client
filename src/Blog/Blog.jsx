import React from 'react';
import Pdf from "react-to-pdf";
import ReactDOM from "react-dom";


const ref = React.createRef();
const Blog = () => {
    // const ref = React.createRef();
    
    return (
        <div className='text-center app' ref={ref}>
            <h2 className='text-center text-4xl'>Question and answer</h2>
            <div>
            <h4 className='text-center text-2xl'>Differences between uncontrolled and controlled components.</h4>
             <p>Uncontrolled components are those that manage their own state internally, without relying on any external state management or data binding frameworks. In other words, their state is not controlled by a parent component or any other external entity.
             Some examples of uncontrolled components include native HTML form elements such as input, select, and textarea. In an uncontrolled component, the user can interact with the component directly and its state will be updated automatically by the browser.
             On the other hand, controlled components are those whose state is managed by a parent or an external entity. In other words, they rely on an external source of truth to determine their state and behavior.
             A controlled component receives its state and behavior via props, and it notifies the parent component of any changes via callbacks. This allows the parent component to manage and manipulate the state of the controlled component as needed.</p>
        </div>
        <br />

            <div>
             <h2 className='text-center text-2xl'>How to validate React props using PropTypes</h2>
             <p>1.npm install prop-types.2.yarn add prop-types 3.import PropTypes from 'prop-types'</p>
            </div>
            <br />
            <div>
                <h2 className='text-center text-2xl'>Difference between nodejs and express js.</h2>
                <p>Node.js is a runtime environment that allows you to run JavaScript code on the server-side. It uses the V8 JavaScript engine to execute code outside of a web browser. Node.js provides a vast set of built-in modules and APIs for handling various tasks, such as file system operations, networking, and child processes. It enables you to build server-side applications, command-line tools, and other types of applications using JavaScript.</p>
                 <p>Express.js, on the other hand, is a web application framework that is built on top of Node.js. It provides a set of robust features and tools for building web applications and APIs quickly and easily. Express.js simplifies the process of building web applications by providing a set of pre-built middleware functions that can be easily integrated into your application. These middleware functions handle common tasks such as parsing request bodies, handling cookies and sessions, and serving static files.</p>
            </div>
            <br />

            <div>
                <h2>What is a custom hook, and why will you create a custom hook?</h2>
                <p>A custom hook is a reusable function in React that allows you to extract logic from a component and share it across multiple components.
                Custom hooks enable you to abstract away implementation details and provide a simplified interface to other components. This can make your code easier to understand and maintain.
                </p>
            </div>

            {/* <button className='text-2xl bg-indigo-400 rounded'>Download</button> */}
            
    <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf} className='text-2xl bg-indigo-400 rounded m-8'>Download</button>}
      </Pdf>
       
        
       </div>
    );
};



export default Blog;