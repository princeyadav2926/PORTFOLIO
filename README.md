# Prince Kumar - Senior Full Stack Developer Portfolio

A modern, responsive, 3D developer portfolio engineered for **Prince Kumar** (B.Tech CSE Student & Aspiring Full Stack Developer). Built with **React 18**, **Vite**, **Tailwind CSS**, and **Three.js**.

---

## ⚡ Tech Stack & Architecture

- **Core Framework:** React 18 & Vite
- **Styling & System:** Tailwind CSS with Matte Black (`#0B0D0E`) & Champagne Gold (`#D6AD60`) luxury engineering palette
- **3D Engine:** Three.js Interactive 3D Canvas (Dual gyroscopic gold rings, wireframe dodecahedron, stardust field, and 6 flying floating orbital satellites)
- **Interactive Physics:** Custom 3D perspective tilt cards (`Card3D`) with dynamic specular gold glare
- **Icons:** Lucide React
- **Data Architecture:** Centralized config (`src/data/portfolioData.js`) for rapid customization

---

## 🚀 Key Sections & Features

1. **Hero Section:**
   - Animated dynamic role typewriter (Full Stack Developer, C++ Programmer, Java Developer, DSA Enthusiast, Software Developer, Technology Explorer).
   - Real interactive Three.js 3D viewport canvas.
   - 3D developer identity card with status indicator ("Open to Opportunities").
   - Quick action CTAs: Explore Projects, Download Resume, Connect.

2. **About Me:**
   - Highlighting Prince's Computer Science Engineering background, programming craft, and real-world impact philosophy.
   - Core pillars: Full Stack Development, DSA & CS, AI & Modern Tooling, Impact-Driven Engineering.

3. **Categorized Technical Skills:**
   - Programming Languages (C++, Java, Python, JavaScript)
   - Full Stack Engineering (Frontend, Backend, Database)
   - DSA & CS Foundations (Arrays, Strings, Linked Lists, Stack, Queue, Trees, Searching, Sorting, Recursion, OOP, DBMS)
   - Developer Tools (Git, GitHub, VS Code, Google Antigravity, Vercel)
   - AI & Emerging Technologies (Generative AI, Prompt Engineering, AI Tools)
   - *Strict adherence to zero fabricated percentages or fake stats.*

4. **Featured Projects:**
   - **Opportunity Radar:** AI & Full Stack Career Intelligence platform for student internships, hackathons, and scholarships.
   - **TerraForge:** Air Pollution Weather Coupled Forecasting System focused on Delhi NCR.
   - **Smart Shopping:** Full stack web application with instant filtering and cart mechanics.
   - **DSA & Programming:** Algorithmic solutions and data structures in C++ and Java.
   - Interactive deep-dive modal for each project with feature breakdowns and source code links.

5. **Full Stack Development Journey:**
   - Comprehensive system architecture breakdown: Client -> API Gateway -> Database Layer -> CI/CD Pipeline.

6. **Data Structures & Algorithms Section:**
   - Interactive cards for all 10 core algorithmic topics with time & space complexities.
   - Direct link to Prince's GitHub profile.

7. **Education & Certifications:**
   - B.Tech CSE degree card with in-UI editable college field (saved to `localStorage`).
   - Verified certification cards with interactive credential preview modal.

8. **Live GitHub Dashboard:**
   - Live integration with public GitHub API (`https://api.github.com/users/princeyadav2926/repos`).
   - Error-proof fallback to verified repository listings when rate-limited.

9. **Premium LinkedIn Integration:**
   - Dedicated networking card connecting to `https://www.linkedin.com/in/prince-kumar-8897a8368/`.

10. **Validated Contact Section:**
    - Real-time form validation with name, email, subject, and message fields.
    - Editable email contact card with instant copy-to-clipboard functionality.

11. **Resume Modal:**
    - Clean preview of credentials with instant text resume download (`Prince_Kumar_Resume.txt`) and print capability.

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start Vite local development server
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📬 Contact Form Configuration (Web3Forms & Vercel)

The portfolio includes a secure serverless backend endpoint (`/api/contact`) that routes incoming contact submissions directly to **`princeraj.947168@gmail.com`** without exposing API keys in frontend code.

### 1. Get Your Free Web3Forms Access Key:
1. Go to [https://web3forms.com](https://web3forms.com).
2. Enter your email: **`princeraj.947168@gmail.com`** and click **"Create Access Key"**.
3. Check your Gmail inbox to copy the generated UUID Access Key.

### 2. For Local Development:
Add the key to your `.env` file (small letters supported):
```env
web3forms_access_key=your_copied_access_key_here
recipient_email=princeraj.947168@gmail.com
```

### 3. For Vercel Production Deployment:
1. In your **Vercel Project Dashboard**, go to **Settings** → **Environment Variables**.
2. Add a new variable in small letters (or uppercase, both supported):
   - **Key:** `web3forms_access_key` (or `WEB3FORMS_ACCESS_KEY`)
   - **Value:** `your_copied_access_key_here`
3. Click **Save** and redeploy.
4. Your contact form is now 100% active on the deployed Vercel URL!

---

## 🌐 Deployment Instructions

### Deploying to Vercel (Recommended)
1. Push code to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Prince Kumar Portfolio"
   git branch -M main
   git remote add origin https://github.com/princeyadav2926/portfolio.git
   git push -u origin main
   ```
2. Visit [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework preset will automatically detect **Vite**.
5. Click **"Deploy"**. The included `vercel.json` ensures instant configuration!

---

## 👤 Developer Profile

- **Name:** Prince Kumar
- **College:** Lakshami Narayan College Of Technology And Science, Bhopal (LNCTS)
- **Email:** princeraj.947168@gmail.com
- **Role:** B.Tech CSE Student | Aspiring Full Stack Developer
- **GitHub:** [princeyadav2926](https://github.com/princeyadav2926)
- **LinkedIn:** [Prince Kumar](https://www.linkedin.com/in/prince-kumar-8897a8368/)

