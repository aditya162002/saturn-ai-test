# Meeting Summary App

A modern web application for managing meeting summaries, action items, and transcripts. Built with React, TypeScript, and Tailwind CSS.

## Features

- Drag and drop interface for organizing meeting items
- Real-time transcript display
- Responsive layout
- Modern UI with smooth animations
- TypeScript for type safety
- Tailwind CSS for styling

## Prerequisites

- Node.js 16.x or later
- npm 7.x or later

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd meeting-summary-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
  ├── components/         # React components
  │   ├── Header.tsx     # Top navigation bar
  │   ├── Sidebar.tsx    # Left navigation sidebar
  │   ├── MeetingSection.tsx  # Draggable meeting sections
  │   └── TranscriptSidebar.tsx  # Right transcript panel
  ├── App.tsx            # Main application component
  ├── main.tsx          # Application entry point
  └── index.css         # Global styles
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- react-beautiful-dnd
- Headless UI
- Heroicons

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 