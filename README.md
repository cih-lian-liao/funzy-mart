
# 🧸 FunzyMart - Modern E-commerce Toy Store

<div align="center">

![FunzyMart Logo](https://img.shields.io/badge/FunzyMart-Toy%20Store-a5c926?style=for-the-badge&logo=react&logoColor=white)

**A comprehensive React-based e-commerce platform specializing in premium toys and stuffed animals**

[![React](https://img.shields.io/badge/React-19.1.0-61dafb?style=flat-square&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.4-646cff?style=flat-square&logo=vite)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React%20Router-7.7.1-ca4245?style=flat-square&logo=react-router)](https://reactrouter.com/)
[![ESLint](https://img.shields.io/badge/ESLint-9.30.1-4b32c3?style=flat-square&logo=eslint)](https://eslint.org/)

[🚀 Live Demo](https://funzy-mart.vercel.app/) | [📖 Documentation](#documentation) | [🤝 Contributing](#contributing) | [📄 License](#license)

</div>

---

## 🎯 Project Overview

FunzyMart is a modern, full-featured e-commerce website built with React 19 and Vite 7. This project demonstrates advanced frontend development practices, showcasing a complete online toy store with sophisticated features including product catalog management, shopping cart functionality, order processing, and administrative controls.

### 🎪 What Makes FunzyMart Special?

- **Complete E-commerce Solution**: From product browsing to checkout completion
- **Modern React Patterns**: Hooks, Context API, Error Boundaries, and Performance Optimization
- **Professional UI/UX**: Responsive design with accessibility-first approach
- **Real-world Features**: Inventory management, order tracking, and admin dashboard
- **Production-Ready Code**: Comprehensive error handling, validation, and security measures

## ✨ Key Features

### 🛍️ **E-commerce Core Features**
- **Product Catalog**: Advanced filtering, sorting, and search functionality
- **Product Details**: Comprehensive product information with image zoom
- **Shopping Cart**: Persistent cart with real-time updates and stock validation
- **Checkout Process**: Complete order flow with confirmation screen
- **Order Management**: Order tracking and history (simulated)

### 🎨 **User Experience**
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, intuitive interface with smooth animations
- **Accessibility**: WCAG 2.1 compliant with screen reader support
- **Performance**: Optimized loading and smooth interactions
- **Error Handling**: Graceful error recovery and user feedback

### 🔧 **Administrative Features**
- **Admin Dashboard**: Product management and inventory control
- **Authentication**: Secure admin access with password protection
- **Data Management**: Centralized product data with validation
- **Analytics**: Order statistics and inventory monitoring

### 🛡️ **Technical Excellence**
- **Error Boundaries**: Comprehensive error handling and recovery
- **Input Validation**: Client-side validation with user feedback
- **State Management**: Efficient Context API implementation
- **Code Quality**: ESLint configuration and PropTypes validation
- **Performance**: React.memo, useCallback, and useMemo optimization

---

## 🛠️ Tech Stack

### **Frontend Framework & Libraries**
```json
{
  "react": "^19.1.0",           // Modern React with latest features
  "react-dom": "^19.1.0",       // React DOM rendering
  "react-router-dom": "^7.7.1", // Client-side routing
  "prop-types": "^15.8.1"       // Runtime type checking
}
```

### **Build Tools & Development**
```json
{
  "vite": "^7.0.4",                    // Lightning-fast build tool
  "@vitejs/plugin-react": "^4.6.0",    // React plugin for Vite
  "eslint": "^9.30.1",                 // Code linting and quality
  "@eslint/js": "^9.30.1",            // ESLint JavaScript configuration
  "eslint-plugin-react-hooks": "^5.2.0", // React Hooks linting rules
  "eslint-plugin-react-refresh": "^0.4.20" // React Refresh linting
}
```

### **Type Definitions**
```json
{
  "@types/react": "^19.1.8",      // TypeScript definitions for React
  "@types/react-dom": "^19.1.6"   // TypeScript definitions for React DOM
}
```

### **Styling & Design**
- **CSS3**: Modern CSS with Flexbox and Grid layouts
- **CSS Variables**: Consistent theming and color management
- **Responsive Design**: Mobile-first approach with breakpoints
- **CSS Animations**: Smooth transitions and micro-interactions
- **Accessibility**: ARIA attributes and semantic HTML

---

 

## 🚀 Getting Started

### **Prerequisites**
- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 8.0.0 or higher (comes with Node.js)
- **Git**: For version control

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/cih-lian-liao/funzy-mart.git
    cd funzy-mart/my-app
    ```

2. **Install dependencies**
   ```bash
    npm install
    ```

3. **Start development server**
   ```bash
    npm run dev
    ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### **Available Scripts**

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production-ready application |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

### **Environment Setup**

The application runs entirely in the browser with no backend dependencies. All data is managed client-side using:
- Static product data in `src/data/products.js`
- Local storage for cart persistence
- Simulated API calls for checkout process

---

 

 

## 🤝 Contributing

We welcome contributions to FunzyMart! Here's how you can help:

### **How to Contribute**

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Run tests and linting**
   ```bash
   npm run lint
   npm run test
   ```
5. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
6. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### **Contribution Guidelines**

#### **Code Standards**
- Follow existing code style and conventions
- Write meaningful commit messages
- Add comments for complex logic
- Include PropTypes for all components
- Write tests for new features

#### **Pull Request Process**
- Ensure all tests pass
- Update documentation if needed
- Request review from maintainers
- Address feedback promptly

#### **Issue Reporting**
- Use the issue template
- Provide clear reproduction steps
- Include browser and device information
- Label issues appropriately

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### **MIT License Summary**
- ✅ Commercial use allowed
- ✅ Modification allowed
- ✅ Distribution allowed
- ✅ Private use allowed
- ❌ No liability or warranty

---

 

## 📞 Contact & Support

### **Project Maintainer**
- **GitHub**: [@cih-lian-liao](https://github.com/cih-lian-liao)
- **Email**: [cihlianliao@gmail.com](mailto:cihlianliao@gmail.com)
- **LinkedIn**: [cihlianliao](https://www.linkedin.com/in/cihlianliao/)

### **Community**
- **Discussions**: [GitHub Discussions](https://github.com/cih-lian-liao/funzy-mart/discussions)
- **Issues**: [GitHub Issues](https://github.com/cih-lian-liao/funzy-mart/issues)
- **Wiki**: [Project Wiki](https://github.com/cih-lian-liao/funzy-mart/wiki)

---

<div align="center">

**Made with ❤️ and React**

[⭐ Star this repo](https://github.com/cih-lian-liao/funzy-mart) | [🐛 Report Bug](https://github.com/cih-lian-liao/funzy-mart/issues) | [💡 Request Feature](https://github.com/cih-lian-liao/funzy-mart/issues)

</div>

