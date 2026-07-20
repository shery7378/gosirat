import os
import re

replacements = {
    r'text-\[#?0D6332\]': 'text-gosirat-green-alt',
    r'bg-\[#?0D6332\]': 'bg-gosirat-green-alt',
    r'text-\[#?0d6332\]': 'text-gosirat-green-alt',
    r'bg-\[#?0d6332\]': 'bg-gosirat-green-alt',
    
    r'text-\[#?2ecc71\]': 'text-gosirat-accent',
    r'bg-\[#?2ecc71\]': 'bg-gosirat-accent',
    
    r'text-\[#?101828\]': 'text-gosirat-text-dark',
    r'bg-\[#?101828\]': 'bg-gosirat-text-dark',
    
    r'text-\[#?fff\]': 'text-white',
    r'bg-\[#?fff\]': 'bg-white',
    r'border-\[#?fff\]': 'border-white',
    
    r'text-\[#?bababa\]': 'text-gosirat-gray-light',
    r'bg-\[#?bababa\]': 'bg-gosirat-gray-light',
    r'border-\[#?bababa\]': 'border-gosirat-gray-light',
    
    r'text-\[#?89b99a\]': 'text-gosirat-green-light',
    r'bg-\[#?89b99a\]': 'bg-gosirat-green-light',
    
    r'bg-\[#?F7F9F6\]': 'bg-gosirat-bg-light',
    r'text-\[#?F7F9F6\]': 'text-gosirat-bg-light',
    r'bg-\[#?f3f7f4\]': 'bg-gosirat-bg-light',
    r'bg-\[#?F8FBF8\]': 'bg-gosirat-bg-light',
    r'bg-\[#?f8fbf8\]': 'bg-gosirat-bg-light',
    
    r'text-\[#?124225\]': 'text-gosirat-green-dark',
    r'bg-\[#?124225\]': 'bg-gosirat-green-dark',
    r'text-\[#?12532c\]': 'text-gosirat-green-dark',
    r'bg-\[#?12532c\]': 'bg-gosirat-green-dark',
    
    r'text-\[#?8CE0B4\]': 'text-gosirat-accent-light',
    r'bg-\[#?8CE0B4\]': 'bg-gosirat-accent-light',
    
    r'text-\[#?1a1a1a\]': 'text-gosirat-dark-alt',
    r'bg-\[#?1a1a1a\]': 'bg-gosirat-dark-alt',
    
    r'leading-\[normal\]': 'leading-normal',
    r'tracking-\[normal\]': 'tracking-normal',
    r'text-\[inherit\]': 'text-inherit',
    
    # Capitalized variants of previously mapped ones
    r'text-\[#?F4F7F4\]': 'text-gosirat-light',
    r'bg-\[#?F4F7F4\]': 'bg-gosirat-light',
    r'border-\[#?F4F7F4\]': 'border-gosirat-light',
    
    r'text-\[#?09131A\]': 'text-gosirat-darker',
    r'bg-\[#?09131A\]': 'bg-gosirat-darker',
    
    r'text-\[#?0C140F\]': 'text-gosirat-black',
    r'bg-\[#?0C140F\]': 'bg-gosirat-black',
}

files_updated = 0

for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.jsx'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = content
            for pattern, repl in replacements.items():
                new_content = re.sub(pattern, repl, new_content)
                
            if new_content != content:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {path}")
                files_updated += 1

print(f"Total files updated: {files_updated}")
