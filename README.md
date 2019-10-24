# Forcura

This project was created to test some functionality of the two pages from the Forcura site (https://forcura.com).
The project is created based on the best practices for data driven structure and organized as follows: 
1. data - values for the input fields for the tests
2. expected - expected results for the tests
3. selectors - selectors for the tests
4. specs - the actual code for the tests

The tests for the Main page (https://forcura.com) are located in file specs/main-page.js. 
The tests to check functionality of filling in the job application form (https://forcura.bamboohr.com/jobs/view.php?id=55)
are in specs/careers-page.js. 

The tests are organized into 6 groups.

The Main page tests include the following groups: 
1. 'should check basic elements of the Main page such as title, h1, logo'
2. 'should check the functionality of the Main menu bar'
3. 'should check the functionality of footer-bottom'
4. 'should check the functionality of the Chat iframe - interaction with a user'

The careers page tests include the following groups:
5. 'should check the prerequisites how to navigate from the career page to application form page'
6. 'should application form for correct display and filling it in with test data'

Results of the tests would be displayed in an interactive report which will run automatically after all the tests are completed.

## Table of Contents
1. [Prerequisites to install the tests on your local machine](#prerequisites) 
2. [Modules installation and configuration](#modules)
3. [Configuring Allure reporter](#allure)
4. [Installation of `chai` module](#chai)
5. [How to run all tests from a command prompt - Windows or Mac](#run-command-prompt-and-npm-test)

===

<a name="prerequisites"></a>
## 1. Prerequisites
#### 1.1. Node.js:
Install the latest Node.js **Recommended For Most Users** from
https://nodejs.org/en/
#### 1.2. Install Git:
https://git-scm.com/
#### 1.3. Install Java SE Development Kit:
https://www.oracle.com/technetwork/java/javase/downloads/jdk12-downloads-5295953.html

===

### Additional MacOS prerequisites:
#### 1.4. Install Xcode:
https://developer.apple.com/xcode/

===

### Additional Windows prerequisites:
#### 1.5. Install Python 2.7.
https://www.python.org/downloads/release/python-2716/

===
<a name="modules"></a>
## 2. Modules installation and configuration
#### 2.1. Install webDriver I/O:
````
npm i webdriverio
````
#### 2.2. Install CLI:
````
npm i @wdio/cli
````
#### 2.3. Create WebDriver I/O configuration by running:
````
./node_modules/.bin/wdio config
````
This script runs WDIO Configuration Helper which will help you to create configuration file.
````
Where should your tests be launched
> local
**click Enter**
````
````
Shall I install the runner plugin for you?
> type Y
**click Enter**
````
````
Where is your automation backend located?
> On my local machine
**click Enter**
````
````
Which framework do you want to use?
> mocha
**click Enter**
````
````
Shall I install the framework adapter for you?
> type Y
**click Enter**
````
````
Do you want to run WebdriverIO commands synchronous or asynchronous?
> sync
**click Enter**
````
````
Where are your test specs located?
> type ./test/*.js
**click Enter**
````
````
Which reporter do you want to use?
> dot (select by pressing Space)
> spec (select by pressing Space)
> allure (select by pressing Space)
**click Enter**
````
````
Shall I install the reporter library for you?
> type Y
**click Enter**
````
````
Do you want to add a service to your test setup?
> selenium-standalone (select by pressing Space)
**click Enter**
````
````
Shall I install the services for you?
> type Y
**click Enter**
````
````
Level of logging verbosity
> silent
**click Enter**
````
````
What is the base url?
> type https://reactbugtracker.com
**click Enter**
````
Wait till the end of the installation process.

<a name="allure"></a>
## 3. Configuring Allure reporter:
#### 3.1. Configure reporter in `wdio.conf.js`:
Add the following code under `reporters: ['dot','spec','allure'],`:
````
    reporterOptions: {
        allure: {
            outputDir: 'allure-results'
        }
    },
````
#### 3.2. Install Allure Commandline globally:
````
npm i allure-commandline -g
````
<a name="chai"></a>
## 4. Adding `chai` assertion library:
#### 4.1. Install `chai` module:
````
npm i chai
````
<a name="run-command-prompt-and-npm-test"></a>
##5. Run command prompt and npm test
#### 5.1. Run Command Prompt 
#### 5.2. Run `npm test` from Command Prompt


