# Hackathon - One Day Project
## Test Locally
* Clone this repo
* Install dependecies
  * Client: ```cd client, npm i && npm start```
  * Server: ```cd server, npm i && npm start```
* Add your personal API key (*API list below this section*)
  * Navigate to the file ```.env.example``` in the  ```server``` folder
  * Copy the content inside this file and paste it in a new named ```.env```
  * Replace ```YOUR_KEY``` with your own personal key from that given API 

# Article 
- [Contents of App](#contents)
- [Tech Usage and Reasoning](#tech-usage-and-reasoning)
- [Challenges Faced](#challenges-faced)
- [Design](#design)
- [Full Description](#full-description)
- [Get in touch!](#contact)

# Contents
Hackday through the bootcamp at salt. I often come up with ideas and find new technologies or APIs I would like to experiment with and try out. In this project we only had a day to implement the application and therefor as a result I took my collected bag of ideas and experimented with them in this project, I wanted to:

# Tech Usage and Reasoning
**APIs**
- Weather API (OpenWeatherWeb API)
- Country API (RestCountries API)
- Esport API (PandaScore API)

# Challenges Faced
- Connect a React frontend with a Express backend
- React Routing and clear component structuring
- Experiment with the APIs and how I would use them in individual projects further

# Design 
Since part of the goal under this 24-hackday was to build a scalable product for myself which I could branch out in different paths and develop further in the future I wanted to keep it a simple MPA. The colors I chose was experimental, and I wanted to build something that had a UI one would remember, with bright and unusual colors - rather than keeping the more common simple/professional light colors theme. 

The usage of APIs may cause different and unexpected loading times, and to keep the user in consideration and to make sure to respond properly, I added a CSS-loader to indicate that the user request was recieved, and to show that is being processed. See photo below.

### Illustrations of Design
<p align="center">
 <img src="https://i.imgur.com/pseObF0.png" height="600px" />
 <img src="https://i.imgur.com/0GAJlXq.png" width="800px" />
</p>


# Full Description
Reasoning behind API choosing, what they do and my intention by including them. 

### Weather API
Display weather information about the city I am living in, filtered out the results down to what I actually need when checking the forecast.

### Country API 
Got used to what data you may recieve through this API and also more knowledge for how to incorporate these responses as a query for a new API request (e.g. Search for Norway, use capital Oslo as city for Weather API)

### E-sport API
A long project idea of mine where is to create a e-sport site which easily lets you customize what information you recieve as the user. During this project I am getting a match from a match in the video-game CS:GO where I wanted to show obvious information, aswell as cooler more interesting ones. 

# Contact
### Get in touch with me:
[<img align="left" style="margin-left: 10px;" alt="codeSTACKr | LinkedIn" width="40px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />][linkedin]
[<img align="left" style="margin-left: 10px;" alt="codeSTACKr.com" width="40px" src="https://raw.githubusercontent.com/iconic/open-iconic/master/svg/globe.svg" />][website]
<a href="mailto:bragecontact@gmail.com"><img width="40px" className="homepage__contact" alt="gmail" src="https://i.imgur.com/mo4E0Fb.png"/></a>


 [linkedin]: https://www.linkedin.com/in/brage-rosberg/
 [website]: https://www.bragerosberg.com
