# [Git Wiki](https://pages.github.nwie.net/lyonsn1/wiki-starter/)

Git Wiki is for line documentation, onboarding and project knowledge sharing!
Powered by [Jekyll](https://jekyllrb.com/docs/home/),
served by [Github Pages](https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/)
and nurtured by committed associates :)
This repo is a wiki starter project for someone who has basic html, css and ruby knowledge.  Check the getting started page for instructions.  Contact Nick Lyons @ lyonsn@nationwide.com for assistance and questions.  

## Clone, Install, Run Locally


```
git clone https://github.nwie.net/lyonsn1/wiki-starter.git
```

Make sure bundler is installed, if not run:

```
gem install bundler
```

Next install gems:

```
bundle install
```

You may also need to update:

```
bundle update
```

Then run locally for developement:
```
bundle exec jekyll serve
```

https://pages.github.nwie.net/lyonsn1/wiki-starter/


## Windows Install Directions
- [Jekyll Setup on Windows](http://jekyllrb.com/docs/windows/)
- [Jekyll 3 Windows Setup Instructions](https://labs.sverrirs.com/jekyll/)

## Features


### Hosted on Github Pages

- [Jekyll on Github Pages Enterprise](https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/)

### Responsive Grid
- [Float Based](https://css-tricks.com/dont-overthink-it-grids/)
- [CSS Autoprefixer](https://github.com/octopress/autoprefixer)

### Typography
- [Modular Scale](https://www.gridlover.net/try)
- [Fluid Typography](https://madebymike.com.au/writing/precise-control-responsive-typography/)

### Wiki Gem
- [Jekyll Admin CMS](https://jekyll.github.io/jekyll-admin/)
- http://localhost:4000/admin

### Front End Search
- [Tipue Search](https://github.com/jekylltools/jekyll-tipue-search/tree/gh-pages)
- [Scroll Lock](http://mohammadyounes.github.io/jquery-scrollLock/)

### Jekyll Links
- [Plug-in Gems](https://github.com/planetjekyll/awesome-jekyll-plugins)
- [Newsletter](https://jekyllweekly.com/archives/)

# Issues
__octopress-autoprefixer__ for sass prefixing throws __ExecJS : ProgramError__
Need to install Node.js to fix.

# Build, Test and Deploy Instructions

## Step 1: Front Matter

Before you deploy to github, make sure any new pages or posts have the requisite front matter.
A title at the very minimum will do.

``` html
---
title: page title goes here
---
```

Jekyll uses front matter during the build process, just add this to the very top of the page or post.
It goes before any html or markdown, else you will have build errors.

## Step 2: Build script

Before pushing changes to github pages, you'll need to re-index the search.
This is a json object file that uses tipuesearch.js to index all the pages in the project.
Run:

```
rake index
```

## Step 3: Test Locally

__bundle exec jekyll serve__

## Step 4: Deploy

Use the gh-pages branch to push.

```
git push origin gh-pages
```


# Jekyll Learning Resources

- [Jekyll Casts](https://learn.cloudcannon.com/)
- [Youtube Series](https://www.youtube.com/playlist?list=PLWjCJDeWfDdfVEcLGAfdJn_HXyM4Y7_k-)
- [Jekyll Community](http://jekyllrb.com/community/)
- [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
