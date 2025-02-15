import { Container, ContainerIcon, InputTextStyled } from "./styles";

type InputProps = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

function Root({ children }: any) {
  return (
    <Container>
      {children}
    </Container>
  )
};

function Icon({ icon: Icon }: InputProps) {
  return (
    <ContainerIcon>
      <Icon width={21} height={21} strokeWidth={2} />
    </ContainerIcon>
  );
};

function InputText({ ...rest }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <InputTextStyled {...rest} />
  );
};

export const Input = {
  Root,
  Icon,
  Input: InputText
};
