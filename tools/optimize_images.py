import os
import sys

try:
    from PIL import Image
except Exception:
    print('Pillow não encontrado. Instalando via pip...')
    os.system(f'{sys.executable} -m pip install --user pillow')
    from PIL import Image


ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
FOLDERS = [ROOT, os.path.join(ROOT, 'fotos')]
OUT_DIR = os.path.join(ROOT, 'fotos', 'optimized')

os.makedirs(OUT_DIR, exist_ok=True)

EXTS = ('.jpg', '.jpeg', '.png', '.webp')

def optimize_image(path, out_path, max_width=1200, quality=80):
    try:
        im = Image.open(path)
        w, h = im.size
        if w > max_width:
            new_h = int(max_width * h / w)
            im = im.resize((max_width, new_h), Image.LANCZOS)
        # Convert PNG to RGB for JPEG
        if im.mode in ('RGBA', 'P'):
            im = im.convert('RGB')
        im.save(out_path, 'JPEG', quality=quality, optimize=True, progressive=True)
        print('Created', out_path)
    except Exception as e:
        print('Failed to optimize', path, e)


def main():
    found = 0
    for folder in FOLDERS:
        if not os.path.isdir(folder):
            continue
        for fname in os.listdir(folder):
            if fname.lower().endswith(EXTS):
                src = os.path.join(folder, fname)
                dst = os.path.join(OUT_DIR, os.path.splitext(fname)[0] + '.jpg')
                optimize_image(src, dst)
                found += 1

    if found == 0:
        print('Nenhuma imagem encontrada para otimizar. Coloque imagens em /fotos ou na raiz do projeto.')


if __name__ == '__main__':
    main()
