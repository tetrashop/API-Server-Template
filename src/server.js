// src/server.js
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT || 3000;

// میان‌افزارهای امنیتی و کاربردی
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

// مسیرهای اصلی
app.get('/', (req, res) => {
  res.json({
    message: '🚀 سرور API فعال است!',
    version: '1.0.0',
    developer: 'شما',
    timestamp: new Date().toLocaleString('fa-IR')
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: '✅ سالم',
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    timestamp: new Date().toISOString()
  });
});

// راه‌اندازی سرور
app.listen(PORT, () => {
  console.log('🎯 سرور API در حال اجرا است...');
  console.log(`📡 پورت: ${PORT}`);
  console.log(`🌐 آدرس: http://localhost:${PORT}`);
  console.log(`👨‍💻 توسعه‌دهنده: شما`);
  console.log(`📧 ایمیل: ramin.edjlal1359@gmail.com`);
  console.log('========================================');
});
