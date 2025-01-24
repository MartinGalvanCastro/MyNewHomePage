import React, { PropsWithChildren } from "react";
import { IntlProvider } from ".";
import { useIntl } from "../../hooks/useIntl";
import { defineMessage, MessageDescriptor } from "react-intl";
import sinon, { SinonSandbox, SinonStub } from "sinon";
import { render } from "@testing-library/react";
import * as UseGetLocale from "../../hooks/useGetLocale";

//TODO: Update test for not login when defaultMessage is not missing

const createMessage = () => defineMessage({ id: "id", defaultMessage: "This is the default" });
const Component = ({ message }: { message: MessageDescriptor }) => {
  const intl = useIntl();

  return <div>{intl.formatMessage(message)}</div>;
};

describe("<IntlProvider />", () => {
  let sandbox: SinonSandbox;
  let useGetLocale: SinonStub;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    useGetLocale = sandbox.stub(UseGetLocale, "useGetLocale");
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should mount with messages", () => {
    useGetLocale.returns({ locale: "en" });
    const message = createMessage();
    const { getByText } = render(
      <IntlProvider>
        <Component message={message} />
      </IntlProvider>
    );

    expect(getByText("This is the default")).toBeInTheDocument();
  });

  it("logs an error when no default message is loaded", () => {
    useGetLocale.returns({ locale: "en" });
    const spy = sandbox.stub(console, "error").callsFake(() => {});
    const message = { id: "id" };
    const { getByText } = render(
      <IntlProvider>
        <Component message={message} />
      </IntlProvider>
    );

    expect(getByText("id")).toBeInTheDocument();
    expect(spy.calledOnce).toBeTruthy();
  });

  it("does not log an error when it is not a translation error", () => {
    useGetLocale.returns({ locale: "en" });
    const spy = sandbox.stub(console, "error").callsFake(() => {});
    const message = { id: "id", defaultMessage: "missing {now, date, format_missing}" };

    render(
      <IntlProvider>
        <Component message={message} />
      </IntlProvider>
    );

    expect(spy.notCalled).toBeTruthy();
  });

  it("does not log in production", () => {
    useGetLocale.returns({ locale: "en" });
    sandbox.stub(process, "env").value({ NODE_ENV: "production" });

    const spy = sandbox.stub(console, "error").callsFake(() => {});
    const message = { id: "id", defaultMessage: "missing {now, date, format_missing}" };

    render(
      <IntlProvider>
        <Component message={message} />
      </IntlProvider>
    );

    expect(spy.notCalled).toBeTruthy();
  });
});
