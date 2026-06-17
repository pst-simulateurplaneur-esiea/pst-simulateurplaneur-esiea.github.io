# Glider Project Website

This is a simple, beginner-friendly website featuring a parallax scrolling effect and documentation sections.

## Files Included

- **index.html** - The main HTML structure of the website
- **style.css** - All the styling and visual design
- **script.js** - JavaScript code for the parallax scrolling effect
- **README.md** - This documentation file

## Setup Instructions

### 1. Prepare Your Images

You need to add two images to the same folder as these files:

- **glider_image.png** - Image of the glider (transparent background recommended)
- **mountain_image.jpg** - Mountain landscape for the background

**Important:** Make sure these image files are in the same directory as `index.html`.

### 2. Open the Website

Simply double-click on `index.html` to open it in your web browser.

## How It Works

### HTML Structure (index.html)

The HTML file is organized into sections:

1. **Parallax Section** - Contains the mountain background and glider image
2. **Description Section** - Project overview with black background
3. **Documentation Categories** - Two columns for different documentation types
4. **Footer** - Copyright information

### CSS Styling (style.css)

The CSS file includes:

- **General Styles** - Basic reset and font settings
- **Parallax Styles** - Positioning for the parallax layers
- **Content Styles** - Black background and text styling
- **Documentation Cards** - Styled boxes for each category
- **Responsive Design** - Mobile-friendly adjustments

### JavaScript (script.js)

The JavaScript creates the parallax effect by:

1. Listening for scroll events
2. Moving the background slower than the foreground
3. Creating a depth illusion

**Key concept:** The background moves at 50% scroll speed, while the foreground moves at 80% speed.

## Customization Guide

### Changing Colors

In `style.css`, look for these sections:

- **Background color:** `.main-content { background-color: #000000; }`
- **Card colors:** `.doc-category { background-color: #1a1a1a; }`
- **Header gradient:** `.category-header { background: linear-gradient(...) }`

### Changing Text

Open `index.html` and edit the text between the HTML tags:

```html
<h2>About the Project</h2>
<p>Your new text here</p>
```

### Adjusting Parallax Speed

In `script.js`, change these values:

```javascript
let backgroundMove = scrollPosition * 0.5;  // Lower = slower
let foregroundMove = scrollPosition * 0.8;   // Higher = faster
```

### Adding More Documentation Items

In `index.html`, copy and paste this structure within a category:

```html
<li>
    <h4>New Item Title</h4>
    <p>Description of the new item</p>
</li>
```

## Browser Compatibility

This website works on:
- Chrome, Firefox, Edge (latest versions)
- Safari (latest version)
- Mobile browsers

## Troubleshooting

**Problem:** Images don't show up
- **Solution:** Make sure image files are in the same folder as `index.html`
- Check that filenames match exactly: `glider_image.png` and `mountain_image.jpg`

**Problem:** Parallax effect doesn't work
- **Solution:** Make sure `script.js` is in the same folder and the filename is correct

**Problem:** Website looks broken
- **Solution:** Ensure `style.css` is in the same folder as `index.html`

## Tips for Beginners

1. **Use a text editor:** Visual Studio Code, Notepad++, or even Notepad
2. **Refresh the browser:** Press F5 or Ctrl+F5 to see changes
3. **Use browser DevTools:** Press F12 to inspect elements and debug
4. **Make backups:** Copy files before making major changes
5. **Test on different screens:** Check how it looks on mobile and desktop

## Understanding the Code

### What is Parallax?

Parallax is when objects move at different speeds to create a 3D depth effect. It's like looking out a car window - nearby trees move fast, distant mountains move slowly.

### How CSS Works

CSS uses selectors to target HTML elements:
- **Class selector:** `.parallax-container` (matches class="parallax-container")
- **ID selector:** `#background-layer` (matches id="background-layer")
- **Element selector:** `body` (matches all <body> tags)

### How JavaScript Works

JavaScript listens for events (like scrolling) and changes the webpage:
1. `window.addEventListener('scroll', ...)` - Watch for scrolling
2. `window.pageYOffset` - Get scroll position
3. `element.style.transform` - Move elements

## Next Steps

- Add more content to the documentation sections
- Include actual documentation links or downloads
- Add a navigation menu
- Include contact information
- Optimize images for faster loading

## License

Feel free to use and modify this code for your projects!

---

**Created:** 2026
**For:** Glider Project Documentation
