<script>
        const formulario = document.querySelector("#form-contato");

        formulario.addEventListener("submit",
        function (event) {
        event.preventDefault();
        alert("Mensagem enviada com sucesso! Obrigado pelo contato! Retornarei em breve.");
        });
</script>