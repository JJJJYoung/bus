document.querySelectorAll('area').forEach(area => {
    area.addEventListener('click',function(){
        document.querySelector('.highlight')?.classList.remove('highlight');
        const location =document.getElementById(this.dataset.location);
        location.classList.add('highlight');
        location.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });


    area.addEventListener('click',function(){
        document.querySelector('.highlight')?.classList.remove('highlight');
        const location =document.getElementById(this.dataset.location);
        location.classList.add('highlight');
        location.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
    
});