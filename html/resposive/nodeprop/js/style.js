(function MenuEvents()
{  
    const btnMenu = document.getElementsByClassName('btn-menu')[0];
    const btnClose = document.getElementsByClassName('btn-close')[0];
    btnMenu.addEventListener('click',function ()
    {
        const menu = document.getElementsByClassName('menu')[0];
        menu.classList.remove('hidden');
    });
    
    btnClose.addEventListener('click',function () {
        const menu = document.getElementsByClassName('menu')[0];
        menu.classList.add('hidden')
    })

})();
