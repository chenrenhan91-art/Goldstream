#!/usr/bin/env python3
"""Local HTTP preview server for Goldstream Technology Inc website."""
import http.server
import socketserver
import os

PORT = 3000
ROOT_DIR = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT_DIR, **kwargs)

if __name__ == "__main__":
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Serving Goldstream Technology Inc at http://localhost:{PORT}")
        httpd.serve_forever()
