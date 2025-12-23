# 🔗 QRify — Modern QR Code Generator

QRify is a **modern, responsive QR Code Generator** built with **Next.js**, featuring a clean two-column UI, powerful customization options, and visually distinct **🌞 Day / 🌙 Night modes**.

---

## 🌐 Live Demo
🚀 **Try it here:** 👉 [https://qrify-woad.vercel.app/](https://qrify-woad.vercel.app/)

---

## ✨ Features

✅ **Instant Generation:** Generate QR codes from any text or URL in real-time.  
🎨 **Advanced Customization:** Change QR color, background color, and label text color.  
🖼️ **Branding:** Embed a custom logo inside the center of your QR code.  
📏 **Interactive Scaling:** Adjust QR size dynamically using a slider.  
🌤️ **Adaptive UI:** Day mode with a cloud sky background and Night mode with a starry sky.  
⬇️ **High-Quality Export:** Download your generated QR code as a PNG file.  
📱 **Fully Responsive:** Optimized for a seamless experience on both desktop and mobile devices.  
⚡ **Performance:** Built using the Next.js 14+ App Router for speed and SEO.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **QR Engine:** [qrcode.react](https://www.npmjs.com/package/qrcode.react)
- **Image Processing:** [html-to-image](https://www.npmjs.com/package/html-to-image)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 📂 Project Structure
```text

qrify/
├── public/             # Static assets (logos, icons)
├── src/
│   └── app/
│       ├── layout.tsx  # Global layout and fonts
│       └── page.tsx    # Main application logic and UI
├── package.json        # Dependencies and scripts
└── README.md           # Project documentation

```

---

## 🚀 Getting Started (Local Setup)

1️⃣ Clone the repository
```Bash
git clone https://github.com/AnirudhKaplish/qrify.git
```

2️⃣ Navigate to the project
```Bash
cd qrify
```

3️⃣ Install dependencies
```Bash
npm install
```

4️⃣ Run the development server
```Bash
npm run dev
```

🌍 Open http://localhost:3000
in your browser to see the result.

---

## 🎯 Use Cases

🔗 Quick URL sharing for presentations or social media.

🎟️ Event check-ins and digital ticketing.

👤 Contact information (vCard) sharing.

📶 Wi-Fi access credential sharing.

📢 Marketing & branding with custom-colored codes.

---

## 🧠 Key Learnings

- **App Router Architecture:** Implemented Next.js 14 client-side components and state management  
- **Dynamic UI:** Created a responsive two-column layout with theme switching  
- **Canvas Manipulation:** Integrated QR rendering and PNG export  
- **Tailwind Mastery:** Built adaptive day/night environmental backgrounds  

---

## 📄 License

This project is open-source and free to use under the MIT License.

---

## 🙌 Author

👨‍💻 Anirudh Kaplish 

🔗 GitHub: https://github.com/AnirudhKaplish

⭐ If you like this project, don’t forget to star the repository!
