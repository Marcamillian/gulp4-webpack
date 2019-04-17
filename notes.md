
Babel loader working - react integrated into the babel presets

- issue is that the script can't find react/react-dom modules

2 solutions
- allow react from the node_modules folder
- copy the react files into react-site directory

----

- must use babel-loader
- Updated to use
    - @babel/preset-env
    - @babel/preset-react
- tutorial uses old syntax - config.module.loaders
  - webpack now uses config.module.rules
  - updated with the syntax from babel-loader docs https://www.npmjs.com/package/babel-loader
  

----

Using this tutorial to set up webpack for react - https://www.codementor.io/tamizhvendan/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr