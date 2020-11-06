$(document).ready(function () {

    $('.btn-buscar').click(function (e) {
        e.preventDefault()

        var cep = $('#cep').val()
        var buscar = `https://viacep.com.br/ws/${cep}/json/`

        $.ajax({
            dataType: 'JSON',
            type: 'GET',
            assync: true,
            url: buscar,
            success: function (dados) {
                $('#logradouro').val(dados.logradouro)
                $('#localidade').val(dados.localidade)
                $('#bairro').val(dados.bairro)
                $('#uf').val(dados.uf)
            }
        })

    })

})