feather.replace()

let deleteButton = document.querySelectorAll('.delete')
    .forEach(item => item.addEventListener('click', function(e) {
        confirm('Deseja excluir o registro?');
    }, false))