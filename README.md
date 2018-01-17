# reactjs-parent-child-communication

Component communication

1. Pass dynamic value to child component using Props.
2. State, setState - Updated compoenent's state.
3. setState() - render() auto call.
     - Why not to updated state withouth setState()
     - why only props setter doe not works.  
4. State uplifting to parent - a reccommended practice.
5. Invoking events defined in parent component for state change. 
6. PropTypes and defaultProps - TwoWheeler Component
      - Typechecking using PropTypes (package npm prop-types) - e.g. in index.js - > change price from {0} to {"0"}.
      - DefaultProps : How default props values getting used if no value provided. e.g. remove props price from <TwoWheeler> usage.
7. Children, isRequired, default func etc.
8. Event handling      
9. Concept of Virtual DOM - Chrome's -> Render - paint



**Steps to follow**

:one: clone git repo with 
**git clone https://github.com/SachinKasar/reactjs-parent-child-communication.git**

:two: install npm packages with command
**npm install**

:three: start webpack server
**npm start**

:four: hit the url in browser **http://localhost:8080/**



