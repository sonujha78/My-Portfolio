# My Portfolio

React + Vite portfolio website — Home, About, Skills, Education, Projects, Contact.

## 0. Add your photo and resume

1. Save your profile photo as `profile.jpg` and put it inside the `public/` folder
2. Save your resume as `resume.pdf` and put it inside the `public/` folder
3. That's it — the Home section will automatically show your photo, and the "Download CV" button will download your resume

## 1. Apni details daalo

`src/App.jsx` file kholo aur top par ye 5 variables edit karo:
- `PROFILE` — naam, role, tagline, email, github link, linkedin link
- `ABOUT` — apna intro paragraph
- `SKILLS` — apni skills aur % level
- `EDUCATION` — apni degree/school
- `PROJECTS` — apne real projects (title, description, tech, links)

## 2. Local machine par run karo (Ubuntu)

```bash
# Node.js install (agar pehle se nahi hai)
sudo apt update
sudo apt install nodejs npm -y
node -v   # check version (v18+ recommended)

# project folder mein jao
cd portfolio

# dependencies install karo
npm install

# dev server chalao
npm run dev
```

Browser mein `http://localhost:5173` khol kar apna portfolio dekho.

## 3. GitHub par push karo

```bash
git init
git add .
git commit -m "My portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/portfolio.git
git push -u origin main
```

(Pehle GitHub par ek naya empty repo bana lo: https://github.com/new)

## 4. Netlify par deploy karo

### Option A — Netlify website se (easiest, recommended)
1. https://app.netlify.com par jao aur GitHub se login karo
2. **"Add new site" → "Import an existing project"**
3. Apna GitHub repo select karo
4. Build settings already `netlify.toml` se set hain:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. **Deploy site** par click karo
6. 1-2 minute mein live URL mil jayega, jaise `https://your-site-123.netlify.app`
7. Settings → Domain management se apna site ka naam customize kar sakte ho (e.g. `aarav-portfolio.netlify.app`)

### Option B — Netlify CLI se (terminal se directly, Ubuntu)

```bash
npm install -g netlify-cli
netlify login
npm run build
netlify deploy --prod
```
Jab CLI puche "Publish directory", type karo: `dist`

## 5. LinkedIn par add karo

Netlify deploy hone ke baad jo live URL milega (e.g. `https://aarav-portfolio.netlify.app`):
1. LinkedIn profile kholo → **"Add profile section" → "Featured"** (ya "Contact info" → Website)
2. Wahan apna Netlify URL paste kar do
3. Same URL apne resume aur GitHub profile README mein bhi daal do

## 6. Contact form ko real banao (optional)

Abhi form sirf demo hai. Real email receive karne ke liye:
- [Formspree](https://formspree.io) par free account banao, apna form endpoint milega
- `src/App.jsx` ke `handleSubmit` function mein `fetch()` call se us endpoint par form data POST karo

Example:
```js
const handleSubmit = async (e) => {
  e.preventDefault();
  await fetch("https://formspree.io/f/your-id", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });
  setSent(true);
};
```

## 7. Future updates

Jab bhi code change karo:
```bash
git add .
git commit -m "update"
git push
```
Netlify GitHub se connected hai, isliye automatically re-deploy ho jayega.
