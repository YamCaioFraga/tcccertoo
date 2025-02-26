document.addEventListener('DOMContentLoaded', function () {
    let jobItems = document.querySelectorAll('.job-item');
    
    // Faz todas as vagas aparecerem ao carregar a página
    jobItems.forEach(function(job) {
        job.classList.add('show');
    });

    // Filtro de pesquisa
    document.getElementById('searchBar').addEventListener('input', function () {
        let filter = this.value.toLowerCase();
        
        jobItems.forEach(function(job) {
            let title = job.querySelector('h3').textContent.toLowerCase();
            if (title.includes(filter)) {
                job.classList.add('show'); // Mantém visível
            } else {
                job.classList.remove('show'); // Oculta se não corresponder
            }
        });
    });
});