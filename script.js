document.getElementById('btn-show').addEventListener('click', function() {
    const resumo = `
    - HTML: Cria a estrutura e o conteúdo de uma página web.
    - CSS: Define o estilo e layout da página, tornando-a visualmente atraente.
    - JavaScript: Adiciona interatividade e dinamismo, permitindo manipulação em tempo real.
    `;
    document.getElementById('resumo').textContent = resumo;
});