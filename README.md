# React App Invictus Assignment

<p>A word count Analyser<p>
<h3>Firebase Hosted link</h3>
<a href="https://invictus-assignment.web.app/"><h4>https://invictus-assignment.web.app/</h4></a>

#Components
<h1>App.js</h1>
It is a functionaly component.<br>
First we stat with App.js here I added routing using "react-router-dom".<br>
<img width='100px' src='./images/struct.jpg'><br>
App.js also import Navbar.js component from componet/nav folder and set<br> on top of all components to visible in all pages.
<br>
It has 2 routs<br>
/ and /about 2 routs are added to this simple app.<br>
<h1>Home.js</h1>
it is a class component.<br>
/ will render Home.js component. I has the input form that allows used to enter input value of N and submit.<br>
<img hight='300px' width='500px' src='./images/home.jpg'><br>
in Home component on submit of the form it will pass data to the <h3>getwords()</h3>  function this fetch the data asynchronously using <strong>fetch().then()</strong>  methods<br>
once the data is fetched it will set the state data value and then call <h3>GetTopWords()</h3> funciton.
This funciton will update the state dictionary with top N frequency words.
<h1>Test Cases 1: </h1>
<p>Input: 2</p> output below image<br>
<img hight='300px' width='500px' src='./images/case2.jpg'><br>
<h1>Test Cases 2: </h1>
<p>Input: 2</p> output below image<br>
<img hight='300px' width='500px' src='./images/case5.jpg'><br>
<h1>Test Cases 3: </h1>
<p>Input: 12</p> output below image<br>
<img hight='300px' width='500px' src='./images/case12.jpg'><br>

<img hight='300px' width='500px' src='./images/case12a.jpg'><br>
as the sate gets update React will automatically update the state every where which results in call of <br>
<h1>Table.js</h1>
it is a class component.<br>
Table component it will create table using the data pased as props.
<br><br>
In Table this will receive the top N frequency words object in the form of props and crate a Table and display it to users.

<img hight='300px' width='500px' src='./images/aboutme.jpg'><br>
<h1>Navbar.js</h1>
it is a functional component.<br>
It returns a nav bar that is build using bootstrap 4.
<h1>About.js</h1>
it is a class component.<br>
About.js component is all about me any my skills. Please check my skills match this role really well.<br>

<img hight='300px' width='500px' src='./images/myskills.jpg'><br>
Please give me a opportunity I am interested in both web and Android Deveopment.<br>
I am best in desigining websites and good in React.js ,Javascript ,CSS. I  also know PHP and many other technologies like redux ,using of firebase firestore.<br>
I am quick learner and hard worker. 
<br>In the past 3 years I learned so many skills I am interested in making websites and Android Applications.

<h4>-Thank you</h4>


