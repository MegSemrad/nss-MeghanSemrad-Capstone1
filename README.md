<img src="./src/images/logo2.png" width="30%"> </img>

---
## About 
***Health In One*** is an app which allows users to store in one place all of their relevant health data. Visiting your health care providers often entails filling out paperwork and answer questions that require medical information one may find difficult to remember entirely. This app, therefore, was designed to help minimize the risk of a patient walking into a health appointment unprepared. Additionally, this app may be used to keep track of a user previous appointments. 



## Features
* Basic user details such as emergency contact details, allergy and condition alerts, and preferred pharmacy information
* Place to keep track of past appointments, when they occured with personal notes, and a section to jot down questions for future appointments
* Record of family medical history
* List of current medications and supplements along with dosages for each



## Table of Contents
  * [About] (#about)
  * [Features] (#features)
  * [Technologies Used] (#technologies-used)
  * [Setup] (#setup)
  * [Appendix 1: Planning Documentation] (#appendix-1-planning-documentation)
    * [ERD] (#erd)
    * [Wireframes] (#wireframes)



## Technologies Used
  ### Development Languages and Libraries
  <img src="./src/images/css.png" width="10%"></img>   <img src="./src/images/react.png" width="20%"></img> 
  <img src="./src/images/reactBootstrap.png" width="15%"></img>   <img src="./src/images/json.png" width="15%"></img>

  ### Development Tools
  <img src="./src/images/github.png" width="10%"></img>   <img src="./src/images/vscode.jpeg" width="10%"></img>
  <img src="./src/images/dbdiagram.png" width="10%" heigh="10%"></img>   <img src="./src/images/sketchboard.jpeg" width="10%"></img> 



## Setup
  To run Health In One locally, follow the directions below. 

  1. Clone the repository by running the following command in your terminal.
  ```sh
    git clone git@github.com:MegSemrad/nss-MeghanSemrad-Capstone1.git
  ```
  2. `cd` into the directory it creates

  3. Install the NPM dependencies for this project using the following commands
  ```sh
    npm install
  ```

  4. From your terminal window, type
  ```sh
    npm start
  ```

  5. Open another terminal window and navigate to the api folder within src. Run the followng command
  ```sh
    json-server -p 8090 -w database.json
  ```
 _____________________________________
&copy; 2021   | Web app designed by Meghan Semrad
