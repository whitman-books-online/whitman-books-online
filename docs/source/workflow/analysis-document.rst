*Converted to Markdown by Tyler Phillips*

Due Date: Wednesday, 2/21/2018

## Risk Factors

### Time

Because this is an academic course, we are constrained to one semester to develop this application.  However, by taking the following into account, we believe we can complete the project within that time frame: 
1. **Scope of the project:**  We chose this project based on a preliminary estimate that the scope of this project matches the time frame we have available.  
2. **Time management:**  We have developed a timetable with the steps we need to complete in order to finish this project by the end of the semester.  We have also devised a system for managing smaller tasks using the tickets function of GitLab.  
3. **Ample work time:**  Our weekly lab provides us with a large block of time to work on the project as a group, and each team will also meet outside of class twice a week.

### Technical Feasibility

One technical factor we are concerned about is the system uptime and performance (including network performance) of our application.  Since this is meant to be a public-facing application, we need to achieve a certain level of performance for the application to be usable.  We are currently researching and testing hosted and self-hosted options for mitigating this concern. Another potential concern is the interface between the front and back ends.  We plan to mitigate this by using a Flask HTTP REST API and by thoroughly documenting this API so that both front- and back-end teams are clear on how the interface is supposed to work.  

### Personnel Expertise

We are all students, not expert programmers.  Our team includes a range of experience levels with the various technologies and techniques we will be using, and no one team member is experienced with all of them.  However, those with experience with a particular technology will teach others how to use it, and everyone will learn things as they go.  Collectively, we believe our team has the expertise to complete this project.

### College Administration

There has been some concern that the Whitman Bookstore would object to our project because it could take business away from them.  Our “Ethical Concerns” document analyzes the ethical concerns of that.  From a risk-management perspective, we have concluded that the College would have no authority to shut down our project.  Therefore, we are not concerned about this risk factor.  

## Resources


### Front-End

#### Languages, Libraries, Frameworks, Tools

- JavaScript
- HTML/CSS
- React
- Bootstrap
- Google’s Material-UI
- GitLab

#### Reasoning

The front-end software will be written in JavaScript, CSS, and HTML.  Our UI will be based on React, which is a JavaScript library for web UIs.  We may use some pre-made React components from Bootstrap and/or Material UI.  

All of these resources were chosen because they are industry standards and because many modules have been developed for them which we can draw from.  The JavaScript/CSS/HTML combination is the clear industry standard for coding webapps.  React is a widely-used library for developing front-ends, as evidenced by the fact that Facebook, Instagram, Snapchat, Discord, and many other prominent apps use React for their front-end. .  We determined that React would be relatively easy to learn and would enable us to do everything we want to do.  Finally, Bootstrap and Material UI are both UI libraries  that utilize React.  They are both widely used, and the decision between the two would be a purely stylistic decision.  We may use one or the other, or we may use some components from each.  

### Back-End

#### Languages, Libraries, Frameworks, Tools

- Python
- Flask
- MySQL
- SQLAlchemy
- Gitlab

#### Reasoning

The backend software will be a daemon written in Python, exposing an API to the frontend using a Flask HTTP REST API. This daemon will communicate with a MySQL database through SQLAlchemy, a Python module that will allow us to represent relational structures as objects to better fit Python’s programming paradigm. As for operations of the server, we will likely be leveraging AWS for hosting, although we have not finalized that decision.  

The benefits of Python are its simplicity and our team’s pre-existing experience with it. While it is a less-performant language than some others, its use in backend webapps (Flask, Django) indicates that this is not too significant a cost.  Flask was also chosen because of its simplicity and because it has excellent documentation.  

We chose MySQL as our database over SQLite for performance, at the cost of more complex deployment (which is something we determined our team will be able to handle).  To ease the process of learning how to work with relational databases, we decided to leverage the SQLAlchemy mapper to make our code more or less RDBMS-agnostic and represent our back-end constructs as traditional objects and let SQLAlchemy deal with the lower-level work of how to represent them relationally.

### Documentation

#### Languages, Libraries, Frameworks, Tools

- Markdown 
- Gitlab Wiki
- Google Software Suite
- Draw.io
- Sphinx
- GitLab

#### Reasoning

**Meeting Notes:** All full-team and sub-team meetings are recorded and hosted through the GitLab project’s wiki. The text itself is written in standard Markdown and is divided up between different folders for each team. On the homepage in the root directory, there’s a table of contents with links to each day’s meeting notes for easy navigation. To make this wiki printable so that we can include it in our documentation binder, a Python script is being written that will automatically concatenate all the pages of the wiki into a single Markdown file that is then converted to a PDF using Pandoc.

**Code:** We will be using Sphinx to help document our code.  Sphinx is a tool that formats documentation and automates some of the documentation process by reading comments and docstrings in the source code.  We chose Sphinx because we like the professional format of the documentation it produces and because it works with all of the languages we will be using on this project.  

## Project logistics

### Projections

#### Cost

Almost all of the resources we are using for this project are either available for free online or provided by the College.  Because this is an academic exercise, there will be no labor costs.  The only thing we anticipate paying for is a domain name for our website.  

#### Timeline

Currently, we estimate roughly six weeks (not including spring break) to push our MVP. We plan to delegate smaller, easier tasks over the two weeks we lose to spring break, such as fleshing out comments. We are currently aiming for our completed project to be done by May 1st. Giving us ample amount of time to add any additional features, debug, and do some post-delivery maintenance.

### Team Organization

#### Organization Chart

![org_chart](/uploads/28430173754b50c655e20599316b5938/org_chart.png)

Note: Since this Org Chart’s Creation *Jeremy Davis* has been appointed Documentation Leader

#### Communication

Our team will communicate with each other using Slack, which is an online messaging service.  We chose Slack because it allows each team member a large amount of choice in what things they want to be notified about and because it allows us to easily create separate conversations for each sub-team and for the team as a whole.

#### Meeting Space

Our team will meet in Olin 228 and Olin 124.  Both of these rooms provide computers preloaded with a wide range of programming resources, printers, whiteboards, and enough space to easily accommodate our entire team.  
Meeting Times

#### Meeting Times

##### Full-Team Meeting Schedule: 

Tuesdays from 8:30 AM - 11:20 AM

![meeting_structure](/uploads/b12fba30c7490543eab3aeb9b2d62e97/meeting_structure.png)

##### Sub-Team Meeting Schedule: 

| **Team** | **Meeting Slot 1 (Day)** | **Meeting Slot 1 (Time)** | **Meeting Slot 2 (Day)** | **Meeting Slot 2 (Time)** |
| -- | -- | -- | -- | -- |
| Front-End | Wednesdays | 7 PM | Sundays | 2 PM |
| Back-End | Mondays | 7 PM | Thursdays | 4 PM |
| Documentation | Thursdays | 4 PM | Sundays | 5 PM

#### Time Management

We are using a combination of the “issues” functionality of GitLab and a spreadsheet on Google Docs to keep track of tasks assigned to specific team members as well as to keep a long-term schedule.  

#### Source-Code Management and Version Control

We are using Git for version control and storing our source code as well as our documentation on GitLab.  

### Schedule

#### Minimum-Viable-Product

#### Preliminary Design Graphics

#### UI Drawings

![ui_drawings](/uploads/7113af59d2b8a3d3e7436d7900d087d4/ui_drawings.jpg)

#### Back-End Model

![back-end_model](/uploads/fda583a2ee0b0a2cc0689a364915622b/back-end_model.png)

#### Post-Delivery Maintenance

We plan on allowing the final project to be used for as long as it is realistically usable and do minimal post-delivery maintenance on it. We as students will likely not have the time needed to work much on the project after this class is completed, so we will simply test our final product as much as possible before release.

## PROJECT VALUE

We believe the benefits will largely be in terms of experience and benefit to the student body. We are gaining valuable experience in collaboration with each other and learning new software tools. Working in groups is today the only way to develop large software projects, and this class is allowing us to model that process. The community will benefit from having a webapp to use rather than the “forsale” email listserv. The webapp will be more organized and have more features such as searchable listings than a listserv, so the community as a whole will likely save some time when shopping for and selling books and have a more pleasant experience doing so.