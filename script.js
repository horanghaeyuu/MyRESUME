document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio loaded with Pastel Theme!");
    
    // ลูกเล่นเล็กๆ: แอนิเมชันเมื่อเลื่อนเมาส์ผ่านการ์ด
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.transition = '0.3s';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});