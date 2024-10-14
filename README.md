# Note App

## Description

A simple and intuitive note-taking web application that allows users to create, edit, delete, and organize their notes. The app also includes user authentication for secure access.

## Feature

* User Authentication: Users can register, log in, and log out to securely access their notes with JWT token.
* Create Notes: Authenticated users can add new notes with a title and description.
* Edit Notes: Update existing notes with new content.
* Delete Notes: Remove unwanted notes.
* Search: Quickly find notes by searching through titles and content  using Pipe filter.
* Organize Notes: Categorize notes for better organization.
* Alert Message: Toastr with ngx-toastr.
* Responsive Design: Fully responsive layout that works on mobile, tablet, and desktop devices.
* Autosave: Automatically saves notes as you type (optional feature).
* Persistent Storage: Notes are stored on the server or via API and tied to the authenticated user.

## Technologies Used
* Frontend Framework: Angular 17
* Authentication: JWT (JSON Web Tokens) for secure user authentication
* CSS Framework: Bootstrap ( styling library)
* Toastr Notifications: For showing success, error, and info messages.
* Style Lan : Scss(sass)

## Backend Api

Documentation for the backend API can be found [here](https://documenter.getpostman.com/view/24475784/2s9YJW5RJj)
## NoteApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
