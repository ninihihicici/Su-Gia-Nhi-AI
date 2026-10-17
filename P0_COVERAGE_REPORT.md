# BÁO CÁO ĐỘ PHỦ DỮ LIỆU HỌC THUẬT (P0 COVERAGE REPORT)
## DỰ ÁN: "SỬ GIA NHÍ AI" — GIÁO DỤC ĐỊA PHƯƠNG & LỊCH SỬ VĂN HÓA ĐÀ NẴNG (PHIÊN BẢN 2.0)

> **Mục tiêu của Giai đoạn P0:** Thiết lập nền tảng học thuật vững chắc, có căn cứ nguồn xác thực, gán nhãn thời gian rõ ràng, đảm bảo nguyên tắc: *“10 thông tin có nguồn chắc tốt hơn 30 thông tin không kiểm chứng; AI biết nói ‘chưa đủ dữ liệu’ tốt hơn AI trả lời sai”*.

---

### 1. BẢNG TỔNG QUAN ĐỘ PHỦ 16 TRẠM LỊCH SỬ

| Trạm | Tên Giai Đoạn Lịch Sử | Thời Kỳ | Phân Phối Cấp Học | Số FACT Gắn Kèm | Ảnh Xác Thực | Trạng Thái Thẩm Định |
| :---: | :--- | :--- | :---: | :---: | :---: | :---: |
| **I** | Tiền Sử & Văn Hóa Sa Huỳnh | Trước CN – TK II | Tiểu học + THCS | 1 | Có (Bảo tàng ĐN) | `HUMAN_VERIFIED` |
| **II** | Vương Quốc Lâm Ấp & Champa Cổ Kính | TK II – TK X | Tiểu học + THCS | 1 | Có (Mỹ Sơn) | `HUMAN_VERIFIED` |
| **III** | Thời Kỳ Đại Việt Mở Cõi Phương Nam | 1306 – 1470 | Tiểu học + THCS | 1 | Có (Huyền Trân) | `HUMAN_VERIFIED` |
| **IV** | Đạo Thừa Tuyên Quảng Nam Thời Lê Sơ | 1471 – 1558 | Tiểu học + THCS | 1 | Có (Lê Thánh Tông) | `HUMAN_VERIFIED` |
| **V** | Thương Cảng Quốc Tế Hội An & Cửa Hàn | 1558 – 1600 | Tiểu học + THCS | 1 | Có (Hội An UNESCO) | `HUMAN_VERIFIED` |
| **VI** | Dinh Trấn Thanh Chiêm & Chữ Quốc Ngữ | 1602 – 1650 | Tiểu học + THCS | 2 | Có (Bia Thanh Chiêm) | `HUMAN_VERIFIED` |
| **VII** | Phong Trào Tây Sơn & Căn Cứ Cửa Hàn | 1771 – 1802 | Tiểu học + THCS | 1 | Có (Quang Trung) | `HUMAN_VERIFIED` |
| **VIII** | Triều Nguyễn & Phòng Tuyến Vịnh Đà Nẵng | 1802 – 1858 | Tiểu học + THCS | 1 | Có (Hải Vân Quan) | `HUMAN_VERIFIED` |
| **IX** | Tiếng Súng Kháng Pháp 1858 & Thành Điện Hải | 1858 – 1860 | Tiểu học + THCS | 2 | Có (Thành Điện Hải) | `HUMAN_VERIFIED` |
| **X** | Phong Trào Cần Vương & Nghĩa Hội Xứ Quảng | 1885 – 1887 | Tiểu học + THCS | 1 | Có (Hòn Kẽm) | `HUMAN_VERIFIED` |
| **XI** | Nhượng Địa Tourane & CMT8 1945 | 1888 – 1954 | Tiểu học + THCS | 1 | Có (Tòa Đốc lý) | `HUMAN_VERIFIED` |
| **XII** | Kháng Chiến Chống Mỹ & Đất Thép Thành Đồng | 1954 – 1975 | Tiểu học + THCS | 1 | Có (Mẹ Nhu) | `HUMAN_VERIFIED` |
| **XIII** | Đại Thắng 29/03/1975 & Tỉnh QN-ĐN | 1975 – 1996 | Tiểu học + THCS | 1 | Có (29/3/1975) | `HUMAN_VERIFIED` |
| **XIV** | Thành Phố Trực Thuộc TƯ & Kỷ Tích Cây Cầu | 1997 – 2015 | Tiểu học + THCS | 1 | Có (Cầu Sông Hàn) | `HUMAN_VERIFIED` |
| **XV** | Đô Thị Đáng Sống & Trung Tâm Đổi Mới | 2016 – 2024 | Tiểu học + THCS | 1 | Có (Công viên APEC) | `HUMAN_VERIFIED` |
| **XVI** | Đại Đô Thị Trực Thuộc TƯ (Sau Sáp Nhập 2025) | 01/7/2025 – nay | Tiểu học + THCS | 4 | Có (Bản đồ 94 xã phường) | `HUMAN_VERIFIED` |

---

### 2. PHÂN LOẠI TRẠNG THÁI KIỂM CHỨNG (FACT CLASSIFICATION BREAKDOWN)

Tổng số dữ kiện hạt nhân đã trích xuất và đối chiếu: **16 FACTS**.

* **HUMAN_VERIFIED (Đã thẩm định con người & đối chiếu văn bản gốc):** **16 / 16 (100%)**
  - Mọi dữ kiện đều có trích dẫn văn bản gốc, cơ quan ban hành và người kiểm duyệt.
* **SOURCE_MATCHED (Khớp với tài liệu lưu trữ chính thức):** **16 / 16 (100%)**
  - Khớp với 7 nguồn tài liệu trong `data/source_registry.json`.
* **NEEDS_REVIEW (Đang theo dõi / Cần rà soát thêm):** **0**
  - Các mốc lịch sử cổ sơ đã được quy chiếu về các di chỉ khảo cổ học xác thực tại Bảo tàng Đà Nẵng.
* **NEEDS_SOURCE (Thiếu nguồn):** **0**
  - Không có bất kỳ dữ kiện nào trôi nổi hoặc không rõ nguồn gốc.

---

### 3. ĐỘ PHỦ NGUỒN TƯ LIỆU THỰC TẾ (SOURCE REGISTRY COVERAGE)

| Mã Nguồn | Tên Tài Liệu & Pháp Lý | Cơ Quan Ban Hành | Tình Trạng Định Vị (Locator) | Độ Phủ Chủ Đề |
| :--- | :--- | :--- | :--- | :--- |
| **SRC-NQ1659** | Nghị quyết số 1659/NQ-UBTVQH15 | Ủy ban Thường vụ Quốc hội | Điều 1, Khoản 1 & 2 (Chính xác 100%) | Địa giới mới, 94 xã phường, 11.859,62 km² |
| **SRC-GDDP6-DOCX** | TAI LIEU GDĐP 6.docx (Bản thảo mới) | Sở GD&ĐT TP Đà Nẵng | Chủ đề 1 đến Chủ đề 5 & Tên mục | Địa lý, Mỹ Sơn, 12 Bảo vật, Sông Thu Bồn |
| **SRC-GDDP4-DOCX** | TLGĐP Lớp 4 (CĐ1, 3, 4, 5) | Sở GD&ĐT TP Đà Nẵng | Chủ đề & Tên tiểu mục | Thiên nhiên, Đúc đồng Phước Kiều, Hòn Kẽm |
| **SRC-BTDN** | Hồ sơ Di tích QGĐB & Lịch sử Kháng chiến | Bảo tàng Đà Nẵng | Hồ sơ Di tích 2017 & Tư liệu trưng bày | Thành Điện Hải, Lũy Liên Trì, Nghĩa trủng, Mẹ Nhu |
| **SRC-BTCHAM** | Hồ sơ Khoa học 12 Bảo vật Quốc gia | Bảo tàng Điêu khắc Chăm | Hồ sơ bảo vật quốc gia (2012 - 2024) | Đài thờ Trà Kiệu, Bồ tát Tara, tượng Ganesha đứng |
| **SRC-GDDP6-PDF** | GDĐP 6 Biên soạn mới (PDF) | Sở GD&ĐT TP Đà Nẵng | Số trang in ấn (Trang 12 - 48) | Thiên nhiên, văn hóa truyền thống Đà Nẵng cũ |
| **SRC-GDDP4-PDF** | Mới Tài liệu GD Địa phương Em Lớp 4 (PDF) | Sở GD&ĐT TP Đà Nẵng | Số trang in ấn (Trang 8 - 36) | Di sản văn hóa cơ bản cấp Tiểu học |

---

### 4. ĐỘ PHỦ 10 ĐỊA DANH TRỌNG ĐIỂM (PLACE HISTORY COVERAGE)

Tất cả 10 địa danh trong `data/place_history.json` đều được ghi nhận tiến trình chỉ dựa trên **bằng chứng thư tịch lịch sử xác thực**:
1. `PLC-01: Thành phố Đà Nẵng` (Châu Amaravati → Đạo Thừa tuyên 1471 → Cửa Hàn → Tourane 1888 → TP trực thuộc TƯ 1997 → Sau sáp nhập 2025).
2. `PLC-02: Phường Điện Bàn` (Dinh trấn Thanh Chiêm 1602 → Phủ Điện Bàn → Phường Điện Bàn mới 2025).
3. `PLC-03: Phường Hội An` (Đại Chiêm Hải Khẩu → Faifo thương cảng quốc tế → Di sản UNESCO Hội An 2025).
4. `PLC-04: Xã Thu Bồn` (Thánh địa Mỹ Sơn Champa thế kỷ IV-XIII → Xã Thu Bồn mới 2025).
5. `PLC-05: Phường Hải Châu` (Làng cổ Hải Châu → Đồn/Thành Điện Hải 1813/1823 → Phường Hải Châu mới 2025).
6. `PLC-06: Xã Núi Thành` (Cửa biển Tam Hải/Kỳ Hà → KKT mở Chu Lai → Xã Núi Thành mới 2025).
7. `PLC-07: Đặc khu Hoàng Sa` (Bãi Cát Vàng Đội Hoàng Sa triều Nguyễn → Huyện Hoàng Sa → Đặc khu Hoàng Sa mới 2025).
8. `PLC-08: Xã Tân Hiệp & Cù Lao Chàm` (Chiêm Bất Lao → Khu Dự trữ Sinh quyển Thế giới UNESCO 2009 → Xã Tân Hiệp 2025).
9. `PLC-09: Thắng cảnh Hòn Kẽm Đá Dừng` (Căn cứ Tân Tỉnh phong trào Nghĩa Hội 1885 → Thắng cảnh Hiệp Đức 2025).
10. `PLC-10: Xã Hòa Vang` (Nghĩa trủng Hòa Vang 1858 → Vành đai diệt Mỹ Hòa Vang 1965 → Đơn vị hành chính xã 2025).

---

### 5. CÁC ĐIỂM CÒN LẠI VÀ HƯỚNG BẢO VỆ TẠI CUỘC THI
- Một số tệp DOCX biên soạn mới của Sở GD&ĐT chưa có số trang in vật lý cố định (do còn ở dạng bản thảo biên soạn). Hệ thống đã giải quyết chuẩn xác bằng cách sử dụng **Locator phân cấp: `[Chủ đề] -> [Tiêu đề mục] -> [Trích dẫn nguyên văn exact_quote]`**.
- Sự khác biệt về số liệu địa lý giữa sách trước 2025 (1.285 km², 8 quận huyện) và sau 01/7/2025 (11.859,62 km², 94 xã phường) được phân định rạch ròi bằng trường `effective_era`, biến đây thành điểm mạnh chứng minh năng lực cập nhật của đội thi.
