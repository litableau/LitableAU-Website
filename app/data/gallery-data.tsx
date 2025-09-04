export interface GalleryEvent {
    id: string;
    title: string;
    date: string;
    description: string;
    images: string[];
}

export const galleryEvents: GalleryEvent[] = [
    {
        id: "litablae-24",
        title: "LITABLAE '24 : LITCLUB'S FLAGSHIP EVENT",
        date: "04/04/25",
        description: "Our premier literary festival featuring competitions, workshops, and cultural performances.",
        images: [
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=600&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop&crop=faces",
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=faces"
        ]
    },
    {
        id: "poetry-night",
        title: "POETRY NIGHT",
        date: "15/03/25",
        description: "An evening of beautiful verses and spoken word performances by talented students.",
        images: [
            "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&h=600&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=top",
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop&crop=bottom",
            "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=600&fit=crop&crop=faces",
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop&crop=edges"
        ]
    },
    {
        id: "fandom-quiz",
        title: "FANDOM QUIZ",
        date: "04/04/25",
        description: "Test your knowledge of literature, movies, and pop culture in this exciting quiz competition.",
        images: [
            "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=600&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&h=600&fit=crop&crop=faces",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=entropy"
        ]
    },
    {
        id: "writing-workshop",
        title: "CREATIVE WRITING WORKSHOP",
        date: "22/02/25",
        description: "Interactive workshop focused on developing creative writing skills and storytelling techniques.",
        images: [
            "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop&crop=entropy",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=bottom",
            "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=600&fit=crop&crop=top"
        ]
    },
    {
        id: "book-discussion",
        title: "MONTHLY BOOK DISCUSSION",
        date: "10/01/25",
        description: "Deep dive into contemporary literature with fellow book enthusiasts and literary discussions.",
        images: [
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&h=600&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop&crop=faces",
            "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=600&fit=crop&crop=entropy",
            "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop&crop=edges"
        ]
    }
];