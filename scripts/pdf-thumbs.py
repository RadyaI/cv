"""Bikin thumbnail JPG dari halaman pertama setiap PDF di public/images/sertif.

Pakai:
    pip install pymupdf
    python scripts/pdf-thumbs.py

Hasil: public/images/sertif/thumbs/<nama-pdf>.jpg
"""
from pathlib import Path

import pymupdf

SRC = Path("public/images/sertif")
OUT = SRC / "thumbs"
WIDTH = 1000  # lebar thumbnail (px), cukup tajam tapi tetap ringan

OUT.mkdir(parents=True, exist_ok=True)

pdfs = sorted(SRC.glob("*.pdf"))
if not pdfs:
    print(f"Tidak ada PDF di {SRC}")

for pdf in pdfs:
    with pymupdf.open(pdf) as doc:
        page = doc[0]
        zoom = WIDTH / page.rect.width
        pix = page.get_pixmap(matrix=pymupdf.Matrix(zoom, zoom), alpha=False)
        target = OUT / f"{pdf.stem}.jpg"
        pix.save(target)
        print(f"{pdf.name} -> {target} ({pix.width}x{pix.height})")