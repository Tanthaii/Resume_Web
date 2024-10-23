import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // ตรวจสอบว่าคุณได้ import ไฟล์ CSS ที่เราตั้งค่าไว้
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
