import React from "react";
import { IntlProvider } from "./";
import { useIntl } from "../../hooks/useIntl";
import { MessageDescriptor } from "react-intl";
import sinon, { SinonSandbox } from "sinon";
import { render } from "@testing-library/react";

const createMessage = () => ({ id: "id", defaultMessage: "This is the default" });
const Component = ({ message }: { message: MessageDescriptor }) => {
  const intl = useIntl();

  return <div>{intl.formatMessage(message)}</div>;
};

describe("<IntlProvider />", () => {
  let sandbox: SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should mount with messages", () => {
    const message = createMessage();
    const { getByText } = render(
      <IntlProvider>
        <Component message={message} />
      </IntlProvider>
    );

    expect(getByText("This is the default")).toBeInTheDocument();
  });

  it("logs a warning when no messages loaded", () => {
    sandbox.stub(console, "error").callsFake(() => {});

    const spy = sandbox.stub(console, "warn").callsFake(() => {});
    const message = createMessage();
    const { getByText } = render(
      <IntlProvider>
        <Component message={message} />
      </IntlProvider>
    );

    expect(getByText("This is the default")).toBeInTheDocument();
    expect(spy.calledOnce).toBeTruthy();
  });

  it("logs an error when no default message is loaded", () => {
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

  it("does not logs an error when is not a translation error", () => {
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
    sinon.stub(process, "env").value({ NODE_ENV: "production" });

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
