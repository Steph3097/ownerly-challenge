# ownerly-challenge

Live Site: http://gina-lee.com/ownerly-challenge/ 

## Approach

### Create 3 views:

- Home page - initial view

- Loading page - redirected here after form submission. Async request happens here, and does not redirect to the results page until the request is complete.

- Results page - shows the result, or indicates no result. 
  
### Build out pages using a "Mobile-First" approach.

Starting from mobile to desktop in terms of styling is easiest to me.

On top of this, I try to figure out common styling and group them together, to decrease code written and the file size. 
This also helps styling other pages quicker due to the UI branding & common themes it brings with it. 

### After pages are built out, set up form validation.

To get the error message styling like the design, I had to omit the `type="email"` and `required` attributes for the input. 
Built out this check from scratch within the onsubmit callback function. If valid, redirects to the loading page and passes the email input value as a param.

### Finally, the fun part - code clean up.

I extracted common components (Header & Footer) to create re-usable custom web components. 
This way it is written once and all I have to do is import the JS file and call the component name.

```html
<!-- index.html -->
<head>
  <script src="./components/header.js"></script>
</head>
<body>
  <company-logo-header></company-logo-header>
</body>
```
