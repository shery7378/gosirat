import os
import re
import collections

pattern = re.compile(r'\[#?([a-zA-Z0-9\.]+)\]')
counts = collections.Counter()

for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.jsx'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
                matches = pattern.findall(content)
                counts.update(matches)

for k, v in counts.most_common(20):
    print(f'[{k}] : {v}')
