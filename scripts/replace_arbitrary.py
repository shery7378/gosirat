import os
import re

replacements = {
    r'font-\[Inter\]': 'font-sans',
    
    r'text-\[#176938\]': 'text-gosirat-green',
    r'bg-\[#176938\]': 'bg-gosirat-green',
    r'from-\[#176938\]': 'from-gosirat-green',
    r'to-\[#176938\]': 'to-gosirat-green',
    r'border-\[#176938\]': 'border-gosirat-green',
    r'fill-\[#176938\]': 'fill-gosirat-green',
    r'stroke-\[#176938\]': 'stroke-gosirat-green',
    
    r'text-\[#57605b\]': 'text-gosirat-gray',
    r'bg-\[#57605b\]': 'bg-gosirat-gray',
    r'border-\[#57605b\]': 'border-gosirat-gray',

    r'text-\[#0c140f\]': 'text-gosirat-black',
    r'bg-\[#0c140f\]': 'bg-gosirat-black',
    r'border-\[#0c140f\]': 'border-gosirat-black',
    
    r'text-\[#f4f7f4\]': 'text-gosirat-light',
    r'bg-\[#f4f7f4\]': 'bg-gosirat-light',
    r'border-\[#f4f7f4\]': 'border-gosirat-light',
    r'from-\[#f4f7f4\]': 'from-gosirat-light',
    r'to-\[#f4f7f4\]': 'to-gosirat-light',
    
    r'text-\[#202A32\]': 'text-gosirat-text',
    r'bg-\[#202A32\]': 'bg-gosirat-text',
    
    r'text-\[#09131a\]': 'text-gosirat-darker',
    r'bg-\[#09131a\]': 'bg-gosirat-darker',
    
    r'rounded-\[22369600px\]': 'rounded-full',
    r'tracking-\[0px\]': 'tracking-normal',
    
    r'px-\[0px\]': 'px-0',
    r'py-\[0px\]': 'py-0',
    r'p-\[0px\]': 'p-0',
    r'm-\[0px\]': 'm-0',
    r'mt-\[0px\]': 'mt-0',
    r'mb-\[0px\]': 'mb-0',
    r'ml-\[0px\]': 'ml-0',
    r'mr-\[0px\]': 'mr-0',
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
