document.addEventListener('DOMContentLoaded', () => {
    try {
        // fin.desktop.main(() => {
        //     initWithOpenFin();
        // })
    } catch (err) {
        initNoOpenFin();
    }
});


function initWithOpenFin() {
    alert('initWithOpenFin');
}

function initNoOpenFin() {
    alert('initNoOpenFin');
}