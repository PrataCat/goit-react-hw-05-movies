import { ColorRing } from 'react-loader-spinner';
import { LoaderWrap } from './Loader.styled';

const Loader = () => (
  <LoaderWrap>
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />
  </LoaderWrap>
);

export default Loader;
