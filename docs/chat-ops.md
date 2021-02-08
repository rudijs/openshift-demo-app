## Chat Ops Setup - MS Teams

How to create a "Chat Ops" channel in MS Teams and configure github.com to send messages to it.

Conversations, put to work. ChatOps is a collaboration model that connects people, tools, process, and automation into a transparent workflow.

This flow connects the work needed, the work happening, and the work done in a persistent location staffed by the people, bots, and related tools.

- Add a new Channel in your Team
  ![x](img/chatops/11.png)
- Use a descriptive name and useful description
  ![x](img/chatops/12.png)
- Open up the channel settings and add a new Connector
  ![x](img/chatops/13.png)
- Search for "git" and click "Configure"
  ![x](img/chatops/14.png)
- Provide a descriptive name and click "Create"
  ![x](img/chatops/15.png)
- Scroll down and read the github setup instructions
  ![x](img/chatops/16.png)
- Click "Done" to complete the MS Teams setup
  ![x](img/chatops/17.png)
- In your github repo go to the Webhook settings and paste in your webhook URL and set the Content type.
  ![x](img/chatops/18.png)
- Choose "Send me everything" and click "Add webhook"
  ![x](img/chatops/21.png)
- You can return to the MS Teams Channel Github connector settings any time you need
  ![x](img/chatops/19.png)
  ![x](img/chatops/20.png)
- There should be a new message in the MS Teams channel confirming github is connected
  ![x](img/chatops/22.png)
- Set a "Custom" channel notification level
  ![x](img/chatops/23.png)
- Select "Banner and Feed" for All New posts and check the "Include all replies" option, then click "Save"
  ![x](img/chatops/24.png)
- Messages from github like this commit will now be received.
  ![x](img/chatops/25.png)
