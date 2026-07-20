import os
import re

def closest_spacing(px):
    mapping = {
        0: '0', 1: 'px', 2: '0.5', 4: '1', 6: '1.5', 8: '2', 10: '2.5',
        12: '3', 14: '3.5', 16: '4', 20: '5', 24: '6', 28: '7',
        32: '8', 36: '9', 40: '10', 44: '11', 48: '12', 56: '14',
        64: '16', 80: '20', 96: '24', 112: '28', 128: '32'
    }
    closest_px = min(mapping.keys(), key=lambda k: abs(k - px))
    return mapping[closest_px]

def closest_text(px):
    mapping = {
        12: 'xs', 14: 'sm', 16: 'base', 18: 'lg', 20: 'xl', 24: '2xl',
        30: '3xl', 36: '4xl', 48: '5xl', 60: '6xl', 72: '7xl'
    }
    closest_px = min(mapping.keys(), key=lambda k: abs(k - px))
    return mapping[closest_px]

def closest_leading(px):
    mapping = {
        12: '3', 16: '4', 20: '5', 24: '6', 28: '7', 32: '8', 36: '9', 40: '10'
    }
    closest_px = min(mapping.keys(), key=lambda k: abs(k - px))
    return mapping[closest_px]

def replace_arbitrary(match):
    prefix = match.group(1)
    val_str = match.group(2)
    
    try:
        val = float(val_str)
    except:
        return match.group(0)

    if prefix == 'text':
        return f"{prefix}-{closest_text(val)}"
    elif prefix == 'leading':
        if val > 40:
            return "leading-none" if val == 48 else "leading-tight"
        return f"{prefix}-{closest_leading(val)}"
    elif prefix in ['border', 'border-t', 'border-b', 'border-l', 'border-r']:
        if val <= 1:
            return prefix
        return f"{prefix}-{int(val)}"
    elif prefix == 'tracking':
        if val < -1: return "tracking-tighter"
        elif val < 0: return "tracking-tight"
        elif val == 0: return "tracking-normal"
        elif val < 1: return "tracking-wide"
        elif val < 2: return "tracking-wider"
        else: return "tracking-widest"
    else:
        # spacing: p, m, gap, w, h, top, bottom, etc.
        return f"{prefix}-{closest_spacing(val)}"

pattern = re.compile(r'\b([a-zA-Z0-9-]+)-\[(-?[0-9.]+)(?:px)?\]')

files_updated = 0

for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.jsx'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = pattern.sub(replace_arbitrary, content)
            
            # also replace percentages like w-[100%] -> w-full
            new_content = new_content.replace('w-[100%]', 'w-full')
            new_content = new_content.replace('h-[100%]', 'h-full')
            new_content = new_content.replace('leading-[100%]', 'leading-none')
            new_content = new_content.replace('max-w-[100%]', 'max-w-full')
            
            if new_content != content:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {path}")
                files_updated += 1

print(f"Total files updated: {files_updated}")
