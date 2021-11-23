---
slug: ./create
title: Creating a new Page
tags: 
    - Leads
---
# Creating a new Page
## Create a New Doc
### Pull  the [Github repo](github.com/waldo-vision) to your local repo.
![Pull from Github](/img/Docs/Leads/create.png)


    git clone github.com/waldo-vision/docs.git
    
    
### How to create a new document
>You will need to know how to create markdown ( .md) files. If you are not so familiar with markdown, use an online compiler like [stackedit](https://stackedit.io).

When creating internal links remember to use the docusaurus component 
```
<Link to="./docs/Leads/">
	<h3> I am a link </h3>
</Link>	
```
##

##### Header / Variables
> Headers and variables should be set at the top of the page. 

    ---
    sidebar_position: 1   # Document position on the sidebar
    title: New Document   # The title of the document, this will set the document sidebar name aswell
						  # NOTE: 
							  #	(1/2) If the page has a title tag " # " then the tag will override the title variable. 
							  #	(2/2) If page title is overrided the siddebar name is not effected
    id: document		  # The id is the identifier of the page (we will not be needing it 99% of the time)
    tags:
	    - Questions		  # Tags are rendered by docusaurus | Any tags will then be added to the "all tags" page where anyone can view them
	    - Help
	    - Support
	slug: ./document/
	---

##### Headings and Title
> Docusaurus automatically renders the titles and the headers 

Titles:
	`#	This is a title`
If this is at the top of the document it will override the title (if specified in the variable / header space) otherwise it will act as a normal title

`## This is a  subtitle`
Any subtitles wll be rendered by docusaurus 

Remember to test your new file by running the react app and test all internal links:
`$ yarn run start`

## Pushing your new document
When you have finished creating your document, tested and is happy with it, push to the repo under a branch name of `docs/{directory path :: otherwise skip}/{your document id or name}` otherwise it will not be merged into the repo. Make sure you read up on out [Git Workflow](github.com/waldo-vision) 

