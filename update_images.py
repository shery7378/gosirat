import os
import re

mapping = {
    "4bed032a-c92e-44f1-b701-bf3d166bd68f.png": ("gosirat-team-members.png", "GoSirat team members and founders"),
    "696b2c80-d3d4-4bbd-87df-1b37c3f6fb28.png": ("parent-driver-app-hero-mockup.png", "Parent and driver app mockup showing live bus tracking"),
    "ade6054f-3a4e-4812-9539-3bb5985d3179.png": ("parent-instant-notification-alerts.png", "Parent receiving instant push notification for school bus arrival"),
    "9777cc5f-363a-4ce8-84ea-a92ccf1cbf2c.png": ("parent-live-bus-tracking.png", "Parent tracking school bus with GoSirat app"),
    "48660fc0-66bd-445d-9e06-b1f4e42caf6e.png": ("live-tracking-map-marker.png", "Live map marker indicating school bus location"),
    "ba24aa0f-c6d9-4eeb-9b86-a39580fc7165.png": ("live-tracking-route-path.png", "Optimized school transport route path on map"),
    "6c8d0a03-26bc-4282-91c7-6e4a5071b2c2.png": ("school-dashboard-visibility-analytics.png", "School administration dashboard showing transport analytics"),
    "5c7240c8-2f9a-4463-b71c-9f2662420691.png": ("driver-app-interface-mockup.png", "Driver app interface showing assigned student routes"),
    "b401cc2c-a22f-4e7d-90fd-b212c3af0a1b.png": ("gosirat-home-hero-illustration.png", "GoSirat safe school transport platform overview"),
    "112e9894-42a6-49e0-808c-b79e86b051b0.png": ("gosirat-safe-school-transport.png", "Safe school transport services in Islamabad and Rawalpindi"),
    "e5febcbc-674a-46b2-8102-aa63f50b4030.png": ("parent-app-features-overview.png", "Parent app features including live tracking and safe handover"),
    "67a7c711-3d47-427c-8af2-3992b27996d4.svg": ("partner-logo-1.svg", "School partner logo"),
    "7a8ee528-15f6-4160-9d25-061e7946f329.svg": ("partner-logo-2.svg", "Trusted transport partner logo"),
    "7ba59253-a1dc-478e-a845-d0a4eca3a28f.svg": ("partner-logo-3.svg", "Educational institution partner logo"),
    "f2484b8e-ccec-4398-ac86-31d1881d9e0c.svg": ("partner-logo-4.svg", "Safety organization partner logo")
}

for old_name, (new_name, alt_text) in mapping.items():
    old_path = os.path.join('public', old_name)
    new_path = os.path.join('public', new_name)
    if os.path.exists(old_path):
        os.rename(old_path, new_path)

for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            for old_name, (new_name, alt_text) in mapping.items():
                if old_name in content:
                    content = content.replace(f'/{old_name}', f'/{new_name}')
                    
                    pattern = rf'(<Image[^>]*src=["\']/{new_name}["\'][^>]*)alt=["\'][^"\']*["\']([^>]*>)'
                    content = re.sub(pattern, rf'\1alt="{alt_text}"\2', content)
                    
                    pattern2 = rf'(<Image[^>]*?)alt=["\'][^"\']*["\']([^>]*src=["\']/{new_name}["\'][^>]*>)'
                    content = re.sub(pattern2, rf'\1alt="{alt_text}"\2', content)

                    pattern3 = rf'(<img[^>]*src=["\']/{new_name}["\'][^>]*)alt=["\'][^"\']*["\']([^>]*>)'
                    content = re.sub(pattern3, rf'\1alt="{alt_text}"\2', content)

                    pattern4 = rf'(<img[^>]*?)alt=["\'][^"\']*["\']([^>]*src=["\']/{new_name}["\'][^>]*>)'
                    content = re.sub(pattern4, rf'\1alt="{alt_text}"\2', content)
            
            if content != original_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f'Updated {file_path}')
