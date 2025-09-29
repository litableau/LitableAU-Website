# LitableAU-Website

## Gallery Section
### Adding Events to the Gallery

To add or edit events in the gallery, update the `app/data/gallery-data.tsx` file. Each event should follow this structure:

```typescript
{
    id: uuidv4(),                // add this as is, it automatically assigns a unique ID
    eventName: "Event Name",         // Name of the event (e.g., "Annual Stage Performance")
    title: "EVENT TITLE",            // Short title in uppercase (e.g., "ON STAGE")
    date: "MM/DD/YY",                // Date in MM/DD/YY format (e.g., "04/04/25")
    description: "Event description",// Brief description of the event
    imageUrl: "https://image-url",   // URL of the event image
}
```

**Instructions:**
1. Add a new object to the `galleryEvents` array for each event you want to display.
2. Use a valid image URL for `imageUrl`.
3. Save your changes. The gallery page will automatically update with the new events.
4. You can edit or remove events by modifying or deleting their objects in the array.
5. The gallery displays the latest images first, no matter how it is ordered in the array.So, you can add the event anywhere in the array.

**Note:**
- All event data is managed in `app/data/gallery-data.tsx` for easy maintenance.
- No need to edit component code for gallery updates.
