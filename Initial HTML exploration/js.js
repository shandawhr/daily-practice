

let realtimeNow = '';

let countdownToNov1 = '';

function updateTimeVars() {
    const now = new Date();
   
    realtimeNow = now.getFullYear() + '-' +
        String(now.getMonth() + 1).padStart(2, '0') + '-' +
        String(now.getDate()).padStart(2, '0') + ' ' +
        String(now.getHours()).padStart(2, '0') + ':' +
        String(now.getMinutes()).padStart(2, '0') + ':' +
        String(now.getSeconds()).padStart(2, '0');

    
    const target = new Date('2025-11-01T00:00:00');
    let diff = target - now;
    if (diff < 0) diff = 0;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    countdownToNov1 = `${days}天${hours}小时${minutes}分${seconds}秒`;
}


setInterval(updateTimeVars, 1000);
updateTimeVars();

var a = '现在是'+realtimeNow+'\n距离2025年11月1日还有\n';
let b = `<div class="countdown">${countdownToNov1}</div>`;

const navbar = document.getElementById('navbar')
const content = [
    a + b,
    '',
    '代码的那边是什么',
    '推推clannad,世纪神番',
    "赞美世界",
]

function fun() {

    const isHidden = navbar.classList.toggle('hidden')

    navbar.style.display = isHidden ? 'none' : 'block'
}

const tieba_ele = document.getElementsByClassName('tieba')[0];

for (var i = 0; i < 5; i++) {
    const t_i = document.createElement('div');
    t_i.className = 't' + i;
    tieba_ele.appendChild(t_i);
    t_i.innerHTML = String(content[i]).replace(/\n/g, '<br>');
    

}




for (var j = 1; j < 5; j++) {
    const container = document.querySelector('.t' + j);
    if (!container) continue;

    
    const img = document.createElement('div');
    img.className = 'dianzan';
    img.dataset.liked = 'false';

   
    const count = document.createElement('span');
    count.className = 'dianzan-count';
    count.textContent = '0';

  
    container.appendChild(img);
    container.appendChild(count);

   
    img.addEventListener('click', function () {
        if (this.dataset.liked === 'true') return;
        this.dataset.liked = 'true';
        this.classList.add('clicked');
        const next = this.nextSibling;
        if (next && next.classList && next.classList.contains('dianzan-count')) {
            next.textContent = String(Number(next.textContent || 0) + 1);
        }
    });
}


const contentx =['学生在线,精彩无限','2025年10月26日','学生在线,精彩无限，和有趣的人发现更精彩的自己']
const t1 = document.querySelector('.t1');
for(var k=0;k<3;k++){
    const h_k =document.createElement('div')
    h_k.className='h_'+k;
    t1.appendChild(h_k);
    h_k.innerHTML=contentx[k] 
}





