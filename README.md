# _Bustle Clone_

#### _A mock-up of the Bustle website, {3-30-2018}_

#### By _Ian Goodrich_

## Description

_A Bustle clone project that replicates the general look and functionality of www.bustle.com with:
* a standard burger box menu
* approximations(loose at best) of Bustle's styling and design.
* responsive page scaling.
* Some parsing of Firebase Lists and Objects that allows the top(newest) article in the database to be displayed prominently.
* a Home page of general news(currently full of database dummy articles but hey, they're fun to write so have a blast adding your own.)

* more to come including:
* user authentication
* a Series of pages dedicated to a particular subject(Fed by API calls that are currently set up but as of this version not yet implemented)
* links to social media
* lazy loading
* search functionality

* _This site is hosted by Firebase. To view it please visit it at_

https://bustle-clone-cc015.firebaseapp.com/


## Setup/Installation Requirements

* _Navigate to or create a parent directory for your copy of Bustle Clone._

* _Clone this GitHub repository_

```
git clone https://github.com/LeeMellon/Review13-AngularSite.git
```

* _type 'npm install' into the console_

* _type ng serve --open_

* _View program on web browser at port localhost:4020_

* _If you get an error that says the default port is busy type ng serve --open --port 8080_

* _Ports other than 8080 are also acceptable_

* _Follow the prompts._

* _You will also want to set up an api-keys.ts file in /src/app/api-keys.ts.

* _Here you should store all of you API keys and then import them using the "import { API_KEY, API_KEY2 } from '../api-keys'; " method that you will find already imported in the services/articles-api.services.ts folder. Currently Bustle-Clone is set to call two different news APIs (Webhose.io [API_KEY2] https://webhose.io/ and NewsApi https://newsapi.org [API_KEY]). Get your own keys from these organizations and save them like this:_

          export var API_KEY = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"

          export var API_KEY2 ="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXX"

* _Further you will want to get your own Firebase key by signing up at https://firebase.google.com/ Place your firebase key in the same file as your API keys so that it looks thusly:
                                export var masterFirebaseConfig = {
                                  apiKey: "xxxxxxx_xxxxxxxxx_x_xxxxxxxxxxxx",
                                    authDomain: "words-morewords-stuff.firebaseapp.com",
                                    databaseURL: "https://bustle-clone-cc015.firebaseio.com",
                                    projectId: "xxxxxxx-xxxx-xxxx",
                                    storageBucket: "",
                                    messagingSenderId: "xxxxxxxxxxxx"
                                  };
    Again as long as you set the keys up this way, you should be fine. If you would like to rebuild a copy of the test database, when you sign up to Firebase, you can import the articles-schema.json file into your own database to set it up to work with Bustle-Clone. A fine tutorial explaining how to do this is available from Epicodus here: https://www.learnhowtoprogram.com/javascript/angular-extended/firebase-retrieving-data

## Known Bugs

_ Currently there are no known bugs. But that doesn't mean there aren't any. Please feel free to contact me if you discover any._
_ There are however a few "quirky" functions still to be cleaned up. Edit ability is curerntly available to all by button, on each article. For aesthetic (and I suppose for 'security') purposes they are hidden, but can be turned back on in the new-article.component.css file under .edit-bttn._
_New Articles are currently created by clicking the new tag on the nav bar._

## Support and contact details

_To suggest changes, submit a pull request in the GitHub repository._

## Technologies Used

* Angular CLI: 1.7.3
* Node: 8.2.1
* OS: darwin x64
* Angular: 5.2.9
* HTML
* JavaScript
* Webpack
* Karma
* Jasmine


*MIT License*

Copyright (c) 2018 **_Ian Goodrich_**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
s
