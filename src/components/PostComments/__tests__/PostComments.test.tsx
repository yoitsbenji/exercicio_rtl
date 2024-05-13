    import { fireEvent, render, screen } from "@testing-library/react";
    import PostComment from "..";
    import Post from "..";

        describe("Teste para o componente PostComment", () => {
        it("Deve renderizar o componente corretamente", () => {
            render(<PostComment />);
            expect(screen.getByText("Comentar")).toBeInTheDocument();
        });

            test("deve adicionar os comentarios", () => {
            render(<Post />);

            fireEvent.change(screen.getByTestId("campo-comment"), {
                target: {
                value: "novo comentario",
                },
            });

            fireEvent.click(screen.getByTestId("btn-comment"));
            expect(screen.getByText("novo comentario")).toBeInTheDocument();
            


            fireEvent.change(screen.getByTestId("campo-comment"), {
                target: {
                value: "segundo comentario",
                },
            });

            fireEvent.click(screen.getByTestId("btn-comment"));
            expect(screen.getByText("novo comentario")).toBeInTheDocument();

            expect(screen.getAllByTestId('comment-li')).toHaveLength(2)
            });

        });