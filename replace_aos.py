import os
import glob
import random
import re

components_dir = r'c:\wamp64\www\gosirat\src\components'
files = glob.glob(os.path.join(components_dir, '**', '*.tsx'), recursive=True)

# User explicitly requested to remove fade up/down and use fade-in, fade-out, zoom-in
animations = [
    'fade-in', 'fade-out', 'zoom-in'
]

random.seed(42)

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if 'data-aos="' in content:
        
        def replacer(match):
            anim = random.choice(animations)
            return f'data-aos="{anim}"'
        
        new_content = re.sub(r'data-aos="[^"]+"', replacer, content)
        
        if content != new_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f'Randomized animations in {os.path.basename(filepath)}')
