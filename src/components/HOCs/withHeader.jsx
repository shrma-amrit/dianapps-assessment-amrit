import { Header } from "../Header";

const withHeader = (WrappedComponent) => {
  const NewComponent = (props) => {
    return (
      <div className="displayFlex min-100vh flexColumn">
        <Header />
        <WrappedComponent {...props} />
      </div>
    );
  };

  return NewComponent;
};

export default withHeader;
