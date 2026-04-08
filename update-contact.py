import re

with open('contact.html', 'r') as f:
    content = f.read()

# 1. Add Google Fonts after </head> opening tag
old_head = '</head>'
new_head = '''  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
</head>'''
content = content.replace(old_head, new_head)

# 2. Add 24/7 phone after the first phone number in header
old_phone = '''(561) 693-2624
      </a>
      <button class="mobile-menu-btn"'''
new_phone = '''(561) 693-2624
      </a>
      <a href="tel:+18775472288" class="header-phone" aria-label="24/7 Support">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        1 (877) 547-2288
      </a>
      <button class="mobile-menu-btn"'''
content = content.replace(old_phone, new_phone)

# 3. Change hours from 8am-6pm to 9am-5pm
content = content.replace('Mon–Fri: 8am–6pm', 'Mon–Fri: 9am–5pm')

# 4. Remove "24/7 for monitored sites"
content = content.replace('24/7 for monitored sites', '')

# 5. Update service areas
content = content.replace('<span>Miami</span>', '<span>Lake Worth Beach</span>')
content = content.replace('<span>Orlando</span>', '<span>Deerfield Beach</span>')
content = content.replace('<span>Tampa</span>', '<span>Pompano Beach</span>')
content = content.replace('<span>Jacksonville</span>', '<span>Delray Beach</span>')

with open('contact.html', 'w') as f:
    f.write(content)

print("Contact page updated successfully")
