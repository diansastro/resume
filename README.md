# KarsaLabs — IT Solutions Website

A modern, fully responsive company website for **KarsaLabs IT Solutions**, built with pure HTML, CSS, and JavaScript. Features a **neumorphism** design system, bilingual support (Indonesian/English), smooth scroll animations, and an integrated contact form powered by EmailJS.

---

## 📁 Project Structure

```
karsalabs/
├── index.html      # Markup & page structure
├── style.css       # Neumorphism design system & layout
└── main.js         # Interactivity, i18n, smooth scroll, contact form
```

---

## ✨ Features

### Design
- **Neumorphism UI** — soft shadows, inset/raised effects throughout
- Responsive layout with breakpoints at 1100px, 900px, 768px, and 480px
- Gradient typography and animated floating hero cards
- Custom scrollbar styling

### Navigation
- Fixed navbar with blur backdrop
- Smooth scroll with custom **easeInOutQuart** animation (no janky native scroll)
- Active nav shadow on scroll
- Mobile hamburger drawer menu

### Sections
| Section | Description |
|---|---|
| **Hero** | Full-viewport intro with 3 animated floating cards |
| **Stats Bar** | 4 key metrics in a neumorphic strip |
| **Services** | 3 service cards — Web Dev, Mobile Dev, IT Consulting |
| **How It Works** | 6-step vertical timeline |
| **Tech Stack** | Tabbed grid — Frontend / Backend / Mobile / Cloud & DevOps |
| **Portfolio** | 3 project showcases with tags and metadata |
| **Testimonials** | 3 client review cards |
| **Contact** | Two-column layout with info panel + form |
| **Footer** | 4-column layout with social links |

### Bilingual (i18n)
- **Indonesian 🇮🇩** and **English 🇬🇧** support
- Toggle button in navbar (`ID | EN`) and mobile drawer
- ~120 translation keys per language
- Language preference saved to `localStorage`

### Contact Form
- Client-side validation with per-field error messages
- Dropdown for service selection
- Loading spinner during submission
- Success / error feedback messages
- Sends email to **infomaskoding@gmail.com** via **EmailJS**

---

## 🚀 Getting Started

### 1. Clone or download

Place all three files in the same folder:

```
index.html
style.css
main.js
```

Open `index.html` in any modern browser. An internet connection is required for Google Fonts and the EmailJS SDK.

### 2. Configure EmailJS (to activate the contact form)

The contact form uses [EmailJS](https://www.emailjs.com) — free up to **200 emails/month**, no backend required.

**Step-by-step setup:**

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Go to **Email Services** → **Add New Service** → select **Gmail**
3. Connect `infomaskoding@gmail.com` and save — note your **Service ID**
4. Go to **Email Templates** → **Create New Template**

   Use these variables in your template body:
   ```
   New inquiry from {{from_name}}

   Email:     {{from_email}}
   Company:   {{company}}
   WhatsApp:  {{whatsapp}}
   Service:   {{service}}

   Message:
   {{message}}
   ```
   Set **Reply To** to `{{reply_to}}` — note your **Template ID**

5. Go to **Account** → copy your **Public Key**

6. Open `main.js` and fill in the three constants at the top:

   ```js
   const EMAILJS_PUBLIC_KEY  = 'your_public_key_here';
   const EMAILJS_SERVICE_ID  = 'your_service_id_here';
   const EMAILJS_TEMPLATE_ID = 'your_template_id_here';
   ```

The form is now live — every submission will deliver an email to `infomaskoding@gmail.com`.

---

## 🌐 i18n — Adding or Editing Translations

All text strings live in the `translations` object inside `main.js`:

```js
const translations = {
  id: { 'nav.services': 'Layanan', ... },
  en: { 'nav.services': 'Services', ... }
};
```

To translate an HTML element, add a `data-i18n` attribute:

```html
<h2 data-i18n="your.key">Default text</h2>
```

For input placeholders, use `data-i18n-placeholder`:

```html
<input data-i18n-placeholder="your.key" placeholder="Default placeholder" />
```

---

## 🎨 Design Tokens

All visual variables are defined at the top of `style.css`:

```css
:root {
  --bg:            #e0e5ec;   /* base background */
  --accent:        #4f6ef7;   /* primary blue */
  --accent2:       #7c3aed;   /* purple */
  --accent3:       #06b6d4;   /* cyan */
  --neu-raised:    6px 6px 16px #a3b1c6, -6px -6px 16px #ffffff;
  --neu-inset:     inset 5px 5px 10px #a3b1c6, inset -5px -5px 10px #ffffff;
  --neu-raised-lg: 12px 12px 32px #a3b1c6, -12px -12px 32px #ffffff;
}
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 semantic elements |
| Styling | CSS3 custom properties, Grid, Flexbox |
| Scripting | Vanilla JavaScript (ES2020+) |
| Fonts | [Google Fonts](https://fonts.google.com) — Outfit, DM Mono |
| Email | [EmailJS](https://www.emailjs.com) Browser SDK v4 |

No build tools, no frameworks, no dependencies beyond the two CDN resources above.

---

## 📱 Browser Support

| Browser | Support |
|---|---|
| Chrome 90+ | ✅ Full |
| Firefox 90+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 90+ | ✅ Full |
| Mobile (iOS/Android) | ✅ Responsive |

---

## 📄 License

© 2025 KarsaLabs IT Solutions. All rights reserved.

---

*Built with passion in Indonesia 🇮🇩*
