# BaseHTML - Beautify Your Default HTML Forms 

BaseHTML is a simple and easy-to-use CSS and JavaScript library that helps developers make their default HTML forms look beautiful with minimal effort. It's perfect for web developers who want to create a professional and sleek look for their website without spending too much time on design.

## Features

- Simple and easy-to-use library
- Responsive design that works on all devices
- Lightweight and fast-loading CSS and JavaScript files
- Compatible with all modern web browsers

## Getting Started

Getting started with BaseHTML is easy. Simply include the following CDN links in your HTML file:

```html
<!-- BaseHTML CSS-->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/searchhero/basehtml/css/basehtml.css">
<script src="https://cdn.jsdelivr.net/gh/searchhero/basehtml/js/basehtml.js"></script>
```

This JavaScript file is not required to be included by default. However, if you want to use the BaseAlert function to display an alert box message with a success status, you need to include this file in your HTML code.

```html
<!-- BaseHTML JS-->
<script src="https://cdn.jsdelivr.net/gh/searchhero/basehtml/js/basehtml.js"></script>
```

The BaseAlert function is a part of the BaseHTML library, and it allows you to create custom alert boxes on your webpage. The function takes two parameters: message and type.

The message parameter is a string that represents the message you want to display in the alert box. You can pass any text you want as the message, such as "Hello Universe".

The type parameter is a string that represents the type of the alert box. The available types are "success" and "error". If you pass "success" as the type, the alert box will have a green background, and if you pass "error" as the type, the alert box will have a red background.

Here's an example of how you can use the BaseAlert function to display an alert box with the message "Hello Universe" in a green background:

```html
BaseAlert('Hello Universe', 'success');
```

And here's an example of how you can use the BaseAlert function to display an alert box with the message "Error occurred" in a red background:

```html
BaseAlert('Error occurred', 'error');
```

By using the BaseAlert function with the appropriate parameters, you can easily create custom alert boxes that match the design of your website and provide a clear indication of the message you want to convey to your users.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/searchhero/basehtml/css/basehtml.css">
    <title>Base HTML Document</title>
</head>
<body>
    <form>
		<h4> Hello Universe </h4>
	</form>
    <script src="https://cdn.jsdelivr.net/gh/searchhero/basehtml/js/basehtml.js"></script>
</body>
</html>
```

Once you have added these links to your HTML file, you can start using BaseHTML on your default HTML forms.

## Usage

BaseHTML appears to be a web development framework or library that is designed to be user-friendly and straightforward. According to the statement you provided, one of its features is that it does not require the addition of any classes when using it to build web pages.

In HTML and CSS, classes are often used to apply specific styles or behaviors to certain elements on a page. However, by not requiring the use of classes, BaseHTML may simplify the process of creating web pages for developers who are new to web development or who prefer a minimalist approach.

It's important to note that while not using classes may make BaseHTML simpler to use, it may also limit the flexibility and customization options available to developers who want more control over the appearance and functionality of their web pages.

```html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">

  <label for="email">Email:</label>
  <input type="email" id="email" name="email">

  <button type="submit">Submit</button>
</form>
```

By default, BaseHTML will apply its default styles to your form elements.

Here are some forms that we have already created for you:
- [Verification](otp-verification.html)
- [Encode](encode-text.html)
- [Decode](decode-text.html)
- [Login](login.html)
- [Registration](registration.html)
- [Search box](search-box.html)
- [Contact us](contact-us.html)

## License

BaseHTML is released under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use it in your personal and commercial projects. If you have any questions or suggestions, please feel free to open an issue or pull request on [GitHub](https://github.com/searchhero/basehtml).

