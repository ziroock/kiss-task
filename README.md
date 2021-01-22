# Kissmatrics Take Home Task
## How to run the project
### For the first time
1. Clone the project folder from  the following repository: https://github.com/ziroock/kiss-task.git
2. Make sure Node, NPM, Yarn and Posgresql are installed
3. Run **bundle install** to Install the dependencies specified in the Gemfile
4. Run  **yarn install --check-files** to check and install missing dependencies
5. If the database is not running start it by using **sudo service postgresql start**
6. Create database **rails db:create**
7. Update database version **rails db:migrate**
8. Load database **rails db:seed**
9. Start the server **rails s**
10. In your browser type down: http://localhost:3000/
11. To sort columns click on the header text
12. To stop the server use **CTRL^C**

### Once everything is set up
1. If the database is not running start it by using **sudo service postgresql start**
2. Start the server **rails s**
3. In your browser type down: http://localhost:3000/
4. To sort columns click on the column header text
5. To stop the server use **CTRL^C**

## Versions used to implement the project
- Node v12.16.3
- NPM v6.14.4
- Yarn 1.22.4
- Postgresql v10

## Future Changes
- I would like to add the option of descending sort, so on each click it alternates between ascending and descending 
sort. To complete that I would make a flag that changes based on the current state and have a second sort function for 
the descending sort.
- I would like to add an image that shows the direction of the sort and changes based on its direction as well. I would 
change the image based on the flag.
- I would like to add buttons that allow the user to edit, add and delete entries from the table. I would connect the 
buttons to the appropriate routes and monitor the states of the buttons.
- I would like to plan and design a better interface for the table
- I would like to have a better sort for the Address, where I would sort based on Street Name, and a secondary sort 
based on street number

## Decisions/Tradeoffs
- I decided to use **postgresql** over **mysql** because when I did my initial research I found out that it has better 
support in Rails. Also, I am new to both Ruby and React, so I decided to use the database that is more popular, so there
is more information out there on possible problems I run into.
- I first set up the server, then I connected react and focused on getting the dynamic table. Once I was done with it
I focused on sorting.
- At first, I implemented only the bare minimum inside people_controller (only index and show). Then once I was done with 
the main functionality I decided to add the rest of the CRUD functions, so it would be easier to make future changes.
- I tested the CRUD functions inside people_controller using Postman.
- Initially I was worried, that duplicate birthdays might be a problem, so I had the routs for show, update and delete
to find_by(id). However, when I was testing the CRUD functions I decided it would be easier to use birthday as the
parameter to find and realized that duplicates would not be a problem because I would get both.
- I decided to wrap the code inside App.js that extracts the appropriate data with try and catch statement, because 
the data loads
slower that the and for some reason the react component gets loaded twice (I couldn't figure out why).
- I decided to wrap the entire code inside Table.js for the same reason as in App.js.
- I decided to create the table to be dynamic, so it would load data with different number of columns and rows. Which 
makes it reusable.
- Overall this is the first time I am working with Ruby on Rails and I am still new to React, that is why I cannot 
comment about a lot of tradeoffs. 

## Obstacle
- I ran into a huge problem with yarn after I updated my WSL to Ubuntu 20.04. It did not let me install it from the
 official repository. I tried to install it using different ways, but it did not work with the server set up. I could not find
  the problem and spent about 4h until I decided to revert to Ubuntu 18.04.


## Resources used
- https://www.digitalocean.com/community/tutorials/how-to-set-up-a-ruby-on-rails-project-with-a-react-frontend
- https://www.w3schools.com/TAgs/tag_table.asp
- https://www.youtube.com/watch?v=oyjzi837wME
- https://www.youtube.com/watch?v=F0xErjOtJAQ
- https://dev.to/jean182/rails-api-with-a-frontend-built-in-react-part-i-con
