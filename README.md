# CI/CD Pipeline

This repository contains a CI/CD pipeline implemented using GitHub Actions as part of Full Stack Open Part 11.

## Live Application

**Deployment URL:** https://ci-cd-new-5pgl.onrender.com

**Hosting platform:** Render

**Production branch:** `master`

## CI/CD Pipeline

The GitHub Actions workflow automatically performs the following steps:

1. Checks out the repository.
2. Sets up Node.js.
3. Installs dependencies using `npm install`.
4. Runs ESLint checks.
5. Runs automated tests using Jest.
6. Builds the application using Webpack.
7. Triggers deployment to Render on successful pushes to `master`.
8. Sends Discord notifications for successful deployment triggers or pipeline failures.
9. Creates a new version tag after successful pushes to `master`.

## Workflow Triggers

The pipeline runs on:

- Pushes to the `master` branch.
- Pull requests targeting `master`.
- Manual execution using GitHub Actions.

## Deployment

The application is deployed to Render using a deployment hook stored in GitHub Actions Secrets.

Deployment can be skipped by including `#skip` in a commit message.

## Discord Notifications

Discord notifications are integrated into the CI/CD pipeline.

### Success Notification

A notification is sent when the Render deployment hook is triggered successfully.

### Failure Notification

A notification is sent when the pipeline fails.

The failure notification was tested by temporarily changing the build command to `exit 1` in a separate branch.

The test confirmed that:

- The build failed as expected.
- The deployment step was skipped.
- The Discord failure notification was sent successfully.

The test pull request was closed without merging, and the temporary branch was deleted.

## Full Stack Open Exercises

- Exercise 11.13: Testing pull requests.
- Exercise 11.16: Testing `#skip` deployment functionality.
- Discord success and failure notifications.
- Automated deployment to Render.
- Automated version tagging.

## Periodic Health Check

A GitHub Actions workflow (`health-check.yml`) monitors the deployed Render application.

- **Schedule:** Every day at 06:00 UTC.
- **Manual execution:** Supported through GitHub Actions.
- **Health check:** Uses `curl` to verify the application's HTTP response.
- **Success:** HTTP 200 confirms the application is responding.
- **Failure detection:** Tested using an unreachable localhost address (`127.0.0.1:9999`).
- **Recovery:** Restored the production URL and confirmed that Periodic Health Check #5 passed with HTTP 200.

**Production URL:** https://ci-cd-new-5pgl.onrender.com
