# StreamLive 🎥

A modern, browser-based live streaming platform built with React and ZegoCloud. Create and join video conferences instantly with HD quality, real-time chat, and seamless user experience.

## ✨ Features

- **Instant Streaming** - No downloads required, 100% browser-based
- **Low Latency** - Real-time interaction with minimal delay
- **Real-time Chat** - Integrated chat functionality
- **Screen Sharing** - Share your screen during streams
- **Secure Rooms** - Password-protected rooms with encryption
- **Responsive Design** - Works perfectly on all devices
- **Professional UI** - Modern, clean interface

## 🚀 Live Demo



## 🛠️ Built With

- **React** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling and responsive design
- **React Router** - Client-side routing
- **ZegoCloud UIKit** - Video streaming infrastructure

## 📦 Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/streamlive.git
cd streamlive
```

2. Install dependencies
```bash
npm install
```

3. Set up ZegoCloud credentials
- Sign up at [ZegoCloud Console](https://console.zegocloud.com/)
- Get your App ID and Server Secret
- Update the credentials in `src/Pages/Room.jsx`

4. Start the development server
```bash
npm run dev
```

5. Open the link in your browser

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Hero.jsx        # Landing page hero section
│   ├── Navbar.jsx      # Navigation bar
│   ├── Features.jsx    # Features showcase
│   ├── JoinRoom.jsx    # Room joining interface
│   ├── Pricing.jsx     # Pricing plans
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Footer component
├── Pages/
│   ├── Home.jsx        # Main landing page
│   └── Room.jsx        # Video conference room
├── App.jsx             # Main app component
└── main.jsx           # Entry point
```



### ZegoCloud Setup
Replace the credentials in `src/Pages/Room.jsx`:

```javascript
const appID = YOUR_APP_ID;
const serverSecret = 'YOUR_SERVER_SECRET';
```

## 🎯 Usage

1. **Join a Room**: Enter a room ID on the homepage and click "Join Now"
2. **Start Streaming**: Share the room link with others to invite them
3. **Features**: Use video, audio, chat, and screen sharing during the call



## 👨‍💻 Author

**Puneet Saini**
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- [ZegoCloud](https://zegocloud.com) for video streaming infrastructure
- [Tailwind CSS](https://tailwindcss.com) for styling
- [React](https://reactjs.org) team for the amazing framework



