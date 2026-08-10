"""
Download placeholder gallery images for Baguio Botanical Garden.
Uses LoremFlickr (redirects to live.staticflickr) with relevant tags.
These are CC-licensed placeholder images; replace with real photos before launch.
"""
import urllib.request
import os
import sys
import time

GALLERY_DIR = os.path.join(os.path.dirname(__file__), '..', 'public', 'gallery')
TAGS = [
    'botanical garden',
    'baguio philippines',
    'pine forest',
    'flower garden',
    'tropical garden',
    'japanese garden',
    'chinese garden',
    'igorot culture',
    'sculpture garden',
    'cordillera',
    'baguio city',
    'nature park',
]

def download(idx: int, tag: str):
    filename = f'baguio-botanical-garden-{idx + 1}.jpg'
    filepath = os.path.join(GALLERY_DIR, filename)

    if os.path.exists(filepath) and os.path.getsize(filepath) > 1000:
        print(f'  [{idx + 1:02d}] SKIP: {filename} already exists ({os.path.getsize(filepath)} bytes)')
        return

    url = f'https://loremflickr.com/800/600/{tag.replace(" ", ",")}?random={idx + 1}'
    print(f'  [{idx + 1:02d}] GET: {filename} (tag: {tag})')

    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = resp.read()
        with open(filepath, 'wb') as f:
            f.write(data)
        print(f'  [{idx + 1:02d}] OK:  {filename} ({len(data)} bytes)')
    except Exception as e:
        print(f'  [{idx + 1:02d}] FAIL: {filename}: {e}')

def main():
    os.makedirs(GALLERY_DIR, exist_ok=True)
    print(f'Downloading {len(TAGS)} images...')
    sys.stdout.flush()
    for i, tag in enumerate(TAGS):
        download(i, tag)
        if i < len(TAGS) - 1:
            time.sleep(1)
    print('Done.')

if __name__ == '__main__':
    main()
