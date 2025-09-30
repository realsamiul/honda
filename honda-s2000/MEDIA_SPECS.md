# Honda S2000 Website - Media Assets Specification

## Complete Media Asset List

### Video Assets

#### 1. Hero Video (Primary)
- **File**: `herovid (1).mp4`
- **Size**: 12,704,970 bytes (12.7 MB)
- **Type**: MP4 Video
- **Purpose**: Main hero video for website landing
- **Usage**: Auto-playing background video
- **Quality**: High quality (largest file size)

#### 2. Hero Video V2 (Alternative)
- **File**: `herovid v2 (1).mp4`
- **Size**: 12,704,970 bytes (12.7 MB)
- **Type**: MP4 Video
- **Purpose**: Alternative version of hero video
- **Usage**: Fallback or A/B testing variant
- **Quality**: Same as original hero video

#### 3. Driving Trim Video
- **File**: `driving trim (1).mp4`
- **Size**: 2,357,772 bytes (2.4 MB)
- **Type**: MP4 Video
- **Purpose**: Secondary video content (driving footage)
- **Usage**: Interactive or section-specific video
- **Quality**: Lower file size suggests different resolution/compression

#### 4. Driving Trim V2 (Alternative)
- **File**: `driving trim v2 (1).mp4`
- **Size**: 2,357,772 bytes (2.4 MB)
- **Type**: MP4 Video
- **Purpose**: Alternative version of driving trim video
- **Usage**: Fallback or A/B testing variant
- **Quality**: Same as original driving trim

## Media Strategy Analysis

### File Size Distribution
- **Hero Videos**: 25.4 MB total (2 files × 12.7 MB each)
- **Driving Videos**: 4.7 MB total (2 files × 2.4 MB each)
- **Total Media**: 30.1 MB

### Version Strategy
- Each video has 2 versions (likely for A/B testing or different cuts)
- Hero videos are 5x larger than driving videos
- Suggests hero videos are higher resolution/quality
- Driving videos are more compressed for faster loading

### Performance Considerations
- **Total Load**: 30.1 MB of video content
- **Optimization**: Videos should be lazy-loaded or loaded on demand
- **CDN**: Consider using a CDN for video delivery
- **Compression**: Additional compression may be needed for mobile

## Implementation Notes

### Video Element Configuration
```html
<video 
  className="hero-video" 
  autoPlay 
  muted 
  loop 
  playsInline
  poster="/media/herovid-poster.jpg"
>
  <source src="/media/herovid (1).mp4" type="video/mp4" />
  <source src="/media/herovid v2 (1).mp4" type="video/mp4" />
</video>
```

### Key Attributes
- **autoPlay**: Videos start automatically
- **muted**: Required for autoplay in most browsers
- **loop**: Videos repeat continuously
- **playsInline**: Prevents fullscreen on mobile
- **poster**: Placeholder image while loading

### Fallback Strategy
- Multiple source elements for browser compatibility
- Fallback text for unsupported browsers
- Version variants for A/B testing

## Missing Information

To complete the media specification, we need:
- **Video dimensions** (width × height)
- **Video duration** (length in seconds)
- **Video codec** (H.264, H.265, etc.)
- **Video bitrate** (quality indicator)
- **Frame rate** (FPS)
- **Audio tracks** (if any)

## Recommendations

1. **Optimization**: Consider creating multiple quality versions for different devices
2. **Loading**: Implement lazy loading for better performance
3. **CDN**: Use a CDN for faster video delivery
4. **Analytics**: Track video engagement and performance
5. **Accessibility**: Add captions and audio descriptions if needed

## File Structure
```
public/media/
├── herovid (1).mp4          # 12.7 MB
├── herovid v2 (1).mp4       # 12.7 MB
├── driving trim (1).mp4     # 2.4 MB
└── driving trim v2 (1).mp4  # 2.4 MB
```
