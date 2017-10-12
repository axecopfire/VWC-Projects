# Week 2, Day 2: HTML

# What is HTML? 

## Objectives
1. Explain what HTML is and why it's important in the context of web development
2. Read a basic HTML document 
3. Use basic HTML tags

## Lesson

### What is HTML?

HTML, or Hyper Text Markup Language, is a markup language which describes the structure of web pages and how content should be displayed. Web browsers, such as Mozilla Firefox, Internet Explorer, and Google Chrome, interpret the HTML code and use it to render output. Unlike Javascript and other programming languages, markup languages like HTML don't have any logic behind them. Instead, they simply surround content and tell web browsers how that content should be displayed.

Generally speaking, HTML is the language of the web. Every web page you've ever visited is structured using HTML code. Being able to read and understand an HTML document is one of the most important tools in a developer's toolbox.

### HTML Syntax

HTML consists of different elements. Each element consists of tags, which wrap around content. For example, say we wanted `Hello World` to appear as a separate paragraph. We could use the `p` element, which consists of an opening `p` tag and a closing `p` tag. 

```html
<p>Hello World</p>
```

Elements, like our `p` tags above, won't be displayed in the browser. Instead, they affect how the content itself is displayed. 

We can also alter any number of attributes inside of the opening tags. For example, the `a` element which is used for links,  has an `href` attribute to determine the address of the link. If we wanted to link to www.vetswhocode.io, we could do so as follows:

```html
<a href="www.vetswhocode.io">Vets Who Code</a>
```

This would render as:

[Vets Who Code](http://www.vetswhocode.io)

We can also nest elements inside of each other. To have a link displayed as a separate paragraph, we could nest an `a` element inside of a `p`. 

```html
<p>This <a href="http://www.google.com">link</a> will be a part of a separate paragraph.</p>
```

### Basic Document Structure

Let's look at the basic structure of and HTML document. HTML begins with a "doctype declaration" tag, which tells our web browser which version of HTML to use. Since it's not wrapping any content, our doctype declaration doesn't require a closing tag. To use HTML5, the current up-to-date version, we can simply declare `<!DOCTYPE html>`. 

```html
<!DOCTYPE html>

```

Next, we add an opening and closing `html` tag. This tells the web browser to interpret everything inside as HTML code. 

```html
<!DOCTYPE html>
<html>
	

</html>
```

Every HTML page is made up of two sections, a `head` and a `body`. The `head` element contains meta data and other information for the browser, while the `body` element contains the actual content which will be displayed. 

```html
<!DOCTYPE html>
<html>
	<head>
		<!-- data for the web browser will be in here -->
	
	</head>
	
	<body>
		<! -- content of our page will be here! -->
	
	</body>
</html>
```

### Common HTML elements

We've already looked at some common HTML elements, such as `a` and `p`. Let's take a look at some more HTML elements.

#### Headers

HTML gives us access to different header elements, ranging from `h1` to `h6`, with `h1` being the largest and `h6` being the smallest. 

```html
<h1>Dogs!</h1>
<h3>Why Dogs are Great</h3>
	
<h6>Different Breeds</h6>	
```

In addition to changing how the text is displayed, search engines use headers to help determine what a web page is about. 

#### Images

We can embed images in our web pages using the `img` element. The `img` element doesn't have a closing tag. The `src` attribute tells the browser where to find the image. The `alt` attribute will be displayed if an image can't be loaded, and also describes the image to search engines.  

`<img src="URL_TO_IMAGE" alt="Picture of a Dog">`

#### Lists

Some other useful HTML elements are lists. We can make bulleted, or unordered lists, using opening and closing `ul` tags. Inside, we can nest an `li`, or "list item" element for each item in our list. 

```html
<h5>My Favorite Things in No Particular Order</h5>
<ul>
	<li>Coffee</li>
	<li>Vinyl Records</li>
	<li>Pickling</li>
</ul>
```

This would render as:
____

<h5>My Favorite Things in No Particular Order</h5>
<ul>
	<li>Coffee</li>
	<li>Vinyl Records</li>
	<li>Pickling</li>
</ul>
____

We can also make a numbered, or ordered list, using an `ol` tag. This functions in the same was as our unordered list, only with numbers instead of bullet points.

```html
<h5>Top 5 Bars in Nashville</h5>
<ol>
	<li>Patterson House</li>
	<li>Hemmingway's</li>
	<li>Honky Tonk</li>
	<li>Bastion</li>
	<li>The Centennial</li>
</ol>
```
Would render as:

____

<h5>Top 5 Bars in Nashville</h5>
<ol>
	<li>Patterson House</li>
	<li>Hemmingway's</li>
	<li>Honky Tonk</li>
	<li>Bastion</li>
	<li>The Centennial</li>
</ol>
____ 

#### Comments
We can also include comments in our HTML code. These won't get rendered to the browser at all: they're just helpful notes for the programmer. 

```html
<h5>Top 5 Bars in Nashville</h5>
<!-- This won't get rendered, just a helpful note -->
```
## Resources

[HTML Fundamentals](https://www.youtube.com/watch?v=tuDKQxfiXmY)
[HTML5](https://youtu.be/IsXEVQRaTX8)

# HTML5 Cheat Sheet

![image](https://cdn-images-1.medium.com/max/2000/1*jqLVA-UXJAStzEjggAOmlQ.jpeg)

##### Source: [Bradley Nice](https://medium.com/level-up-web/the-mega-html5-cheatsheet-e8c479b1c521) Medium Post.

# Homework

Use HTML5 Boilerplate to map out the skeleton of your porfolio site.
[HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate)

Pick three words the describe you best for class tomorrow.
