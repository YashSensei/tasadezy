import sys

with open('src/pages/HomePage.jsx', 'r') as f:
    text = f.read()

def replace_block(text, start_str, replacement, start_search_from=0):
    start_idx = text.find(start_str, start_search_from)
    if start_idx == -1: 
        print(f"Could not find {start_str}")
        return text
    
    print(f"Found {start_str} at {start_idx}")
    div_count = 0
    i = start_idx
    end_idx = -1
    while i < len(text):
        if text[i:i+4] == '<div':
            # ensure it's a tag <div or <div ...
            # not e.g. <divider
            if len(text) > i+4 and text[i+4] in (' ', '>', '\n'):
                div_count += 1
        elif text[i:i+6] == '</div>':
            div_count -= 1
            if div_count == 0:
                end_idx = i + 6
                break
        i += 1
            
    if end_idx != -1:
        print(f"End idx found at {end_idx}")
        return text[:start_idx] + replacement + text[end_idx:]
    
    print("Could not find matching closing tag")
    return text

text = replace_block(text, '<div className="framer-13oyn3g-container">', '          <Header />\n')

# Find footer, we know it's at index > 200000 approx, or we can just find the last instance of '<div className="ssr-variant hidden-12tyhur">'
footer_start_idx = text.rfind('<div className="ssr-variant hidden-12tyhur">')
if footer_start_idx != -1:
    text = replace_block(text, '<div className="ssr-variant hidden-12tyhur">', '          <Footer />\n', footer_start_idx)

# Add imports if not present
if "import Header from" not in text:
    text = text.replace('import React from "react";', 'import React from "react";\nimport Header from "../components/Header";\nimport Footer from "../components/Footer";')

with open('src/pages/HomePage.jsx', 'w') as f:
    f.write(text)

print("HomePage.jsx updated!")
