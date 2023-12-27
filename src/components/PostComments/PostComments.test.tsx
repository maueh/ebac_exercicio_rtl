import { fireEvent, render, screen } from "@testing-library/react";
import Post from ".";
import PostComment from ".";

const comentarios = [
  "Que foto legal!",
  "Esse é o meu segundo comentário! Lorem ipsum dolor sit amte consectur?!",
];

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  test("Deve renderizar 2 novos comentarios publicados pelos usuário", () => {
    const { debug } = render(<PostComment />);

    //Adiciona primeiro comentario
    fireEvent.change(screen.getByTestId("caixa-comentario"), {
      target: {
        value: comentarios[0],
      },
    });
    fireEvent.click(screen.getByTestId("btn-comentar"));
    //Checa se o primeiro comentario foi renderizado
    expect(screen.getByText(comentarios[0])).toBeInTheDocument();

    //Adiciona segundo comentario
    fireEvent.change(screen.getByTestId("caixa-comentario"), {
      target: {
        value: comentarios[1],
      },
    });
    fireEvent.click(screen.getByTestId("btn-comentar"));
    debug();
    //Checa se o segundo comentario foi renderizado
    expect(screen.getByText(comentarios[1])).toBeInTheDocument();
  });
});
