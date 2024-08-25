
const btn = document.getElementById('btn');
 
btn.addEventListener('click', () => {
    setTimeout(() => {
        const updMsg = document.getElementById('text');
        updMsg.textContent = 'ボタンをクリックしました';    
    },2000)
 });