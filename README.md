![image](https://user-images.githubusercontent.com/67481206/139609490-bbdf3cfc-5fcb-4df4-a2f9-9a6910037e53.png)
## Capstone Project
### Brief explanation of what the app is and does
* Meowp is a crowd-sourced local business review site. The site has pages devoted to individual locations, such as restaurants, hotels, and other categories of businesses, where meowp users can submit a review of their products or services, using a one to five star rating scale. Businesses can also update business information and other basic listing information.

### Link to live site
* https://meowp.herokuapp.com/businesses

### Link to wiki docs
* https://github.com/sherry-debug715/Capstone-Meowp/wiki

### Discussion of technologies used
#### Back End
*The app was built using Flask, SQLAlchemy, and Python on the back end with a PostgreSQL database. The backend structure is RESTful API. Model associations are used to minimize database queries to the backend, assuring speed and reliability.

#### Front End
*The front end is built with React and Javascript while utilizing Redux architecture, producing a lightning-fast user interface and calling upon dynamically rendered components.

### Discussion of two features that show off technical abilities
* A well designed database schema allowed me easy access to information of categories and reviews tables from business model, minimized front end queries to the backend.
![image](https://user-images.githubusercontent.com/67481206/139609993-ae529757-6e50-4573-97bd-e1cfba597d73.png)
* Built 2 different types of Carousel using 2 different technologies (plain JavaScript and React bootstrap)
#### React bootstrap
![image](https://user-images.githubusercontent.com/67481206/139610848-7ff11315-e129-4643-8d84-77a4d5604f03.png)
#### Plain JavaScript
![image](https://user-images.githubusercontent.com/67481206/139610900-95da292d-dd07-4aba-b524-fb6c75147303.png)
![image](https://user-images.githubusercontent.com/67481206/139610923-79268292-a44c-45bd-b96f-4ec55e9aa147.png)

* All displaying businesses and reviews are built with re-usable Card components.   
![image](https://user-images.githubusercontent.com/67481206/139610965-110269a1-df38-427e-b770-1f3256eb8518.png)

### Discussion of challenge faced and solution
* Challenge: I struggled with updating contents in the browser without having to re-render the browser. I solved the problem by taking advantages of the light-weight and instant speed of React store, utilizing dispatch to return updated information from backend database.
![image](https://user-images.githubusercontent.com/67481206/139611422-19eaa1a8-443a-4014-b516-14fe8f18501d.png)
