#!/usr/bin/env python3
"""Copy the static site and prefix root-absolute URLs for GitHub Pages."""

import os
import re
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "_site"
PREFIX = ""
SKIP_DIRS = {".git", "node_modules", ".next", "_site", ".github"}
TEXT_SUFFIXES = {".html", ".css", ".js", ".json", ".svg", ".webmanifest", ".txt", ".xml"}
QUOTED_ROOT = re.compile(r"""(?P<q>["'])/(?!/)""")


def rewrite(text: str) -> str:
    def repl(match: re.Match) -> str:
        # Leave regex literals such as /'/g untouched. Real root paths are attributes or strings.
        if match.start() > 0 and text[match.start() - 1] == "/":
            return match.group(0)
        return f"{match.group('q')}{PREFIX}/"

    return QUOTED_ROOT.sub(repl, text)


def should_skip(path: Path) -> bool:
    return any(part in SKIP_DIRS for part in path.parts)


def main() -> None:
    if OUT.exists():
        shutil.rmtree(OUT)
    OUT.mkdir()

    copied = 0
    rewritten = 0
    for dirpath, dirnames, filenames in os.walk(ROOT):
        current = Path(dirpath)
        dirnames[:] = [name for name in dirnames if name not in SKIP_DIRS and not name.startswith(".")]
        if should_skip(current.relative_to(ROOT)):
            continue
        for filename in filenames:
            if filename == ".DS_Store" or filename.startswith("."):
                continue
            source = current / filename
            relative = source.relative_to(ROOT)
            target = OUT / relative
            target.parent.mkdir(parents=True, exist_ok=True)
            if source.suffix.lower() in TEXT_SUFFIXES:
                text = source.read_text(encoding="utf-8", errors="surrogateescape")
                updated = rewrite(text)
                target.write_text(updated, encoding="utf-8", errors="surrogateescape")
                if updated != text:
                    rewritten += 1
            else:
                shutil.copy2(source, target)
            copied += 1

    (OUT / ".nojekyll").write_text("", encoding="utf-8")
    index = (OUT / "index.html").read_text(encoding="utf-8")
    if '/h5/static/seo.css' not in index:
        raise SystemExit("homepage stylesheet is missing")
    print(f"prepared {copied} files, rewrote {rewritten}, output {OUT}")


if __name__ == "__main__":
    main()
