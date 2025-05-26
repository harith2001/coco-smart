coco peat 
# 🌴 CocoPeat Suppy Chain Management System – Coco-Smart

Coco-Smart is a visual programming tool designed for the coco peat supply chain, enabling exporters and manufacturers to define, customize, and execute production workflows using a drag-and-drop interface. The tool is user-friendly, allowing non-technical users to model and manage complex manufacturing processes efficiently.

## 🚀 Features

- 🌐 Visual workflow builder with plugin drag-and-drop interface
- 🧱 Modular plugin architecture for grading, cutting, washing, drying, and packaging
- 📝 DSL (Domain-Specific Language) editor with real-time flowchart generation
- 📦 Docker + K3s orchestration for deploying plugin microservices
- 🔄 Versioned workflow management
- 📈 IoT sensor integration for real-time data tracking
- 🔒 Blockchain-backed transparency and traceability

## 🗂 Project Structure

```
├── public/               # Static public assets
│   ├── css/, doc/, fonts/, img/, js/
│   ├── index.html        # Main HTML file
│   └── robots.txt
├── src/                  # Main React source
│   ├── components/       # Reusable React components
│   ├── data/             # Sample or dynamic data files
│   ├── App.jsx           # Root component
│   ├── App.css           # Global styling
│   ├── index.js          # ReactDOM entry point
│   ├── index.css         # Root stylesheet
│   ├── logo.svg          # App logo
│   ├── serviceWorker.js  # PWA support
│   └── setupTests.js     # Unit test configuration
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/harith2001/coco-smart.git
   cd coco-smart
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```


Includes sample unit and integration tests configured via `setupTests.js`.

## 📦 Build

```bash
npm run build
```

Generates a production-ready build in the `build/` directory.

## 🌍 Deployment

This app can be deployed as a static site or integrated into a broader ecosystem using Dockerized plugins managed by K3s.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **24-25J-313** – SLIIT Research Team

## 📫 Contact

Have questions or suggestions? Feel free to reach out at:  
📧 danula243@gmail.com
