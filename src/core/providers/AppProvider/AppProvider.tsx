import { PropsWithChildren } from "react";
import { IntlProvider } from "../IntlProvider";

const providers = [IntlProvider];

export default function AppProvider({ children }: PropsWithChildren<{}>) {
  return (
    <>
      {providers.reduceRight((acc, Provider) => {
        return <Provider>{acc}</Provider>;
      }, children)}
    </>
  );
}
