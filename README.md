# 📜 Sử Gia Nhí AI — Lịch Sử & Văn Hóa Đà Nẵng

Website học tập tương tác môn **Giáo dục Địa phương** cho học sinh thành phố Đà Nẵng (sau sáp nhập 01/7/2025): Vòng quay 16 giai đoạn lịch sử, Bảo tàng ảo, Địa danh qua thời gian, trợ lý AI "Sử Gia Nhí" trả lời kèm nguồn tư liệu, và khu **Kiểm chứng độ chính xác** dành cho giám khảo/giáo viên.

## 🔗 Sản phẩm chạy thử (AI hoạt động thật)
👉 **[dán link chia sẻ trang published vào đây]**

Mở link → bấm thẻ **💬 Sử Gia Nhí AI** → bấm "Cho phép" khi trình duyệt hỏi quyền AI (chỉ một lần, miễn phí) → trò chuyện ngay. AI tích hợp trên nền tảng Claude, **không dùng API key**, không thu thập dữ liệu học sinh.

## ✨ Tính năng chính
| Khu vực | Nội dung |
|---|---|
| 🎡 Vòng Quay 16 Giai Đoạn | Từ văn hóa Sa Huỳnh đến Đà Nẵng sau sáp nhập 01/7/2025; mỗi hồ sơ có dòng **📍 Ngày nay nơi này thuộc...** và nút **📖 Xem tư liệu gốc** |
| 💬 Sử Gia Nhí AI | RAG trên 13 đoạn tư liệu đã kiểm chứng; mỗi câu trả lời kèm **📚 Nguồn tham khảo**; guardrail chỉ trả lời chủ đề Đà Nẵng — Xứ Quảng; chống quá tải (4 giây/câu, 60 câu/phiên) |
| 🏛️ Bảo Tàng & Di Sản | Bảo tàng Đà Nẵng — Thành Điện Hải, Bảo tàng Điêu khắc Chăm, di sản UNESCO |
| 📍 Địa danh qua thời gian | Đối chiếu tên cũ — tên mới sau Nghị quyết 1659/NQ-UBTVQH15 |
| ✅ Kiểm Chứng AI | 15 câu hỏi có đáp án chuẩn theo tài liệu GDĐP; chạy AI thật, chấm Đúng/Sai, tự tính % chính xác, xuất báo cáo |
| 🔊 Nghe đọc | Giọng tiếng Việt khóa 1 giọng, tự chọn giọng, đọc đúng viết tắt (TK VII → "thế kỷ bảy", ngày tháng, số La Mã) |

## 📂 Cấu trúc kho mã
```
index.html                 # Toàn bộ ứng dụng (1 file, chạy trực tiếp trên trình duyệt)
data/                      # Bộ dữ liệu: golden test, 16 trạm nội dung, sổ địa danh, sổ nguồn, facts đã kiểm
evidence_test_dataset.*    # Nhật ký các lượt chạy kiểm chứng
gddp6_extracted.txt        # Văn bản số hóa Tài liệu GDĐP Lớp 6
extracted_materials.txt    # Văn bản số hóa tư liệu GDĐP Lớp 4 & hồ sơ bảo tàng
images_catalog.txt         # Danh mục ảnh tư liệu (ảnh gốc đặt trong hồ sơ minh chứng Google Drive)
IMPROVEMENT_REPORT.md      # Báo cáo cải tiến theo góp ý Ban giám khảo
P0_COVERAGE_REPORT.md      # Báo cáo độ phủ nội dung
fact_review.csv            # Bảng rà soát dữ kiện
```

## 🚀 Chạy cục bộ
Mở thẳng `index.html` bằng trình duyệt (Chrome/Edge). Giao diện, vòng quay, bảo tàng, địa danh, nghe đọc chạy đầy đủ; riêng phần chat AI hoạt động trên bản triển khai chính thức (link ở trên) vì AI gắn với nền tảng hosting.

## 📚 Nguồn tư liệu
- Tài liệu Giáo dục Địa phương TP Đà Nẵng — Lớp 6 (bản biên soạn của nhóm giáo viên THCS Phan Bội Châu theo CV 82/SGDĐT-GDTrH&HSSV ngày 29/8/2025 của Sở GD&ĐT TP Đà Nẵng) và Lớp 4
- Hồ sơ trưng bày Bảo tàng Đà Nẵng và Bảo tàng Điêu khắc Chăm Đà Nẵng
- Nghị quyết 1659/NQ-UBTVQH15 về sắp xếp đơn vị hành chính TP Đà Nẵng
- Ảnh tư liệu: trích từ tài liệu dạy học địa phương (lưu hành nội bộ) — chỉ chia sẻ trong hồ sơ minh chứng, không phát hành công khai

## 🔐 Ghi chú bảo mật
Dự án **không chứa API key**; phiên bản cũ dùng OpenAI key nhúng đã được gỡ bỏ và thu hồi. AI chạy qua cơ chế tích hợp của nền tảng, người dùng tự cấp quyền trên thiết bị của mình.

---
*Dự thi Hackathon AI 2026 — ai.tainangviet.vn*
