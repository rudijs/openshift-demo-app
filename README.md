## Overview

This repository is an on-going, evolving project to introduce Containers and to demonstrate a productive workflow.

The higher goals though are not about Containers.

It's more about a culture change and a change in how you share information with other developers and other parts of your organization.

For the practical hands on sections you will deploy a NodeJS Web Application (html/css) and PostgreSQL database.

The development workflow will progress through **five stages (environments)** - all are pre-prodution stages:

1. Local Native (source code running locally)
2. Local Docker (source code containerized with Docker)
3. Local Docker Compose (multiple containers)
4. Local Minishift
   - Minishift OpenShift - Docker Strategy (build and deploy into a container orchestration platform - OpenShift)
   - Minishift OpenShift - Source 2 Image (build and deploy into a container orchestration platform - OpenShift)
5. OpenShift online (dev env) Both Build Strategy's

<!--
TODO: Loadbalancing - Docker build strategy w/ Config Map include create local self signed cert.
-->

## What You Will Learn

- Develop a web app that progresses through local dev to a pre-production environments
- Work with local environments rapidly with short feedback loops
- Use Test Driven Development in your Local environment development.
- How to run application dependencies in local containers, for example an SQL database
- Use tools like docker-compose to speed and easily share resources and configurations with your team

The web app will be a simple [Node](https://nodejs.org/en/about/) web app using Express.

The web app is 'containerized' using [Docker](https://www.docker.com/resources/what-container).

We'll develop a multi container local development environment using [Docker Compose](https://docs.docker.com/compose/)

The local pre-prod deployment platform target is OpenShift. Click here for what is [OpenShift](https://www.openshift.com/).

- Deploy an application to OpenShift
- You will learn how to properly manage application secrets - like database credentials and API Keys
- You will also learn correct application tagging for deployment management
- Manage application source code with Git and proper use of [Git commit messages](https://www.conventionalcommits.org/en/v1.0.0/)
- Use ["Chat Ops" with MS Teams](docs/chat-ops.md) for this github project
- Update an application
- Scale an application
- Troubleshooting and fixing application issues

## Technology Stack

Along side Node and Docker, we will run an OpenShift cluster locally using MiniShift.

- OpenShift is Red Hat’s Platform as a service
- Based on Docker container and kubernetes container cluster manager
- Platform to build, deploy, host, scale your application
- Self service, multi-language, container based, automated

What is MiniShift?

- Minishift is a tool that helps you run OpenShift locally by launching a single-node OKD cluster inside a virtual machine.
- With Minishift you can try out OKD or develop with it, day-to-day, on your local machine.

- [OpenShift](https://www.openshift.com/)
- [MiniShift](https://www.okd.io/minishift/)
- [OKD](https://www.okd.io/)

## Prerequisites Installation

- Node JS
  1. We recommend using [Node Version Manager](https://github.com/nvm-sh/nvm)
- Docker
  1. [Mac OSX](docs/osx-docker.md)
- MiniShift
  1. [Mac OSX](docs/osx-openshift.md)
  2. Microsoft - TODO

## Usage

**Step 1**

First we'll develop the web app locally on our workstation.

We want this so that each developer in the team can have their own workspace which enables rapid developement iteration.

Follow these [instructions here](src/web-app/README.md)

**Step 2**

The second stage of the work shop will be to run your application in a local Container Orchestration Platform - OpenShift.

We'll be using Minishift and following [these steps](devops/README.md) for this.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
