"use client"

import { Button, Input } from "@common";
import { Google, User } from "@svg";

import { Container, LoginWith } from "./styles";

export default function Auth() {
  return (
    <Container>

      <form>
        <Input.Root>
          <Input.Icon icon={User} />
          <Input.Input placeholder="nome ficticio ou email" onChange={console.log} />
        </Input.Root>

        <Input.Root>
          <Input.Icon icon={User} />
          <Input.Input placeholder="senha" onChange={console.log} type="password" />
        </Input.Root>

        <Button>Enviar</Button>
      </form>

      <LoginWith>
        <span />
        <p>entrar com</p>
        <span />
      </LoginWith>

      <button>
        <Google width={50} height={50} />
      </button>

    </Container>
  )
};
