async function chamarAutenticar(email, senha) {
    data = {
        email: email,
        senha: senha
    }

    const response = await fetch("http://localhost:8080/professor/autenticar",
        {
            method: "GET",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }
    )

    if (!response.ok) {
        // Se a resposta não for OK, lança um erro
        throw new Error('Falha na autenticação');
    }

    const dadosAutenticacao = await response.json(); // Aguarda a resposta em formato JSON
    
    const foiAutenticado = { ////// tentando fazer ele passar, e nao esta indo
        autenticado: true
    }
    return foiAutenticado; // Retorna os dados de autenticação
}

async function autenticar(email, senha) {
    try {
        const dadosAutenticacao = await chamarAutenticar(email, senha); // Aguarda a chamada assíncrona
        const foiAutenticado = dadosAutenticacao.autenticado; // Acessa o parâmetro autenticado

        if (foiAutenticado) {
            // Redireciona se a condição for verdadeira
            window.location.href = './telaProfessor.html'; // URL tela professor
        } else {
            console.error('Usuário não autenticado');
        }
    } catch (error) {
        console.error('Erro durante a autenticação:', error);
    }
}
