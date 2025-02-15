"use client";

import Image from "next/image";

import { About, Container } from "./styles";

export default function EmployeeApp({ employee }) {
  return (
    <Container>
      <Image
        width={500}
        height={500}
        src={employee.files[0]}
        alt="photo"
        style={{ objectFit: 'cover' }}
      />

      <About>
        <h1>{employee.name}</h1>
        <br />
        <p>
          Olá amores depois de uma longas férias estou de volta ,pra quem já conhece o atendimento prepare-se porque versão 2024 tá melhor ainda ,pra quem não conhece venha conhecer e matar a curiosidade.<br />
          Além do atendimento impecável,caso deseja pode desfrutar de uma bela massagem relaxante.<br />
          Mesmo Local discreto e tranquilo. Rua sem saída.
          <br /><br />
          Magrinha 50 Kilos
          Baixinha :1.57
          Tamanho ideal pra você pegar no colo e deixar a imaginação tomar conta 😈😈<br />
          No atendimento nada robótico,você literalmente fica bem à vontade, o atendimento é tão maravilhoso que a satisfação é garantida.<br />
          Vc tem duas opções ou sai satisfeito ou sai muito satisfeito,não tem outra...<br />
          Quer romance compra um livro ,quer sentadas..... Vem ,só vem .
          <br /><br />
          Horário de atendimento:<br />
          Das 09:00 às 21:00 horas de Segunda à Sexta.
          <br /><br />
          Cachê:<br />
          R$ 150,00 - 30 minutos<br />
          R$ 200,00 - 1 hora
        </p>
      </About>
    </Container>
  )
}