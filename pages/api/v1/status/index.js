function status(request, response) {
  response
    .status(200)
    .json({ chave: "alunos do curso.dev são alunos acima da média" });
}

export default status;
