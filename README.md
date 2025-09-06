
# LitableAU-Website

## Gallery Section
### Adding Events to the Gallery

To add a new event to the gallery, edit the `app/data/gallery-data.tsx` file:

1. Follow this template structure:
```typescript
{
    id: "unique-event-id",        // Unique ID in kebab-case(eg. my-event-2023)
    title: "EVENT TITLE",         // Title in uppercase(eg. MY EVENT 2023)
    date: "DD-MM-YYYY",          // Date in DD-MM-YYYY format(eg. 25-12-2023)
    description: "Event description text",  // Brief event description
    images: [
        "https://image-url-1",    // List of image URLs
        "https://image-url-2",
        // Add more images...
    ]
}
```

2. Ensure the `id` is unique and follows the kebab-case format.
3. Atleast include three images for proper display in the gallery.
4. Save the file and commit your changes.
5. The new event will automatically appear in the gallery section of the website. 
6. Events are automatically sorted by date with most recent first.

