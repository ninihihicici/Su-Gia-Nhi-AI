// Sử Gia Nhí AI — Backend proxy /api/chat (Vercel Serverless Function)
// Key OpenAI đọc từ biến môi trường OPENAI_API_KEY, không bao giờ lộ ra trình duyệt.

const ALLOWED_MODELS = new Set(["gpt-4o-mini", "gpt-3.5-turbo"]);
const MAX_MESSAGES = 12;          // system + ~4 lượt gần nhất + câu hỏi
const MAX_CHARS_PER_MSG = 12000;  // system prompt kèm ngữ cảnh RAG khá dài
const MAX_TOKENS_CAP = 900;

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ error: { message: "Chỉ chấp nhận POST" } });
    return;
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: { message: "Server chưa cấu hình OPENAI_API_KEY" } });
    return;
  }

  try {
    const body = req.body || {};
    const messages = Array.isArray(body.messages) ? body.messages : null;

    // Kiểm tra đầu vào — chặn lạm dụng
    if (!messages || messages.length === 0 || messages.length > MAX_MESSAGES) {
      res.status(400).json({ error: { message: "messages không hợp lệ" } });
      return;
    }
    for (const m of messages) {
      if (!m || typeof m.content !== "string" || m.content.length > MAX_CHARS_PER_MSG ||
          !["system", "user", "assistant"].includes(m.role)) {
        res.status(400).json({ error: { message: "Nội dung tin nhắn không hợp lệ" } });
        return;
      }
    }

    const model = ALLOWED_MODELS.has(body.model) ? body.model : "gpt-4o-mini";
    const max_tokens = Math.min(Number(body.max_tokens) || 800, MAX_TOKENS_CAP);
    const temperature = Math.min(Math.max(Number(body.temperature) || 0.3, 0), 1);

    const upstream = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ model, messages, temperature, max_tokens }),
    });

    const data = await upstream.json();
    if (!upstream.ok) {
      // Không trả nguyên văn lỗi của OpenAI (có thể chứa thông tin nhạy cảm)
      const msg = (data && data.error && data.error.message) || `Upstream HTTP ${upstream.status}`;
      res.status(502).json({ error: { message: msg.slice(0, 300) } });
      return;
    }

    // Trả đúng cấu trúc frontend đang đọc: data.choices[0].message.content
    res.status(200).json({ choices: data.choices });
  } catch (e) {
    res.status(500).json({ error: { message: "Lỗi máy chủ: " + (e.message || "không rõ") } });
  }
};
