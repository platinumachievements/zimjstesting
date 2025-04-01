# ZIM Card Component System

A modular card component system built with ZIM.js, featuring multiple card designs and interactive features.

## Features

- Multiple card designs (Classic and Modern)
- Interactive card components with drag functionality
- Sample PlayStation-themed card data
- Grid view for displaying multiple cards
- Responsive layout with scrollable windows
- Modular architecture for easy customization
- Entry page with navigation to all views

## Project Structure

```
├── assets/                 # Asset files (images, etc.)
│   └── test-asset.png     # Test image for card designs
├── zim-card-component.js  # Core card component implementation
├── zim-card-styles.js     # Card design styles and templates
├── zim-card-samples.js    # Sample card data
├── index.html            # Entry page with navigation
├── zim-card-editor.html   # Card editor interface
├── zim-card-grid1.html    # Grid view of all cards
└── gallery.html          # Interactive gallery view
```

## Components

### ZIMCard Component
- Base card component with customizable properties
- Supports multiple designs (Classic and Modern)
- Interactive features (dragging, design switching)
- Responsive layout and sizing

### Card Designs
1. Classic Design
   - Traditional card layout
   - Content window with title and description
   - Image support in content area
   - Rounded corners and border

2. Modern Design
   - Contemporary layout
   - Clean typography
   - Image integration
   - Subtle shadows and borders

## Views

### Entry Page (index.html)
- Central navigation hub
- Links to all system views
- Sample card preview
- Clean, modern interface
- Responsive design

### Editor View (zim-card-editor.html)
- Edit card properties in real-time
- Switch between card designs
- Change colors and content
- Preview changes immediately

### Grid View (zim-card-grid1.html)
- Display multiple cards in a grid layout
- Scrollable interface
- Non-interactive cards for display
- Responsive layout

### Gallery View (gallery.html)
- Interactive card display
- Drag and drop functionality
- Random card placement
- Full-screen experience

## Setup

1. Ensure you have the required assets in the `/assets` directory
2. Open `index.html` in a web browser to access the navigation hub
3. The ZIM.js framework will be loaded automatically

## Customization

### Adding New Designs
1. Add new design template to `zim-card-styles.js`
2. Update the design options in the editor
3. Test the new design in all views

### Modifying Card Properties
- Edit `zim-card-component.js` for core changes
- Update `zim-card-styles.js` for visual changes
- Modify `zim-card-samples.js` for sample data

## Dependencies

- ZIM.js Framework (loaded from CDN)
- CreateJS (included with ZIM.js)

## License

This project is open source and available under the MIT License. 