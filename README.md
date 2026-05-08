# 💅 Cutiecures Nail Bar - Hệ thống Phát hành Mã Giảm giá Cao cấp

Chào mừng bạn đến với kho lưu trữ mã nguồn của **Cutiecures Nail Bar Coupon System**. Đây là một ứng dụng web hiện đại, được thiết kế tinh tế nhằm tối ưu hóa quy trình thu thập thông tin khách hàng và phát hành mã giảm giá độc quyền cho tiệm nail.

## 🌟 Tổng quan dự án

Dự án này không chỉ đơn thuần là một trang web nhận mã, mà là một trải nghiệm người dùng (UX) được trau chuốt kỹ lưỡng. Với mục tiêu chuyển đổi khách truy cập thành khách hàng thân thiết, hệ thống cung cấp một quy trình đăng ký mượt mà, chuyên nghiệp và đáng tin cậy.

## ✨ Tính năng nổi bật

*   **🎨 Giao diện Premium:** Thiết kế theo phong cách tối giản, sang trọng với các hiệu ứng chuyển động vi mô (micro-animations) và màu sắc hài hòa, phản ánh đúng đẳng cấp của thương hiệu Cutiecures.
*   **📱 Tối ưu hóa di động:** Giao diện đáp ứng (Responsive Design) hoàn hảo trên mọi thiết bị, từ smartphone đến desktop.
*   **🔄 Quy trình đa bước (Multi-step UX):** Giúp người dùng dễ dàng cung cấp thông tin mà không cảm thấy bị choáng ngợp.
*   **📧 Tích hợp Resend API:** Tự động gửi thông báo về thông tin khách hàng và mã đã phát hành đến quản trị viên ngay lập tức.
*   **🔒 Bảo mật & Ngăn chặn gian lận:** 
    *   Tích hợp mã hóa và lưu trữ cục bộ (LocalStorage) để đảm bảo mỗi khách hàng chỉ nhận được một mã duy nhất.
    *   Cơ chế tự động chuyển hướng về trang chủ sau khi hoàn tất quy trình.
*   **⚡ Hiệu năng vượt trội:** Xây dựng trên nền tảng Next.js mới nhất, đảm bảo tốc độ tải trang cực nhanh và trải nghiệm mượt mà.

## 🛠 Công nghệ sử dụng

Hệ thống được xây dựng với những công nghệ hàng đầu hiện nay:

*   **Framework:** [Next.js](https://nextjs.org/) (App Router Architecture)
*   **Frontend:** [React 19](https://react.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Email Service:** [Resend](https://resend.com/)
*   **Styling:** Modern Vanilla CSS (Custom Design System)

## 🚀 Hướng dẫn cài đặt & Triển khai

Để khởi chạy dự án này trên môi trường cục bộ, vui lòng làm theo các bước sau:

### 1. Sao chép kho lưu trữ
```bash
git clone <repository-url>
cd cutiecures-coupon
```

### 2. Cài đặt các gói phụ thuộc
```bash
npm install
```

### 3. Cấu hình biến môi trường
Tạo file `.env.local` tại thư mục gốc và cấu hình API Key từ Resend:
```env
RESEND_API_KEY=your_resend_api_key_here
```

### 4. Khởi chạy môi trường phát triển
```bash
npm run dev
```
Sau đó, truy cập [http://localhost:3000](http://localhost:3000) trên trình duyệt của bạn.

## 🏗 Cấu trúc thư mục

*   `src/app/`: Chứa các route và logic xử lý trang chính.
*   `src/app/api/`: Xử lý các yêu cầu serverless (Backend logic cho việc gửi email).
*   `public/`: Chứa các tài nguyên tĩnh như hình ảnh, logo.

## 📝 Giấy phép

Dự án này được phát triển độc quyền cho **Cutiecures Nail Bar**. Mọi hình thức sao chép hoặc sử dụng trái phép mã nguồn đều bị nghiêm cấm.

---
*Developed with ❤️ by TD transactions*
