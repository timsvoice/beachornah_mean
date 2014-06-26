
middleman-sass-foundation
=========================

A [Middleman](http://middlemanapp.com/) template built with [ZURB Foundation](http://foundation.zurb.com/) and [Sass Way](http://thesassway.com/beginner/how-to-structure-a-sass-project) folder structure

Thanks to [axyz](https://github/axyz) who's [Middleman ZURB Foundation template](https://github.com/axyz/middleman-zurb-foundation) provided the main structure and [ZURB Foundation](http://foundation.zurb.com/) integration method detailed below.

## Installation ##

Make sure to have:

1. ruby
1. git
1. middleman ($ `gem install middleman`)
1. bower ($ `npm install -g bower`)


Clone into ~/.middleman (you'll have to create this directory if it's not already there). You can then use it with the `--template` flag on `middleman init`.

1. $ `git clone https://github.com/timsvoice/middleman-sass-foundation.git ~/.middleman/sass-foundation`

Then create a new project using zurb-foundation template.

1. $ `middleman init my_new_project --template=sass-foundation`
1. $ `cd my_new_project`
1. $ `bower install`
1. $ `bundle exec middleman`

Now you can start hacking on `source` directory and watch live changes on [localhost:4567](http://localhost:4567).


## ZURB Foundation License ##

Copyright (c) 2011 ZURB, http://www.zurb.com/

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


