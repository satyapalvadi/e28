
## P3 Peer Review

+ Reviewer's name: Satya Palvadi
+ Reviwee's name: rokmesojedec
+ URL to reviewee's Github repo: https://github.com/rokmesojedec/e28

*Answer the following questions in regards to the student's project you are reviewing. Include context and code examples in your answers when relevant.*


### Are you able to produce any errors or unexpected results?
+ Refreshing the app doesn't work when the URL is at '/tips' or '/settings' "pages".

### Were there any parts of the interface that you found confusing or unclear?
+ When I first looked at the App, it was little confusing regarding the purpose of the App. Once I read the "About" section in the "Tips" 
sidebar, the purpose of the App is clear. May be, consider adding the "About" section in a more prominent way in the App? 
Really liked the idea.

+ Once we load the demo, there is no real easy way to start a graph from scratch as there is no way to delete levels or nodes.

+ Options in the navbar are not immediately clear. Some of options refresh the sidebar and some perform an action in the main UI. Consider splitting them into multiple categories of navigational elements.

+ URL doesn't change for the "Load Demo" page.

+ Seems like user created graphs are not persisted in the localStorage. When I created a graph and then loaded the demo, I lost my graph. Nothing is stored in the localStorage to retrieve the user created a graph. The way the App is created, there is no way to "reach" my graph. A warning should have been provided when the user is about lose the data.


### Are there aspects of the code that you feel were not self-evident and would benefit from comments?
+ Yes, I felt the code needs some comments as the App is a bit complicated.

### Are there any parts of the code that you found interesting or taught you something new?
+ Using material design for Vue

### Are there any best practices discussed in course material that you feel were not addressed in the code?
+ Didn't find any deviations from the course material

### Do you have any additional comments not covered in the above questions?
+ For P4, please consider adding delete options for levels and nodes. 
+ Refreshing should not produce an error
