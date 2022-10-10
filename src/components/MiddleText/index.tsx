import { Pencil, SignOut } from "phosphor-react";
import { MiddleTextContainer } from "./styles";

interface MiddleTextProps {
  title: string;
}

interface Props {
  text: string;
}

export function MiddleText({ text }: Props) {
  return (
    <MiddleTextContainer>
      <button>
        <SignOut size={16} />
        Sortir
      </button>

      <h1>{text}</h1>
      <button>
        Editer profile <Pencil size={16} />
      </button>
    </MiddleTextContainer>
  );
}
