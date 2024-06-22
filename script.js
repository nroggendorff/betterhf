const beanContainer = document.getElementById('bean-container');

function createBean() {
    const bean = document.createElement('img');
    bean.src = 'bean.svg';
    bean.alt = 'falling bean';
    bean.className = 'bean';
    
    const leftPosition = Math.random() * 100;
    bean.style.left = `${leftPosition}%`;
    
    bean.style.top = '-30px';
    
    const rotation = Math.random() * 360;
    bean.style.transform = `rotate(${rotation}deg)`;
    
    const fallDuration = 3 + Math.random() * 3;
    bean.style.animationDuration = `${fallDuration}s`;

    beanContainer.appendChild(bean);

    setTimeout(() => {
        bean.remove();
    }, fallDuration * 1000);
}

function startBeanRain() {
    createBean();
    setTimeout(startBeanRain, 100 + Math.random() * 200);
}

startBeanRain();
