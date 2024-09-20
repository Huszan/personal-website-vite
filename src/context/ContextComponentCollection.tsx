import GlobalContextComponent from "./GlobalContextComponent";

interface ContextComponentCollectionProps {
  children: React.ReactNode;
}

const ContextComponentCollection = (props: ContextComponentCollectionProps) => {
  const { children } = props;
  return <GlobalContextComponent>{children}</GlobalContextComponent>;
};

export default ContextComponentCollection;
