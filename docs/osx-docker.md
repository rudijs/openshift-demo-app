## Install Docker OSX

- Use/install [Homebrew](https://brew.sh/)
- `brew install --cask docker`

```
❯ brew install --cask docker
Updating Homebrew...
==> Downloading https://desktop.docker.com/mac/stable/51017/Docker.dmg
######################################################################## 100.0%
==> Installing Cask docker
==> Moving App 'Docker.app' to '/Applications/Docker.app'.
🍺  docker was successfully installed!
```

Open the Docker UI app and follow the permission prompts

If you see this type of error on the command line: `zsh compinit: insecure directories and files on macos`

This should [help](https://stackoverflow.com/questions/13762280/zsh-compinit-insecure-directories):

```
sudo chown -R root:root /usr/local/share/zsh/site-functions
sudo chmod -R 755 /usr/local/share/zsh
sudo chown -R root:staff /usr/local/share/zsh
```
