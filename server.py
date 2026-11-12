#!/usr/bin/env python3
"""
SnackPlot 1:1 Local Web Server
Run: python3 server.py [port]
Default port: 3000 (http://localhost:3000)
"""
import http.server
import os
import socketserver
import sys
import urllib.parse

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 3000
ROOT_DIR = os.path.dirname(os.path.abspath(__file__))

class SnackPlotHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT_DIR, **kwargs)

    def translate_path(self, path):
        parsed = urllib.parse.urlparse(path)
        clean_path = parsed.path.rstrip("/")
        if not clean_path or clean_path == "":
            return os.path.join(ROOT_DIR, "index.html")
        candidate = os.path.join(ROOT_DIR, clean_path.lstrip("/"))
        if os.path.isdir(candidate) and os.path.exists(os.path.join(candidate, "index.html")):
            return os.path.join(candidate, "index.html")
        if os.path.exists(candidate + ".html"):
            return candidate + ".html"
        return super().translate_path(path)

if __name__ == "__main__":
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), SnackPlotHandler) as httpd:
        print(f"SnackPlot 1:1 server running at http://localhost:{PORT}/")
        httpd.serve_forever()
