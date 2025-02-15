"use client"

import { Button, Input } from "@common";
import { User } from "@svg";

import { Container } from "./styles";

export default function Register() {
  return (
    <Container>

      <form>
        <Input.Root>
          <Input.Icon icon={User} />
          <Input.Input placeholder="nome completo" onChange={console.log} />
        </Input.Root>

        <Input.Root>
          <Input.Icon icon={User} />
          <Input.Input placeholder="nome ficticio" onChange={console.log} />
        </Input.Root>

        <div className="row">
          <Input.Root>
            <Input.Icon icon={User} />
            <Input.Input placeholder="senha" onChange={console.log} type="password" />
          </Input.Root>

          <div style={{ width: 15 }} />

          <Input.Root>
            <Input.Icon icon={User} />
            <Input.Input placeholder="repita a senha" onChange={console.log} type="password" />
          </Input.Root>
        </div>

        <Button>Enviar</Button>
      </form>

    </Container>
  )
};
