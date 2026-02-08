const modalBackdrop = document.getElementById("modalBackdrop");
const closeBtn = document.getElementById("closeModalBtn");
const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const letterText = document.getElementById("letterText");

// ✅ ข้อความจดหมาย
const MESSAGE = `
สุขสันต์วันเกิด วันนี้วันเกิดแฟนน เค้าขอให้แฟนมีความสุขมากๆ ยิ้มเย้อๆ อยู่น่ารักกับเค้าไปนานๆนะ 
สมหวังในทุกเรื่องที่ตั้งใจ ขอให้คนรอบตัวน่ารักกับแฟนเค้าทุกคน เพราะแฟนเค้าเป็นคนสดใสน่ารักที่สุด ขอบคุณแฟนที่อยุ่ข้างเค้าในวันที่เค้าเหนื่อย เค้าก็จะอยุ่ข้างแฟนตลอดเรย เค้ารักแฟนนะที่สุดในโลกเรย พีน้อยจะจุ้บๆแฟนเอง♥️🎂
`;

// 🔓 เปิด modal
function openModal(){
  letterText.textContent = MESSAGE.trim();
  modalBackdrop.style.display = "flex";
}

// ❌ ปิด modal
function closeModal(){
  modalBackdrop.style.display = "none";
}

// ===== EVENTS =====
if(openLetter){
  openLetter.addEventListener("click", openModal);
}

if(readBtn){
  readBtn.addEventListener("click", openModal);
}

if(closeBtn){
  closeBtn.addEventListener("click", closeModal);
}

// กดพื้นหลังเพื่อปิด
modalBackdrop.addEventListener("click", (e)=>{
  if(e.target === modalBackdrop){
    closeModal();
  }
});
