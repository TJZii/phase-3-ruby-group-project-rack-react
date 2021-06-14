# Personal Game Library Tracker

This app here is designed to allow one to keep track of various games that they own, as well as to easily look up any news about those games that they own.

I know we were supposed to create 2 seperate repositories, but I thought it would be easier to manage and to submit if they were 2 seperate folders in the same repository.  



## How to Set-Up

1. Download or fork the Repository to your own device.
2. Once you have done that, please navigate to the backend folder in one of your terminals and run `bundle install`
3. Next, you should run the command `shotgun --port=9292`, launching the server on your local host.
4. After that, in another terminal, navigate to the frontend folder and run `npm install`.
5. Once that completes you can run npm start to view the site itself.

## How to Use

The Home page is simply a landing zone that does not have much at this point in time, though there is a link to the Categories page where you can see a list of various
categories of games.

Selecting one of these categories by clicking on the title or image will bring you to that Genre's respective page with it's own list of games, or, if you want to create your own category, there is a button at the bottom of the page where you can upload an image and title of your choosing.

Within each category there is a list of games that have been put in there so far (Plans to soon have them auto sort alphabetically and implement a search function), and each game's name will link you to a google search of that game, so you can look up information, art, or news all the faster.


Thank you for checking out my project!
