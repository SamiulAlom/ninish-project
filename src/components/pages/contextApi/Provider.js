import MainContext from "./MainContext";

const ContextProvider = (props) => {
  return <MainContext.Provider>{props.children}</MainContext.Provider>;
};
export default ContextProvider;
