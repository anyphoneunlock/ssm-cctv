with open('support.html', 'r') as f:
    content = f.read()

old_header_end = '''        </ul>
      </nav>
  </header>'''

new_header_end = '''        </ul>
      </nav>
      <a href="tel:+15616932624" class="header-phone" aria-label="Call us">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        (561) 693-2624
      </a>
      <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Open menu" aria-expanded="false">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
  </header>'''

content = content.replace(old_header_end, new_header_end)

with open('support.html', 'w') as f:
    f.write(content)
print("Header fixed")
