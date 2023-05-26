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
<!-- BaseHTML CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/searchhero/basehtml/css/basehtml.css">
```

This JavaScript file is not required to be included by default. However, if you want to use the BaseAlert function to display an alert box message with a success status, you need to include this file in your HTML code.

```html
<!-- BaseHTML JS -->
<script src="https://cdn.jsdelivr.net/gh/searchhero/basehtml/js/basehtml.js"></script>
```

This documentation provides an overview of the functions available in the "baseHTML" repository.

## BaseAlert(message, type)

Displays an alert message on the webpage.

- Parameters:
  - `message` (string): The message to be displayed in the alert.
  - `type` (string): Optional. The type of the alert. Possible values: "error" or any other value (default: "success").

## CloseBaseAlert()

Closes the currently displayed alert.

## CopyToClipboard(copyData)

Copies the specified data to the clipboard.

- Parameters:
  - `copyData` (string): The data to be copied to the clipboard.

## typeWriter(htmlinside, text, time, outtype)

Simulates typing effect on an HTML element.

- Parameters:
  - `htmlinside` (HTMLElement): The HTML element where the text will be typed.
  - `text` (string): The text to be typed.
  - `time` (number): The delay between each character being typed (in milliseconds).
  - `outtype` (string): Optional. The type of the output. Possible values: "h" (HTML element innerHTML) or any other value (default: "h").

## preloader(action)

Controls the visibility of a preloader element.

- Parameters:
  - `action` (string): The action to be performed. Possible values: "true" (show preloader) or any other value (hide preloader).

## shuffleArray(array)

Randomly shuffles the elements in an array.

- Parameters:
  - `array` (array): The array to be shuffled.

## capitalizeString(string)

Capitalizes the first letter of a string.

- Parameters:
  - `string` (string): The string to be capitalized.

## formatNumber(number, decimalPlaces)

Formats a number with the specified number of decimal places.

- Parameters:
  - `number` (number): The number to be formatted.
  - `decimalPlaces` (number): The number of decimal places to round the number to.

## isObjectEmpty(object)

Checks if an object is empty (contains no properties).

- Parameters:
  - `object` (object): The object to be checked.

## debounce(func, delay)

Creates a debounced version of a function that delays its execution.

- Parameters:
  - `func` (function): The function to be debounced.
  - `delay` (number): The delay (in milliseconds) before the debounced function is executed.

## getRandomInt(min, max)

Generates a random integer between the specified minimum and maximum values (inclusive

).

- Parameters:
  - `min` (number): The minimum value.
  - `max` (number): The maximum value.

## calculateFactorial(number)

Calculates the factorial of a number.

- Parameters:
  - `number` (number): The number to calculate the factorial for.

## encodeText(text)

Encodes a text string using base64 encoding.

- Parameters:
  - `text` (string): The text to be encoded.

## decodeText(encodedText)

Decodes a base64-encoded text string.

- Parameters:
  - `encodedText` (string): The base64-encoded text to be decoded.

## generateRandomText(length)

Generates a random text string with the specified length.

- Parameters:
  - `length` (number): The length of the random text string to be generated.

## formatDate(date)

Formats a date object into a human-readable string.

- Parameters:
  - `date` (Date): The date object to be formatted.

## getURLParameters(url)

Parses the query parameters of a URL and returns them as an object.

- Parameters:
  - `url` (string): The URL to parse.

## generateUniqueId()

Generates a unique identifier string.

## chunkArray(array, size)

Splits an array into smaller chunks of the specified size.

- Parameters:
  - `array` (array): The array to be chunked.
  - `size` (number): The size of each chunk.

## getRandomImageUrl(resolution, imgcategory)

Generates a URL for a random image based on the specified resolution and image category.

- Parameters:
  - `resolution` (string): Optional. The resolution of the image (default: "1920x1080").
  - `imgcategory` (string): Optional. The category of the image (default: "coding,technology").

## generateRandomQuote()

Retrieves a random quote from an external API.

- Returns:
  - A Promise that resolves to a random quote.

Please note that some functions may have additional parameters or optional parameters. Refer to the function descriptions for more details.

Feel free to customize this documentation template to suit your needs.

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
        <h1>
            Hello Universe
        </h1>
    </form>
    <script src="https://cdn.jsdelivr.net/gh/searchhero/basehtml/js/basehtml.js"></script>
</body>
</html>
```

Once you have added these links to your HTML file, you can start using BaseHTML on your default HTML forms.

## Usage

BaseHTML appears to be a web development framework or library that is designed to be user-friendly and straightforward. According to the statement you provided, one of its features is that it does not require the addition of any classes when using it to build web pages.

In HTML and CSS, classes are often used to apply specific styles or behaviors to certain elements on a page. However, by not requiring the use of classes, BaseHTML may simplify the process of creating web pages for developers who are new to web development or who prefer a minimalist approach.

It's important to note that while not using classes may make BaseHTML simpler to use, it may also limit the flexibility and customization options available to developers who want more control over the appearance and functionality of their

 web pages.

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
