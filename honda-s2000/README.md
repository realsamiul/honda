# Honda S2000 Website Recreation

This is a faithful recreation of the Honda S2000 website, built with Next.js and deployed on Vercel. The project follows the original structure exactly while using modern web technologies.

## Features

- **Exact HTML Structure**: Preserves the original HTML structure and content
- **GSAP Animations**: Recreates the complex animations from the original 43300.js file
- **Responsive Design**: Maintains the original design while ensuring mobile compatibility
- **Vercel Deployment**: Optimized for Vercel's static site generation

## Project Structure

```
honda-s2000/
├── public/
│   ├── css/           # Original CSS files
│   ├── js/            # Original JavaScript files
│   ├── lottie/        # Lottie animation files
│   └── cloudfront/    # jQuery and other dependencies
├── src/
│   ├── app/           # Next.js app directory
│   └── lib/           # GSAP animations and utilities
└── next.config.js     # Next.js configuration
```

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Deploy to Vercel

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Vercel will automatically detect the Next.js configuration and deploy

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. The static files will be generated in the `out` directory

## Original Files Preserved

- All original CSS files are preserved in `public/css/`
- All original JavaScript files are preserved in `public/js/`
- The exact HTML structure is maintained in the React components
- GSAP animations are recreated with the same timing and effects

## Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **GSAP**: Animation library (exact recreation of original animations)
- **Vercel**: Deployment platform

## Notes

This recreation follows the guide's methodology of understanding the original artist's intent while using modern tools for execution. The animations and interactions are preserved exactly as they were in the original website.
