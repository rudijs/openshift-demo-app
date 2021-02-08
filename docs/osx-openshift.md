## Installation (OSX)

- Use/install the package manager [brew](https://brew.sh/)
- Follow any prompts or install instructions to grant virtualbox permissions
- `brew install --cask virtualbox`
- `brew cask install minishift`
- `minishift start --vm-driver virtualbox`
- When it's all good you should see:
- The server is accessible via web console at: https://192.168.99.100:8443/console
- To stop the cluster:
- `minishift stop`
