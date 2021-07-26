 let baner = document.body.querySelector('p');
        let button = document.body.querySelector('button');

        button.addEventListener('click', function() {
            baner.classList.add('active');
            setTimeout(function() {
                baner.classList.remove('active');
            }, 6000);

        });