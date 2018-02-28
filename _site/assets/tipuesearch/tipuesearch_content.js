var tipuesearch = {"pages": [{
    "title": "",
    "text": "Not Found! Take me Home",
    "tags": "",
    "url": "/lyonsn1/git-wiki/404.html"
  },{
    "title": "Article Page",
    "text": "Article Page Header Section Header Vertical Rhythm, or the spacing and proximity of headers and sub-headers in relation to paragraphs and lists is useful for visually communicating what is related. Notice the space above and below the headers, there is more above and less below to visually convey associated content. An equal distance above and below provides for a smooth read but doesn't show header to content relationship very well. Headers closer to their content shows a closeness, a relationship. It's a subtle effect. White space between headers shows distance or a distinct grouping of information. Use h2 headers for top level sections and use h3 for sub-sections or mini-chapters for a topic. These prinicples are coded for all elements on the page to provide a smoother reading experience. Vertical Rhythm Vertical Rhythm Vertical Rhythm Project Decomp What UI changes are happening, feed changes, database table validation. Ask the dev what will I be validating? The UI, the database tables, or a report somewhere? Testers and Dev's give a point estimate for suggested cards. Most story cards never exceed 5 points. If they do, the card is too big. You should find scenarios to move into another card. Don't estimate an 8 point card, decompose it into smaller cards. 3 Amigos RA creates story cards according to the SRD Business Rules. RA get's approval from BAO for the story card. Look at the RA Board for story card status. Bring laptop and ask the RA or Dev where in the UI or database tables the test can be validated. Write your notes in the RTC card, these will be helpful for the tester who picks up the card later.",
    "tags": "",
    "url": "/lyonsn1/git-wiki/wiki-guide/article-page/"
  },{
    "title": "Line 2 Cardwall",
    "text": "Cardwall Soap UI SQL Explorer",
    "tags": "",
    "url": "/lyonsn1/git-wiki/lines/line-2/cardwall/"
  },{
    "title": "Cardwall",
    "text": "Cardwall Soap UI SQL Explorer",
    "tags": "",
    "url": "/lyonsn1/git-wiki/onboarding/cardwall/"
  },{
    "title": "Line 3 Cardwall",
    "text": "Cardwall Soap UI SQL Explorer",
    "tags": "",
    "url": "/lyonsn1/git-wiki/lines/line-3/cardwall/"
  },{
    "title": "Line 1 Cardwall",
    "text": "Cardwall Soap UI SQL Explorer",
    "tags": "",
    "url": "/lyonsn1/git-wiki/lines/line-1/cardwall/"
  },{
    "title": "Layout Guide",
    "text": "Clone, Build, Serve, Host This is the more complicated tough part. You'll need know some git and ruby, make sure they are installed. Installing, configuring the gems and project setup is always problematic. You will run into issues more than likely. Ask a test lead or automation developer for help if you get stuck. Clone Build/Serve Github Search Index Push Process Clone the Repo Go to https://github.nwie.net/lyonsn1/git-wiki, clone or download the repository. This will copy the repo onto your local machine. Make sure bundler is installed, if not run: gem install bundler Next, install gems. The Gemfile tells us what gem's are needed for the project. bundle install If bundle install didn't work, you may need to update, try this then run bundle install again. bundle update Jekyll and all the other gems should be installed. gem list will list all the gems installed. gem list Build and Serve You'll need to run Jekyll from the command line. cd into the project directory and type: bundle exec jekyll serve This command builds and serves the site on your local host. Copy the server address path and paste into your browser. Every time you save a change, you'll see a regenerating statement. This allows you to run the wiki on your local machine and view the changes you make when editing the pages. Do this When starting your project, you should update the title and baseurl in the _config.yml file. Give it a name that describes what it is. title: PLT Wiki baseurl: \"/Nationwide/plt\" Hosting on Github Pages In order to host the website on github pages. You'll need to make your own repository for your project or team. Sign-in to github with your nationwide credentials. Looks complicated. You will need to change the origin from the address above to your own. git remote -v Run this command to point your repository address. git remote set-url origin https://github.com/USERNAME/REPOSITORY.git Now you can push your local repository to github! Let's make some final changes to get it hosted. You will need to update the baseurl in the _config.yml file to match your user-name/project-name path. When you push your new changes, github will automatically build and update the website on github. Index Pages For the search functionality to work, you should run rake index to index new pages or update pages. This will add the new page and changes to the search index file. Tipue search is a javascript library that builds a JSON index of the website. It is located at /assets/tipuesearch/tipuesearch_content.js. Don't mess with it! Push Process In short, the commit process goes like this: rake index git add . git commit -m \"commit message\" git push origin master",
    "tags": "",
    "url": "/lyonsn1/git-wiki/wiki-guide/clone-build-serve-host/"
  },{
    "title": "Line 1 Contacts",
    "text": "Contacts Click on the Name to open up in Outlook. Name Title Jamison Roberts Infix Tech Lead Janet Brenot Requirements Doug Baylor Requirements Lead Tara Lapper Release Tester Lead Trine Rowell Release Tester Jenny Newton Release Tester Storm Stidam Release Tester Bridgette Soisson Actuary Marvin Pennyman Actuary Anne Sheffield Actuary Victor Gordon Presentations Lead Parag Patil CM Dev Kiran Pendota CM Dev Marcy Stephenson BAO Jennifer A. Moore BAO Sarah Meyer Commissions Tester Joe Saunders Commissions Tester",
    "tags": "",
    "url": "/lyonsn1/git-wiki/lines/line-1/contacts/"
  },{
    "title": "Line 3 Contacts",
    "text": "Contacts Click on the Name to open up in Outlook. Name Title Jamison Roberts Infix Tech Lead Janet Brenot Requirements Doug Baylor Requirements Lead Tara Lapper Release Tester Lead Trine Rowell Release Tester Jenny Newton Release Tester Storm Stidam Release Tester Bridgette Soisson Actuary Marvin Pennyman Actuary Anne Sheffield Actuary Victor Gordon Presentations Lead Parag Patil CM Dev Kiran Pendota CM Dev Marcy Stephenson BAO Jennifer A. Moore BAO Sarah Meyer Commissions Tester Joe Saunders Commissions Tester",
    "tags": "",
    "url": "/lyonsn1/git-wiki/lines/line-3/contacts/"
  },{
    "title": "Line 2 Contacts",
    "text": "Contacts Click on the Name to open up in Outlook. Name Title Jamison Roberts Infix Tech Lead Janet Brenot Requirements Doug Baylor Requirements Lead Tara Lapper Release Tester Lead Trine Rowell Release Tester Jenny Newton Release Tester Storm Stidam Release Tester Bridgette Soisson Actuary Marvin Pennyman Actuary Anne Sheffield Actuary Victor Gordon Presentations Lead Parag Patil CM Dev Kiran Pendota CM Dev Marcy Stephenson BAO Jennifer A. Moore BAO Sarah Meyer Commissions Tester Joe Saunders Commissions Tester",
    "tags": "",
    "url": "/lyonsn1/git-wiki/lines/line-2/contacts/"
  },{
    "title": "Defects",
    "text": "Defects",
    "tags": "",
    "url": "/lyonsn1/git-wiki/testing/defects/"
  },{
    "title": "Testing Overview",
    "text": "Developer Development resources, best practices, tips, whatever else can go here. Important Links Links go here Documents Docs go here",
    "tags": "",
    "url": "/lyonsn1/git-wiki/onboarding/developer-overview/"
  },{
    "title": "Development",
    "text": "Developer Development resources, best practices, tips, whatever else can go here. Important Links Links go here Documents Docs go here",
    "tags": "",
    "url": "/lyonsn1/git-wiki/development/"
  },{
    "title": "Testing",
    "text": "Financial Terms Basic Policy Terms Deductible The amount the customer must pay before insurance kicks in. Coverage A general term for all the types of coverages against possible risks. The more coverage the higher the premium. A general term for all the types of coverages against possible risks. The more coverage the higher the premium. Primary Insured Usually the policy holder, it refers to who the insurance will protect. MVR Motor Vehicle Records contain traffic violations and related information about the vehicle or driver. Secondary Insured Additional individual to be insured under the same coverages as the Primary.",
    "tags": "",
    "url": "/lyonsn1/git-wiki/glossary/finance/"
  },{
    "title": "Testing",
    "text": "Glossary of Terms Financial Terms Business Terms Technical Terms",
    "tags": "",
    "url": "/lyonsn1/git-wiki/glossary/"
  },{
    "title": "icons",
    "text": "Icons",
    "tags": "",
    "url": "/lyonsn1/git-wiki/icons/"
  },{
    "title": "home",
    "text": "Welcome to Line/Project Line/Project information goes here. Onboarding Onboarding Starter Docs Project Overview Cardwall Projects Project 1 Project 2 Project 3 PLT Lines Line-1 Line-2 Line-3 Products Product 1 Product 2 Product 3 PLT Testing Development Requirements FYI Defect Workflow RTC RRC",
    "tags": "",
    "url": "/lyonsn1/git-wiki/"
  },{
    "title": "Layout Guide",
    "text": "Layout Guide If you want to build your own page, you'll need to know just enough html and css. All you really need to do is copy and paste from another page and edit the content! You just have to keep an eye out for un-closed tags. Every HTML element needs an opening and closing tag. Creating a New Page The easiest way to create a new page is to copy and paste one of the templates from the page layout section. Or any other page that you fits your need. Next, you'll need to update the front matter. The layout tells the page which template it will use. the title gives the page a title that will appear in the browser tab. the permalink is the page address. You'll always need a trailing slash at the end! --- layout: project title: Wiki Guide permalink: /wiki-guide/ --- Now, you can start adding UI elements that fit your needs. Just copy and paste them into your page from the style guide. Images and Links Jekyll is a ruby gem, it has commands to build and a run a server, as well as some handy ruby variables that you'll see in the markup. For instance, you'll reference an image like this: &lt;img src=&quot;{{site.baseurl}}/assets/img/image.png&quot;&gt;&lt;/img&gt; The &#123;&#123;site.baseurl&#125;&#125; is a variable that is replaced with /Nationwide/plt when the site is built. Instead of having to type this address everytime, the variable holds this value. The rest of the path after that is the directory structure that goes to the /img folder. Take a look around, there are many directories in the /img folder organized similarly to the /pages. This makes it easier to find which images belong to which pages. Links follow the same pattern. But there is a slight difference. Notice that after the &#123;&#123;site.baseurl&#125;&#125; the path is just /wiki-guide/layout-guide. If you look at the project directory structure it is /pages/wiki-guide/layout-guide. The permalink field in the front matter sets up this url scheme and will find the page with a matching path. You can have pages nested within many folders, but the path can be one level deep. &lt;a href=&quot;{{site.baseurl}}/wiki-guide/layout-guide/&quot;&gt;&lt;/a&gt; Wiki Structure Jekyll uses a project set-up like this: _data: For long lists of information, create a .csv and loop thru them with a table. _includes: the head, body, nav and other sections are isolated into their own components. When building the site, jekyll builds them into a single page. _layouts: each page inherits a template that has slightly different css rules and styles. _site: the built version of the website. This is what gets published on github pages. It is the final version of the site. _config.yml: set the project title and baseurl here. Jekyll settings are configured here. assets: img, files, icons and search code is here. css: css styles are here, you don't need to edit these unless you want to change the look and feel. js: javascript code is here. Just leave it alone. pages: where all the content and pages are stored, add new pages here! Check out how to build, serve and host.",
    "tags": "",
    "url": "/lyonsn1/git-wiki/wiki-guide/layout-guide/"
  },{
    "title": "Line 1",
    "text": "Welcome to Line 1 Anything specific related to your line goes here! Onboarding Onboarding Cardwall Contacts Projects Products Transactions Glossary of Terms Contacts and Teams Requirements Development Testing Wiki Guide More Links to Things Add other stuff if need be.",
    "tags": "",
    "url": "/lyonsn1/git-wiki/lines/line-1/"
  },{
    "title": "Line 2",
    "text": "Welcome to Line 1 Anything specific related to your line goes here! Onboarding Onboarding Cardwall Contacts Projects Products Transactions Glossary of Terms Contacts and Teams Requirements Development Testing Wiki Guide More Links to Things Add other stuff if need be.",
    "tags": "",
    "url": "/lyonsn1/git-wiki/lines/line-2/"
  },{
    "title": "Line 3",
    "text": "Welcome to Line 1 Anything specific related to your line goes here! Onboarding Onboarding Cardwall Contacts Projects Products Transactions Glossary of Terms Contacts and Teams Requirements Development Testing Wiki Guide More Links to Things Add other stuff if need be.",
    "tags": "",
    "url": "/lyonsn1/git-wiki/lines/line-3/"
  },{
    "title": "Teams",
    "text": "Teams/Lines Name Email Type Line-1 line-1@nationwide.com build Line-2 line-2@nationwide.com run Line-3 line-3@nationwide.com run",
    "tags": "",
    "url": "/lyonsn1/git-wiki/lines/"
  },{
    "title": "onboarding",
    "text": "Onboarding Here are some important links, checklists, and how-to's for getting started. Put software download links, instructions, spot links and anything else for onboarding. Getting Started Tools and Access Starter Docs Useful Links/Documents Project Overview Line Overview Testing Overview Developer Overview Requirements Overview Cardwall Contacts & Teams",
    "tags": "",
    "url": "/lyonsn1/git-wiki/onboarding/"
  },{
    "title": "Line 1 Onboarding",
    "text": "Onboarding Here are some important links, checklists, and how-to's for getting started. Put software download links, instructions, spot links and anything else for onboarding. Getting Started Tools and Access Starter Docs Useful Links/Documents Project Overview Line Overview Testing Overview Developer Overview Requirements Overview Cardwall Contacts & Teams",
    "tags": "",
    "url": "/lyonsn1/git-wiki/lines/line-1/onboarding/"
  },{
    "title": "Line 2 Onboarding",
    "text": "Onboarding Here are some important links, checklists, and how-to's for getting started. Put software download links, instructions, spot links and anything else for onboarding. Getting Started Tools and Access Starter Docs Useful Links/Documents Project Overview Line Overview Testing Overview Developer Overview Requirements Overview Cardwall Contacts & Teams",
    "tags": "",
    "url": "/lyonsn1/git-wiki/lines/line-2/onboarding/"
  },{
    "title": "Line 3 Onboarding",
    "text": "Onboarding Here are some important links, checklists, and how-to's for getting started. Put software download links, instructions, spot links and anything else for onboarding. Getting Started Tools and Access Starter Docs Useful Links/Documents Project Overview Line Overview Testing Overview Developer Overview Requirements Overview Cardwall Contacts & Teams",
    "tags": "",
    "url": "/lyonsn1/git-wiki/lines/line-3/onboarding/"
  },{
    "title": "Overview",
    "text": "Testing Overview",
    "tags": "",
    "url": "/lyonsn1/git-wiki/testing/overview/"
  },{
    "title": "Products",
    "text": "Products Name Label Code IVUL Accumulator VUL Accumulator 31 IVUL Protector VUL Protector 32 Indexed Universal Life INDEXED UL 22 Indexed Universal Life Accumulator IUL Accumulator 28 Indexed Universal Life Protector IUL Protector 30 Accumulation Variable Universal Life Accum VUL 46 Survivorship Universal Life SUL 42 Protection Variable Universal Life PVUL 43 Single Premium Universal Life SPUL 45 Current Assumption Universal Life Current Assumption UL (CUAL) 44 No-Lapse Guarantee SUL II NLG SUL II 20 No-Lapse Guarantee UL II NLGULII 12 NGL NGL 18 NLGUL NLGUL 16 Long Term Care LTC 27 NBSG CVUL 1 NBSG Sa Boli 14 NBSG FEVUL 1 NBSG SVUL 4 NBSG CVUL 5 NBSG FEUL 13 NBSG BOLI 6 NBSG CVUL 1",
    "tags": "",
    "url": "/lyonsn1/git-wiki/products/"
  },{
    "title": "Project Overview",
    "text": "Project Overview Soap UI SQL Explorer",
    "tags": "",
    "url": "/lyonsn1/git-wiki/onboarding/project-overview/"
  },{
    "title": "Project Page",
    "text": "Welcome to the Project Page Basic project information goes here. Onboarding Onboarding Tools & Access Starter Docs Cardwall Projects Products Transactions Glossary of Terms Contacts and Teams Requirements Development Testing Wiki Guide More Links to Things There are many transactions and products and ui-screens for this project. Here is a quick list of them. Transactions Onboarding Tools & Access Starter Docs Cardwall Products Products Transactions Glossary of Terms Contacts and Teams Screens Requirements Development Testing Wiki Guide A Long Title For Wrapping to the Next Line",
    "tags": "",
    "url": "/lyonsn1/git-wiki/wiki-guide/project-page/"
  },{
    "title": "PLT Projects",
    "text": "Projects Remove or alter componentsthat fit your needs. Don't forget to update your links. Comp Rater Remove or alter componentsthat fit your needs. Don't forget to update your links. Internet Remove or alter componentsthat fit your needs. Don't forget to update your links. Policy Center Remove or alter componentsthat fit your needs. Don't forget to update your links.",
    "tags": "",
    "url": "/lyonsn1/git-wiki/projects/"
  },{
    "title": "Testing Overview",
    "text": "Requirements Requirements resources, best practices, tips, whatever else can go here. Important Links Links go here Documents Docs go here",
    "tags": "",
    "url": "/lyonsn1/git-wiki/onboarding/requirements-overview/"
  },{
    "title": "Requirements",
    "text": "Requirements Put information about requirements here!",
    "tags": "",
    "url": "/lyonsn1/git-wiki/requirements/"
  },{
    "title": "Starter Docs",
    "text": "Starter Docs Policy Center Region List: List of Testing Regions. RTC: Story/Tech card repository. RTC: Requirements",
    "tags": "",
    "url": "/lyonsn1/git-wiki/onboarding/starter-docs/"
  },{
    "title": "Stretch Page",
    "text": "Stretch Page Header This slider page is great for screenshots and big pictures. Error Card Here is a slide with some words and a picture. Story Card Here is a slide with some words and a picture. Tech Card Here is a slide with some words and a picture. No Stretch You'll need to wrap h1, p, ul, ol and anything else within a section tag with a class of no-stretch. &lt;section class=&quot;no-stretch&quot;&gt; &lt;h2&gt;No Stretch&lt;/h1&gt; &lt;p&gt; You'll need to wrap &lt;b&gt;h1, p, ul, ol&lt;/b&gt;. &lt;/p&gt; &lt;/section&gt;",
    "tags": "",
    "url": "/lyonsn1/git-wiki/wiki-guide/stretch-page/"
  },{
    "title": "Style Guide",
    "text": "Style Guide For Git Wiki Project And Other Stuff Overview of the UI Components. Contact support @Nick Lyons. Text Sections Images Tables Lists Links Buttons Definition Lists Tabs Slider Code Highlight Icon Box Text Sections, Paragraphs, And Other Type Related Elements for the Wiki Vertical Rhythm, or the spacing and proximity of headers and sub-headers in relation to paragraphs and lists is useful for visually communicating what is related. Notice the space above and below the headers, there is more above and less below to visually convey associated content. An equal distance above and below provides for a smooth read but doesn't show header to content relationship very well. Headers closer to their content shows a closeness, a relationship. It's a subtle effect. White space between headers shows distance or a distinct grouping of information. Use h2 headers for top level sections and use h3 for sub-sections or mini-chapters for a topic. These prinicples are coded for all elements on the page to provide a smoother reading experience. Vertical Rhythm Vertical Rhythm Vertical Rhythm Project Decomp What UI changes are happening, feed changes, database table validation. Ask the dev what will I be validating? The UI, the database tables, or a report somewhere? Testers and Dev's give a point estimate for suggested cards. Most story cards never exceed 5 points. If they do, the card is too big. You should find scenarios to move into another card. Don't estimate an 8 point card, decompose it into smaller cards. 3 Amigos RA creates story cards according to the SRD Business Rules. RA get's approval from BAO for the story card. Look at the RA Board for story card status. Bring laptop and ask the RA or Dev where in the UI or database tables the test can be validated. Write your notes in the RTC card, these will be helpful for the tester who picks up the card later. Images Images are located in /assets/img/. Markup &lt;img src=&quot;&#123;&#123;site.baseurl&#125;&#125;/assets/img/policy-center/account/account-home.png&quot; alt=&quot;&quot;&gt; Tables Tables come into to types: Static or Data. Data tables allow you to use a YAML or CSV to populate the table from a file. Much easier for re-use and maintenance. Name Title Jamison Roberts Infix Tech Lead Janet Brenot Requirements Doug Baylor Requirements Lead Tara Lapper Release Tester Lead Trine Rowell Release Tester Jenny Newton Release Tester Storm Stidam Release Tester Bridgette Soisson Actuary Marvin Pennyman Actuary Anne Sheffield Actuary Victor Gordon Presentations Lead Parag Patil CM Dev Kiran Pendota CM Dev Marcy Stephenson BAO Jennifer A. Moore BAO Sarah Meyer Commissions Tester Joe Saunders Commissions Tester Markup &lt;table&gt; &lt;thead&gt; &lt;tr&gt; &lt;td&gt;Name&lt;/td&gt; &lt;td&gt;Title&lt;/td&gt; &lt;/tr&gt; &lt;/thead&gt; &lt;tbody&gt; &#123;% for contact in site.data.contacts %&#125; &lt;tr&gt; &lt;td&gt; &lt;a href=&quot;mailto: &#123;&#123;contact.email&#125;&#125;&quot;&gt;&#123;&#123;contact.name&#125;&#125;&lt;/a&gt; &lt;/td&gt; &lt;td&gt;&#123;&#123;contact.title&#125;&#125;&lt;/td&gt; &lt;/tr&gt; &#123;% endfor %&#125; &lt;/tbody&gt; &lt;/table&gt; The code in the curly brackets is Jekyll code. It is a loop that is referencing a data file located in /_data/contacts.csv. It loops throught the file and writes it to the page. Duplicate a data file, add your own header names, then change the curly brackets in the markup to match the headers in your .csv file. Lists There are many types of lists. Here are some them! List of Links Tools Access & Permissions Starter Docs Useful Links/Documents Project Overview Testing Overview Cardwall How To's Contacts & Teams Markup &lt;ul class=&quot;list-links&quot;&gt; &lt;li&gt; &lt;a href=&quot;&#123;&#123;site.baseurl&#125;&#125;/onboarding/tools&quot;&gt;Tools&lt;/a&gt; &lt;/li&gt; &lt;li&gt; &lt;a href=&quot;&#123;&#123;site.baseurl&#125;&#125;/onboarding/access-permissions&quot;&gt;Access &amp; Permissions&lt;/a&gt; &lt;/li&gt; &lt;/ul&gt; Checkbox List Oracle Database - Path to Download User Interface - Path to Download SQL Developer - Path to Download Markup &lt;ul class=&quot;checkbox-list&quot;&gt; &lt;li&gt; &lt;input type=&quot;checkbox&quot; name=&quot;&quot; value=&quot;&quot;&gt; Oracle Database - &lt;a href=&quot;&quot;&gt;Path to Download&lt;/a&gt; &lt;/li&gt; &lt;/ul&gt; Quick Links Quick Links list for article sections. Put an id=\"#bookmark\" on an element and reference it from the quick links list. Quick links go at the beginning and are short cuts to the article sections. About More Info Product Model State Variations Details of Product Types Product Codes Serialization Markup &lt;ul class=&quot;quick-links&quot;&gt; &lt;li&gt; &lt;a href=&quot;&#123;&#123;site.baseurl&#125;&#125;/wiki-guide/style-guide#about&quot;&gt;About&lt;/a&gt; &lt;/li&gt; &lt;li&gt; &lt;a href=&quot;&#123;&#123;site.baseurl&#125;&#125;/wiki-guide/style-guide#more-info&quot;&gt;More Info&lt;/a&gt; &lt;/ul&gt; Inline Link in a Paragrah What UI changes are happening, feed changes, database table validation. Ask the dev what will I be validating? The UI, the database tables, or a report somewhere? Testers and Dev's give a point estimate for suggested cards. Markup What UI changes are happening, &lt;a href=&quot;#&quot;&gt;feed changes&lt;/a&gt;, database table validation. Ask the dev what will I be validating? The UI, the &lt;a href=&quot;#&quot;&gt;database tables&lt;/a&gt;, or a report somewhere? Testers and Dev's give a point estimate for suggested cards. Buttons Used for navigation to other pages. Home Onboarding Projects Back to Home Markup &lt;a href=&quot;&#123;&#123;site.baseurl&#125;&#125;/&quot; class=&quot;button-link&quot;&gt; &lt;button class=&quot;blue-button&quot; type=&quot;button&quot; name=&quot;button&quot;&gt; Home &lt;/button&gt; &lt;/a&gt; Prev/Next arrows for pages that document a process. Prev Next Markup &lt;section class=&quot;nav-buttons&quot;&gt; &lt;a href=&quot;&#123;&#123;site.baseurl&#125;&#125;/&quot; class=&quot;button-link prev&quot;&gt; &lt;button class=&quot;blue-button&quot; type=&quot;button&quot; name=&quot;button&quot;&gt; Prev &lt;/button&gt; &lt;/a&gt; &lt;a href=&quot;&#123;&#123;site.baseurl&#125;&#125;/&quot; class=&quot;button-link next&quot;&gt; &lt;button class=&quot;blue-button&quot; type=&quot;button&quot; name=&quot;button&quot;&gt; Next &lt;/button&gt; &lt;/a&gt; &lt;/section&gt; Data Definition Lists Hide and Show definitions are perfect for keeping a growing list of business and technical terms. All Deductible The amount the customer must pay before insurance kicks in. Coverage A general term for all the types of coverages against possible risks. The more coverage the higher the premium. A general term for all the types of coverages against possible risks. The more coverage the higher the premium. Primary Insured Usually the policy holder, it refers to who the insurance will protect. MVR Motor Vehicle Records contain traffic violations and related information about the vehicle or driver. Secondary Insured Additional individual to be insured under the same coverages as the Primary. More Basic Info Policy Info Here is some filler text about the list below. All Deductible The amount the customer must pay before insurance kicks in. Coverage A general term for all the types of coverages against possible risks. The more coverage the higher the premium. A general term for all the types of coverages against possible risks. The more coverage the higher the premium. Primary Insured Usually the policy holder, it refers to who the insurance will protect. MVR Motor Vehicle Records contain traffic violations and related information about the vehicle or driver. Secondary Insured Additional individual to be insured under the same coverages as the Primary. Markup &lt;section class=&quot;definition-list&quot;&gt; &lt;span class=&quot;hide-show-all&quot;&gt;All&lt;/span&gt; &lt;dl&gt; &lt;dt&gt;Deductible&lt;/dt&gt; &lt;dd&gt; The amount the customer must pay before insurance kicks in. &lt;/dd&gt; &lt;dt&gt;Coverage&lt;/dt&gt; &lt;dd&gt; A general term for all the types of coverages against possible risks. The more coverage the higher the premium. A general term for all the types of coverages against possible risks. The more coverage the higher the premium. &lt;/dd&gt; &lt;/dl&gt; &lt;/section&gt; Tabs Tabs are great for displaying data with images and text. Story Card Tech Card Defect Card Error Card They are linked to RTC. Developer works on the card, then moves ready to test for line tester to work on. They are sent the BAO for Sign-Off when testing is complete. Tech cards are worked by only the developer. They are not tested by the line. Defect cards are worked on by Line Developer, then sent back to tester who created it. In Vegas line, these are defects found outside of the team and assigned to our dev's to fix. Line Error cards are fixed by Line Dev, then retested by Line Tester who found them. In Vegas line, they are 'defects' found within line testing. Markup &lt;section class=&quot;tabs&quot;&gt; &lt;ul class=&quot;grid-row tab-links&quot;&gt; &lt;li class=&quot;active-tab-link&quot;&gt;Story Card&lt;/li&gt; &lt;li&gt;Tech Card&lt;/li&gt; &lt;/ul&gt; &lt;section class=&quot;tab-content-container&quot;&gt; &lt;section class=&quot;tab-content active-tab&quot;&gt; &lt;p&gt; They are linked to RTC. Developer works on the card, then moves ready to test for line tester to work on. They are sent the BAO for Sign-Off when testing is complete. &lt;/p&gt; &lt;img src=&quot;/lyonsn1/git-wiki/assets/img/cardwall/story-green-card.jpg&quot; alt=&quot;&quot;&gt; &lt;/section&gt; &lt;section class=&quot;tab-content&quot;&gt; &lt;p&gt; Tech cards are worked by only the developer. They are not tested by the line. &lt;/p&gt; &lt;img src=&quot;&#123;&#123;site.baseurl&#125;&#125;/assets/img/cardwall/tech-yellow-card.jpg&quot; alt=&quot;&quot;&gt; &lt;/section&gt; &lt;/section&gt; &lt;/section&gt; Slider Error Card Here is a slide with some words and a picture. Story Card Here is a slide with some words and a picture. Tech Card Here is a slide with some words and a picture. Markup &lt;div class=&quot;swiper-container&quot;&gt; &lt;!-- Additional required wrapper --&gt; &lt;div class=&quot;swiper-wrapper&quot;&gt; &lt;!-- Slides --&gt; &lt;div class=&quot;swiper-slide&quot;&gt; &lt;h3&gt;Error Card&lt;/h3&gt; &lt;p&gt; Here is a slide with some words and a picture. &lt;/p&gt; &lt;img src=&quot;&#123;&#123;site.baseurl&#125;&#125;/assets/img/cardwall/error-blue-card.jpg&quot; alt=&quot;&quot;&gt; &lt;/div&gt; &lt;div class=&quot;swiper-slide&quot;&gt; &lt;h3&gt;Story Card&lt;/h3&gt; &lt;p&gt; Here is a slide with some words and a picture. &lt;/p&gt; &lt;img src=&quot;&#123;&#123;site.baseurl&#125;&#125;/assets/img/cardwall/story-green-card.jpg&quot; alt=&quot;&quot;&gt; &lt;/div&gt; &lt;div class=&quot;swiper-slide&quot;&gt; &lt;h3&gt;Tech Card&lt;/h3&gt; &lt;p&gt; Here is a slide with some words and a picture. &lt;/p&gt; &lt;img src=&quot;&#123;&#123;site.baseurl&#125;&#125;/assets/img/cardwall/tech-yellow-card.jpg&quot; alt=&quot;&quot;&gt; &lt;/div&gt; &lt;/div&gt; &lt;!-- If we need pagination --&gt; &lt;div class=&quot;swiper-pagination&quot;&gt;&lt;/div&gt; &lt;!-- If we need navigation buttons --&gt; &lt;div class=&quot;swiper-button-prev&quot;&gt;&lt;/div&gt; &lt;div class=&quot;swiper-button-next&quot;&gt;&lt;/div&gt; &lt;!-- If we need scrollbar --&gt; &lt;div class=&quot;swiper-scrollbar&quot;&gt;&lt;/div&gt; &lt;/div&gt; Code Highlight Code highlighting is perfect for scripts. select * from policies p, rider r where p.Number = r.Number and p.Product = 31 and p.Status = 8 and r.RiderCode = 17 Markup &lt;pre&gt; &lt;code class=&quot;language-sql&quot;&gt; select * from policies p, rider r where p.Number = r.Number and p.Product = 31 and p.Status = 8 and r.RiderCode = 17 &lt;/code&gt; &lt;/pre&gt; Icon Box Good for hightlighting a tip, trick, gotcha or a don't do. Warning: Don't Do this! This will cause permanent damage to the system. Or will screw up the database/policy/data sheet. This will cause permanent damage to the system. Or will screw up the database/policy/data sheet. Save for later. You'll use this information often for user testing. Keep it handy or bookmarked for later review. Save for later. You'll use this information often for user testing. Keep it handy or bookmarked for later review. Good Idea! Try this to save time, or a nifty process to assist in what ever you are doing. System/Computer Configuration! Any info related to a known issue related to workstation set up hardware. Markup &lt;section class=&quot;box&quot;&gt; &lt;section class=&quot;icon-thumbsup&quot;&gt;&lt;/section&gt; &lt;p&gt; Save for later. You'll use this information often for user testing. Keep it handy or bookmarked for later review. &lt;/p&gt; &lt;/section&gt; Icon Class Styles icon-thumbsdown icon-thumbsup icon-paperclip icon-lightbulb icon-laptop",
    "tags": "",
    "url": "/lyonsn1/git-wiki/wiki-guide/style-guide"
  },{
    "title": "Test Plans",
    "text": "Test Plans",
    "tags": "",
    "url": "/lyonsn1/git-wiki/testing/test-plans/"
  },{
    "title": "Testing Overview",
    "text": "Testing Testing resources, best practices, tips, whatever else can go here. Important Links Links go here Documents Docs go here",
    "tags": "",
    "url": "/lyonsn1/git-wiki/onboarding/testing-overview/"
  },{
    "title": "Testing",
    "text": "Line Testing Put line testing information here for your team. Testing Overview Test Plans Defects How To's",
    "tags": "",
    "url": "/lyonsn1/git-wiki/testing/"
  },{
    "title": "onboarding - tools",
    "text": "Tools Oracle Database - Path to Download User Interface - Path to Download SQL Developer - Path to Download Access/Permissions UI - try making a payment SQL Server - ask Tech lead for permissions RTC - Ask IM for access RRC - Ask IM for access",
    "tags": "",
    "url": "/lyonsn1/git-wiki/onboarding/tools-access/"
  },{
    "title": "Transactions",
    "text": "Transactions Name Code Transaction Code {% for transaction in site.data.transactions %} {{transaction.name}} {{transaction.code}} {{transaction.trxnumber}} {% endfor %}",
    "tags": "",
    "url": "/lyonsn1/git-wiki/transactions/"
  },{
    "title": "UI Screen Page",
    "text": "UI Screen Page Basic policy information screen. Primary Named Insured There can be two primary named insured. For testing, just use one for most policy creation. Name Role Addresses If creating a new submission for a new account, you'll get an error asking to complete Primary Insured information fields. They aren't displayed on this screen. Click on the blue underlined name and complete required fields. Nothing her to look at Add a secondary address here. Use the checkbox to the far left for removing an address. Business Type Business Type info goes here. All New Business Most commonly used option for testing. State Transfer (IRT) Spin 5th Vehicle Motor Vehicle Records contain traffic violations and related information about the vehicle or driver. Transfer Additional individual to be insured under the same coverages as the Primary. Policy Transfer Additional individual to be insured under the same coverages as the Primary. Secondary Named Insured Not required for testing unless specified. Skip this for most policy creation. FCRA Required to accept Yes. A pop-up will display, click OK. Household Composition For testing, default option of No is fine. Additional Policy Details For testing, do not need to select any options. Policy Details Policies can have different terms. A term is how long the policy will be effect for the insured. Read up on how renewals work to better understand. Leave these fields set to their default unless the test case calls them out. Discounts Policies can have different terms. A term is how long the policy will be effect for the insured. Read up on how renewals work to better understand. Leave these fields set to their default unless the test case calls them out. All Affinity A look up tool for organizations that NW provides discounts to. Not required for testing. Easy Pay Sign-Up Keep default option. Property Product Do not need to make a selection for test policy creation. Paperless Policy Keep default option. Intra Agent Transfer Keep default option. SmartRide Vehicle Program will enable SmartRide. Read more about how SmartRide works. Financial Products Do not need to make a selection for test policy creation. Nationwide Documents/Email Add an email address. This will be validated when doing an Issue Policy submission. Save time and add it now! Prev Next",
    "tags": "",
    "url": "/lyonsn1/git-wiki/wiki-guide/ui-screen-page/"
  },{
    "title": "Useful Links",
    "text": "Useful Links Policy Center Region List: List of Testing Regions. RTC: Story/Tech card repository. RTC: Requirements",
    "tags": "",
    "url": "/lyonsn1/git-wiki/onboarding/useful-links/"
  },{
    "title": "Wiki Guide",
    "text": "Wiki Guide This wiki uses Jekyll, a static web site generator that builds web pages from templates. It was created by one of the github founders. It works great with github pages. That's where this wiki is hosted. Read the docs for more information. Contact @Nick Lyons for assistance. Shortcuts Ctrl + X: Toggle search bar. Ctrl + M: Toggle menu screen. How to Use Components to use in page layout and css instructions. Layout Guide UI Components Clone, Build, Serve, Host Page Layouts There are several page layouts to meet you needs for the type of documentation you might need. Project Article UI Screen Stretch Page",
    "tags": "",
    "url": "/lyonsn1/git-wiki/wiki-guide/"
  },{
    "title": "Wiki Updates",
    "text": "Wiki Release Updates 2/22 Feb Learn how to to search for policies in PC with Data Export. 2/21 Feb git Updated Launch Page for PC Environments Transfers Page added for Policy Center Updated Useful Links Page: PLT Environment Links Auto Product Model Property Product Model Umbrella Product Model Mobius PLT One Product PLT Architecture Overview",
    "tags": "",
    "url": "/lyonsn1/git-wiki/wiki-updates/"
  }]};
