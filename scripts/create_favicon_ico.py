from PIL import Image, ImageEnhance
from pathlib import Path

src = Path('public/GoSirat Logo FV icon-04.jpg')
out = Path('public/favicon.ico')

# Open and convert source image
img = Image.open(src).convert('RGBA')

# Enhance contrast and sharpness for better tab visibility
enhancer = ImageEnhance.Contrast(img)
img = enhancer.enhance(1.5)  # Increase contrast by 50%

enhancer = ImageEnhance.Sharpness(img)
img = enhancer.enhance(2.0)  # Double the sharpness

# Create larger sizes for crisp display
sizes = [(32, 32), (64, 64), (128, 128), (256, 256)]
icons = []

for size in sizes:
    resized = img.resize(size, Image.Resampling.LANCZOS)
    icons.append(resized)

# Save as ICO with all sizes
icons[0].save(out, format='ICO', sizes=sizes, append_images=icons[1:])
print(f'created {out} with enhanced contrast and sizes: {sizes}')
