"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[938],{7985:function(e,t,A){A.r(t),A.d(t,{frontMatter:function(){return r},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var n=A(3117),a=A(102),o=(A(7294),A(3905)),l=["components"],r={slug:"./create",title:"Creating a new Page",tags:["Leads"]},i="Creating a new Page",s={unversionedId:"Leads/Docs/Creating a new Page",id:"Leads/Docs/Creating a new Page",isDocsHomePage:!1,title:"Creating a new Page",description:"Create a New Doc",source:"@site/docs/Leads/Docs/Creating a new Page.md",sourceDirName:"Leads/Docs",slug:"/Leads/Docs/create",permalink:"/waldo-docs/docs/Leads/Docs/create",editUrl:"https://github.com/waldo-vision/docs/docs/Leads/Docs/Creating a new Page.md",tags:[{label:"Leads",permalink:"/waldo-docs/docs/tags/leads"}],version:"current",frontMatter:{slug:"./create",title:"Creating a new Page",tags:["Leads"]},sidebar:"tutorialSidebar",previous:{title:"Welcome \ud83d\udc4b",permalink:"/waldo-docs/docs/Leads/"},next:{title:"Deleting a page",permalink:"/waldo-docs/docs/Leads/Docs/delete"}},d=[{value:"Create a New Doc",id:"create-a-new-doc",children:[{value:"Pull  the Github repo to your local repo.",id:"pull--the-github-repo-to-your-local-repo",children:[],level:3},{value:"How to create a new document",id:"how-to-create-a-new-document",children:[{value:"Header / Variables",id:"header--variables",children:[],level:5},{value:"Headings and Title",id:"headings-and-title",children:[],level:5}],level:3}],level:2},{value:"Pushing your new document",id:"pushing-your-new-document",children:[],level:2}],u={toc:d};function c(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-a-new-page"},"Creating a new Page"),(0,o.kt)("h2",{id:"create-a-new-doc"},"Create a New Doc"),(0,o.kt)("h3",{id:"pull--the-github-repo-to-your-local-repo"},"Pull  the ",(0,o.kt)("a",{parentName:"h3",href:"github.com/waldo-vision"},"Github repo")," to your local repo."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Pull from Github",src:A(1825).Z})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone github.com/waldo-vision/docs.git\n")),(0,o.kt)("h3",{id:"how-to-create-a-new-document"},"How to create a new document"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You will need to know how to create markdown ( .md) files. If you are not so familiar with markdown, use an online compiler like ",(0,o.kt)("a",{parentName:"p",href:"https://stackedit.io"},"stackedit"),".")),(0,o.kt)("p",null,"When creating internal links remember to use the docusaurus component "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<Link to="./docs/Leads/">\n    <h3> I am a link </h3>\n</Link> \n')),(0,o.kt)("h2",{id:""}),(0,o.kt)("h5",{id:"header--variables"},"Header / Variables"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Headers and variables should be set at the top of the page. ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'---\nsidebar_position: 1   # Document position on the sidebar\ntitle: New Document   # The title of the document, this will set the document sidebar name aswell\n                      # NOTE: \n                          # (1/2) If the page has a title tag " # " then the tag will override the title variable. \n                          # (2/2) If page title is overrided the siddebar name is not effected\nid: document          # The id is the identifier of the page (we will not be needing it 99% of the time)\ntags:\n    - Questions       # Tags are rendered by docusaurus | Any tags will then be added to the "all tags" page where anyone can view them\n    - Help\n    - Support\nslug: ./document/\n---\n')),(0,o.kt)("h5",{id:"headings-and-title"},"Headings and Title"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Docusaurus automatically renders the titles and the headers ")),(0,o.kt)("p",null,"Titles:\n",(0,o.kt)("inlineCode",{parentName:"p"},"#\tThis is a title"),"\nIf this is at the top of the document it will override the title (if specified in the variable / header space) otherwise it will act as a normal title"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"## This is a  subtitle"),"\nAny subtitles wll be rendered by docusaurus "),(0,o.kt)("p",null,"Remember to test your new file by running the react app and test all internal links:\n",(0,o.kt)("inlineCode",{parentName:"p"},"$ yarn run start")),(0,o.kt)("h2",{id:"pushing-your-new-document"},"Pushing your new document"),(0,o.kt)("p",null,"When you have finished creating your document, tested and is happy with it, push to the repo under a branch name of ",(0,o.kt)("inlineCode",{parentName:"p"},"docs/{directory path :: otherwise skip}/{your document id or name}")," otherwise it will not be merged into the repo. Make sure you read up on out ",(0,o.kt)("a",{parentName:"p",href:"github.com/waldo-vision"},"Git Workflow")))}c.isMDXComponent=!0},1825:function(e,t){t.Z="data:image/png;base64,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"}}]);