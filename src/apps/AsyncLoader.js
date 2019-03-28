import Loadable from "react-loadable";

const AsyncLoader = opts =>
  Loadable({
    loading: () => <div>loading...</div>,
    ...opts
  });

export default AsyncLoader;
